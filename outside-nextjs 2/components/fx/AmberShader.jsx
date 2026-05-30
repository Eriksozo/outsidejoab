"use client";

import { useEffect, useRef } from "react";

/**
 * Fundo WebGL âmbar do herói — fbm com domain warping (ondas), reativo ao mouse.
 * Mesmo shader da versão HTML. Degrada em mobile / prefers-reduced-motion.
 */
export default function AmberShader() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const IS_MOBILE = window.matchMedia && window.matchMedia("(max-width: 760px)").matches;
    const DPR_CAP = IS_MOBILE ? 1.5 : 2;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: false });
    if (!gl) { canvas.style.display = "none"; return; }

    const vsrc = "attribute vec2 p; void main(){ gl_Position = vec4(p,0.0,1.0); }";
    const fsrc = [
      "precision highp float;",
      "uniform vec2 u_res; uniform float u_time; uniform vec2 u_mouse; uniform float u_amp;",
      "float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }",
      "float noise(vec2 p){ vec2 i=floor(p), f=fract(p);",
      "  float a=hash(i), b=hash(i+vec2(1.,0.)), c=hash(i+vec2(0.,1.)), d=hash(i+vec2(1.,1.));",
      "  vec2 u=f*f*(3.-2.*f); return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y; }",
      "float fbm(vec2 p){ float v=0.,a=0.5; for(int i=0;i<5;i++){ v+=a*noise(p); p*=2.02; a*=0.5; } return v; }",
      "void main(){",
      "  vec2 uv = gl_FragCoord.xy / u_res.xy;",
      "  vec2 p = (gl_FragCoord.xy - 0.5*u_res.xy) / u_res.y;",
      "  float t = u_time*0.06;",
      "  vec2 m = (u_mouse - 0.5);",
      "  vec2 q = vec2(fbm(p*2.2 + vec2(0.0,t)), fbm(p*2.2 + vec2(5.2,-t)));",
      "  vec2 r = vec2(fbm(p*2.2 + 3.0*q + vec2(1.7,9.2) + m*0.6), fbm(p*2.2 + 3.0*q + vec2(8.3,2.8) - m*0.6));",
      "  float f = fbm(p*2.2 + 2.0*r + t);",
      "  vec3 base = vec3(0.059,0.047,0.035);",
      "  vec3 amber = vec3(0.851,0.639,0.357);",
      "  vec3 warm = vec3(0.91,0.36,0.10);",
      "  vec3 col = mix(base, amber, smoothstep(0.25,0.95,f)*u_amp);",
      "  col = mix(col, warm, smoothstep(0.65,1.05,f)*0.5*u_amp);",
      "  float d = distance(uv, u_mouse);",
      "  col += amber * (0.10*u_amp) * smoothstep(0.55,0.0,d);",
      "  float vig = smoothstep(1.15,0.25,length(p));",
      "  col *= mix(0.55,1.0,vig);",
      "  float alpha = clamp(0.30 + 0.65*f*u_amp, 0.0, 0.92);",
      "  gl_FragColor = vec4(col, alpha);",
      "}",
    ].join("\n");

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src); gl.compileShader(s);
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
    };
    const vs = compile(gl.VERTEX_SHADER, vsrc);
    const fs = compile(gl.FRAGMENT_SHADER, fsrc);
    if (!vs || !fs) { canvas.style.display = "none"; return; }
    const prog = gl.createProgram();
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.display = "none"; return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uAmp = gl.getUniformLocation(prog, "u_amp");

    const mouse = { x: 0.5, y: 0.5 }, tmouse = { x: 0.5, y: 0.5 };
    const amp = REDUCED ? 0.45 : 1.0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      canvas.width = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      tmouse.x = (e.clientX - rect.left) / rect.width;
      tmouse.y = 1.0 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let start = performance.now(), raf, running = true;
    const frame = (now) => {
      if (!running) return;
      mouse.x += (tmouse.x - mouse.x) * 0.06;
      mouse.y += (tmouse.y - mouse.y) * 0.06;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, REDUCED ? 0.0 : (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uAmp, amp);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const onVis = () => {
      running = !document.hidden;
      if (running) { start = performance.now(); raf = requestAnimationFrame(frame); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    const io = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) { if (!running && !document.hidden) { running = true; raf = requestAnimationFrame(frame); } }
        else { running = false; cancelAnimationFrame(raf); }
      });
    }, { threshold: 0.01 });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="hero-shader" aria-hidden="true" />;
}
