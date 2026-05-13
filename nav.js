/* Cachai Solutions — Shared Nav */
(function() {
  // 1. Inyectar CSS
  const style = document.createElement('style');
  style.textContent = `:root {
  --bg:        #2a5f72;
  --bg2:       #1e4a5a;
  --green:     #1a7a8a;
  --green-mid: #1a9aaa;
  --green-lit: #7DCDE8;
  --green-pale:#052535;
  --white:     #e8f8fc;
  --grey:      #6ab8c8;
  --grey-dim:  #1a3a4a;
  --line:      rgba(125,224,240,.12);
  --r:         10px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { margin: 0; padding: 0; border: 0; }
html { scroll-behavior: smooth; overflow-x: hidden; }
body {
  font-family: 'Onest', sans-serif;
  background: #ffffff;
  color: #0d2030;
  overflow-x: hidden;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}





/* ── NAV ── */
/* ══ NAV TOP — aparece al inicio, desaparece al scroll ══ */
.nav-top {
  position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
  height: 72px; padding: 0 40px;
  display: flex; align-items: center; justify-content: space-between;
  transition: opacity .4s ease, transform .4s ease;
  pointer-events: all;
}
.nav-top.hidden {
  opacity: 0; transform: translateY(-16px); pointer-events: none;
}
.nav-top-logo img { height: 34px; display: block; }
.nav-top-links {
  display: flex; gap: 0; list-style: none; align-items: center;
}
.nav-top-links a {
  font-size: 13px; font-weight: 400; color: rgba(232,248,252,.8);
  text-decoration: none; padding: 8px 16px; border-radius: 4px;
  transition: color .2s, background .2s;
}
.nav-top-links a:hover { color: #e8f8fc; background: rgba(255,255,255,.1); }
.nav-top-cta {
  display: inline-flex; align-items: center;
  background: var(--white); color: var(--bg) !important;
  padding: 10px 22px; border-radius: 4px;
  font-size: 13px; font-weight: 600;
  text-decoration: none; transition: background .2s;
}
.nav-top-cta:hover { background: var(--green-lit); }

/* ══ ISOTIPO fijo — aparece al scrollear ══ */
.nav-isotipo {
  position: fixed; top: 24px; left: 32px; z-index: 499;
  opacity: 0; pointer-events: none;
  transition: opacity .4s ease;
  mix-blend-mode: difference;
}
.nav-isotipo.visible { opacity: 1; pointer-events: all; }
.nav-isotipo img { height: 36px !important; width: auto !important; max-width: 36px !important; display: block; filter: brightness(0) invert(1); }

/* ══ NAV PILL flotante abajo ══ */
nav {
  position: fixed; isolation: isolate;
  z-index: 9999 !important;
  bottom: 24px; left: 50%; transform: translateX(-50%);
  top: auto; z-index: 500;
  height: 52px; padding: 0 6px;
  display: flex; align-items: center; gap: 0;
  background: rgba(42,95,114,.88);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(125,224,240,.15);
  border-radius: 6px;
  opacity: 0; pointer-events: none;
  transition: opacity .4s ease, box-shadow .3s;
  box-shadow: 0 8px 32px rgba(0,0,0,.3);
}
nav.pill-visible { opacity: 1; pointer-events: all; }
nav.scrolled { box-shadow: 0 12px 40px rgba(0,0,0,.4); }
.nav-logo { display: none; }
.nav-links {
  display: flex; gap: 0; list-style: none; align-items: center;
}
.nav-links a {
  font-size: 13px; font-weight: 400; letter-spacing: .01em;
  color: rgba(5,24,32,.75);
  text-decoration: none; transition: color .2s, background .2s;
  padding: 8px 16px; border-radius: 4px; white-space: nowrap;
}
.nav-links a:hover { color: var(--white); background: rgba(255,255,255,.07); }
.nav-cta-wrap { margin-left: 6px; flex-shrink: 0; }
.nav-cta {
  display: inline-flex; align-items: center;
  background: var(--white); color: var(--bg) !important;
  padding: 10px 20px; border-radius: 4px;
  font-size: 13px; font-weight: 600; letter-spacing: .01em;
  text-decoration: none; transition: background .2s, transform .15s;
  white-space: nowrap;
}
.nav-cta:hover { background: var(--green-lit); transform: translateY(-1px); }
.nav-hamburger { display: none; }

/* ══ MOBILE ══ */
@media (max-width: 960px) {
  /* Nav top mobile — logo izquierda + botón derecha */
  .nav-top { padding: 0 20px; height: 64px; }
  .nav-top-links { display: none !important; }
  .nav-top-cta { display: inline-flex !important; font-size: 13px; padding: 10px 16px; }
  .nav-isotipo { top: 18px; left: 20px; }
  .nav-isotipo img { height: 30px; }
  /* Pill nav abajo — solo hamburger */
  nav {
    bottom: 16px; left: 50%; right: auto;
    transform: translateX(-50%);
    border-radius: 100px; padding: 0 6px 0 20px;
    gap: 8px;
  }
  nav .nav-links { display: none !important; }
  nav .nav-cta-wrap { display: none !important; }
  .nav-hamburger { display: flex !important; }
}
nav.scrolled {
  background: rgba(42,95,114,.92);
  backdrop-filter: blur(20px);
  border-color: var(--line);
}
.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 26px; letter-spacing: .08em;
  color: var(--white); text-decoration: none;
}
.nav-logo span { color: var(--green-lit); }
.nav-links {
  display: flex; gap: 8px; list-style: none; align-items: center;
}
.nav-links a {
  font-size: 13px; font-weight: 400; letter-spacing: .01em;
  text-transform: none; color: var(--grey);
  text-decoration: none; transition: color .2s;
  padding: 8px 14px;
}
.nav-links a:hover { color: var(--white); }
.nav-cta {
  display: inline-flex; align-items: center;
  background: var(--white);
  color: var(--bg) !important;
  padding: 10px 24px;
  border-radius: 4px;
  font-size: 13px; font-weight: 600;
  letter-spacing: .06em; text-transform: none;
  text-decoration: none;
  transition: background .2s, transform .15s;
}
.nav-cta:hover {
  background: var(--green-lit);
  transform: translateY(-1px);
}
.nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer; padding: 4px;
}
.nav-hamburger span {
  display: block; width: 24px; height: 2px;
  background: var(--white); border-radius: 2px;
  transition: transform .28s, opacity .28s;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }



/* ── HERO ── */
.rc-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  color: #fff;
}

.rc-hero__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0; left: 0;
}




.c-header-hp__content-wrapper {
  position: absolute;
  top: 0; left: 60px; right: 50%;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.hero-stats {
  position: absolute;
  bottom: 48px; left: 80px; right: 80px;
  z-index: 10;
  display: flex; gap: 0;
  border-top: 1px solid rgba(125,224,240,.1);
  padding-top: 28px;
  opacity: 0; animation: fadeUp .6s 1s forwards;
}

/* CONTENT */
.c-header-hp__content-wrapper {
  position: absolute;
  top: 0; left: 60px; right: 50%;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.c-header-hp__title {
  color: #051820;
  font-family: 'Playfair Display', serif;
  font-size: clamp(48px, 7vw, 100px);
  line-height: clamp(48px, 7vw, 100px);
  text-align: right;
  text-transform: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  opacity: 0;
  animation: fadeUp .8s .2s forwards;
}
/* CHANGEABLE TEXT */
.changeable_text {
  display: block;
  overflow: hidden;
  height: clamp(48px, 7vw, 100px);
  position: relative;
  color: #7DCDE8;
}
.word-rotator {
  display: block;
  position: relative;
  height: clamp(48px, 7vw, 100px);
  overflow: hidden;
}
.word-rotator span {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  font-size: clamp(48px, 7vw, 100px);
  line-height: clamp(48px, 7vw, 100px);
  white-space: nowrap;
  color: #7DCDE8;
  transition: transform .7s cubic-bezier(.16,1,.3,1), opacity .5s ease;
  transform: translateY(100%);
  opacity: 0;
}
.word-rotator span.visible {
  transform: translateY(0);
  opacity: 1;
}
.word-rotator span.gone {
  transform: translateY(-100%);
  opacity: 0;
}
/* ACTIONS */
.rc-hero__actions {
  display: flex;
  gap: 16px;
  margin-top: 40px;
  opacity: 0;
  animation: fadeUp .7s .7s forwards;
}
.rc-hero__btn {
  border-radius: 4px;
  height: 48px;
  padding: 0 36px;
  font-family: 'Onest', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .01em;
  text-transform: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s;
  white-space: nowrap;
}
.rc-hero__btn--primary {
  background: var(--green-lit);
  color: var(--bg);
  box-shadow: 0 4px 24px rgba(125,224,240,.3);
}
.rc-hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 36px rgba(125,224,240,.45);
}
.rc-hero__btn--secondary {
  background: rgba(254,249,236,.15);
  color: #051820;
  border: 1px solid rgba(125,224,240,.3);
  backdrop-filter: blur(8px);
}
.rc-hero__btn--secondary:hover {
  background: rgba(255,255,255,.14);
  transform: translateY(-2px);
}
/* STATS */
.hero-stats {
  position: absolute;
  bottom: 48px; left: 80px; right: 80px;
  z-index: 10;
  display: flex; gap: 0;
  border-top: 1px solid rgba(125,224,240,.1);
  padding-top: 28px;
  opacity: 0; animation: fadeUp .6s 1s forwards;
}
.hero-stat {
  flex: 1; padding-right: 32px;
  border-right: 1px solid rgba(125,224,240,.08);
  margin-right: 32px;
}
.hero-stat:last-child { border-right: none; margin-right: 0; padding-right: 0; }
.stat-n {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 3.5vw, 52px);
  line-height: 1; color: #051820; letter-spacing: .02em;
}
.stat-n em { color: #ffffff; font-style: normal; }
.stat-l {
  font-size: 11px; letter-spacing: .1em; text-transform: none;
  color: rgba(42,95,114,.5); margin-top: 4px;
}
@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }

/* ── TRUST BAR ── */
.trust-bar {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 20px 0;
  display: flex; align-items: center; overflow: hidden; gap: 0;
  background: rgba(30,74,90,.5);
}
.trust-label {
  font-size: 10px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; color: var(--grey);
  white-space: nowrap; padding: 0 40px; flex-shrink: 0;
  border-right: 1px solid var(--line);
}
.trust-logos-wrap { overflow: hidden; flex: 1; display: flex; align-items: center; height: 44px; }
.trust-logos {
  display: flex; gap: 64px; align-items: center;
  animation: scrollx 30s linear infinite; will-change: transform;
  min-width: max-content;
}
@keyframes scrollx { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
.trust-logos img {
  height: 28px; width: auto; max-width: 130px;
  opacity: .45; flex-shrink: 0; display: block;
  transform: translateZ(0); object-fit: contain;
  filter: brightness(0) invert(1);
}
.trust-partner {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(125,224,240,.12); color: var(--green-lit);
  border: 1px solid rgba(125,224,240,.25);
  padding: 6px 16px; border-radius: 4px;
  font-size: 11px; font-weight: 600; letter-spacing: .06em;
  white-space: nowrap; flex-shrink: 0; margin: 0 32px;
}
@keyframes scrollx { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

/* ── SECTION COMMONS ── */
section { padding: 120px 5vw; }
.s-inner { max-width: 1240px; margin: 0 auto; }
.s-tag {
  display: inline-flex; align-items: center; gap: 12px;
  font-size: 10px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; color: var(--green-lit);
  margin-bottom: 24px;
}
.s-tag::before { content:''; display:block; width:24px; height:1px; background:var(--green-lit); }
.s-title {
  color: #0d2030;
  font-family: 'Playfair Display', serif;
  font-size: clamp(52px, 7vw, 96px);
  line-height: .92; letter-spacing: .02em;
  color: var(--white);
}
.s-title .outline {
  -webkit-text-stroke: 1px rgba(125,224,240,.2);
  color: transparent;
}
.s-sub {
  font-size: 17px; color: #2a4a5a;
  max-width: 540px; line-height: 1.75;
  margin-top: 20px; font-weight: 400;
}
.reveal { opacity: 0; transform: translateY(40px); transition: opacity .8s ease, transform .8s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ── CASOS ── */
.cases { background: transparent; }
.cases-header {
  display: flex; justify-content: space-between; align-items: flex-end;
  margin-bottom: 64px; gap: 32px; flex-wrap: wrap;
}
.cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
.case-card {
  position: relative; overflow: hidden;
  background: var(--bg);
  aspect-ratio: 4/3;
  cursor: pointer;
  transition: transform .4s cubic-bezier(.25,.46,.45,.94);
}
.case-card:first-child { grid-column: span 2; aspect-ratio: 16/9; }
.case-bg {
  position: absolute; inset: 0;
  background-size: cover; background-position: center;
  transition: transform .6s cubic-bezier(.25,.46,.45,.94), opacity .4s;
  opacity: .3;
}
.case-card:hover .case-bg { transform: scale(1.06); opacity: .5; }
.case-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(5,24,32,.95) 0%, transparent 60%);
}
.case-content {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 32px; transform: translateY(8px);
  transition: transform .4s;
}
.case-card:hover .case-content { transform: translateY(0); }
.case-tag {
  font-size: 10px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; color: var(--green-lit);
  margin-bottom: 8px;
}
.case-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3.5vw, 44px);
  letter-spacing: .03em; color: var(--white);
  margin-bottom: 12px;
}
.case-metrics {
  display: flex; gap: 24px;
  opacity: 0; transform: translateY(10px);
  transition: opacity .3s .1s, transform .3s .1s;
}
.case-card:hover .case-metrics { opacity: 1; transform: translateY(0); }
.case-m { font-size: 22px; font-weight: 600; color: var(--green-lit); line-height: 1; }
.case-ml { font-size: 11px; color: var(--grey); margin-top: 2px; }
/* Color per card */
.case-card:nth-child(1) .case-bg { background: linear-gradient(135deg, #052535 0%, #1a4a2a 100%); }
.case-card:nth-child(2) .case-bg { background: linear-gradient(135deg, #1a1a2e 0%, #2a2a4a 100%); }
.case-card:nth-child(3) .case-bg { background: linear-gradient(135deg, #1a1500 0%, #2e2500 100%); }

/* ── WHY ── */
.why { background: transparent; }
.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
.why-items { display: flex; flex-direction: column; gap: 0; margin-top: 56px; }
.why-item {
  display: flex; gap: 24px;
  padding: 28px 0; border-bottom: 1px solid rgba(13,32,48,.1);
  transition: padding-left .3s;
}
.why-item:last-child { border-bottom: none; }
.why-item:hover { padding-left: 8px; }
.why-num {
  font-family: 'Playfair Display', serif;
  font-size: 13px; letter-spacing: .1em;
  color: var(--green-lit); min-width: 32px; padding-top: 3px;
}
.why-t {
  font-size: 17px; font-weight: 600;
  color: var(--white); margin-bottom: 10px; letter-spacing: -.01em;
}
.why-d { font-size: 14px; color: #2a4a5a; line-height: 1.75; }
.why-right {
  position: sticky; top: 100px;
  background: #f0f8fc;
  border: 1px solid rgba(125,224,240,.12);
  border-radius: 6px; padding: 48px;
  display: flex; flex-direction: column; gap: 32px;
}
.why-kpi-title {
  font-size: 11px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; color: var(--green-lit); margin-bottom: 4px;
}
.why-kpi-item { display: flex; flex-direction: column; gap: 10px; }
.why-kpi-row { display: flex; justify-content: space-between; align-items: baseline; }
.why-kpi-label { font-size: 13px; color: var(--grey); }
.why-kpi-val {
  font-family: 'Playfair Display', serif;
  font-size: 28px; color: var(--white); letter-spacing: .02em;
}
.why-kpi-val span { color: var(--green-lit); }
.why-kpi-bar-wrap {
  height: 3px; background: rgba(125,224,240,.08); border-radius: 4px;
}
.why-kpi-bar {
  height: 100%; border-radius: 4px;
  background: linear-gradient(90deg, var(--green), var(--green-lit));
  transform: scaleX(0); transform-origin: left;
  transition: transform 1.2s cubic-bezier(.16,1,.3,1);
}
.why-right.visible .why-kpi-bar { transform: scaleX(1); }
.why-bottom {
  padding-top: 24px; border-top: 1px solid rgba(125,224,240,.12);
}
.why-bottom-note { font-size: 11px; color: rgba(125,224,240,.3); margin-bottom: 4px; }
.why-bottom-base { font-size: 13px; color: var(--green-lit); font-weight: 500; }

/* ── FAQ ── */
.faq { background: transparent; }
.faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
.faq-list { margin-top: 56px; display: flex; flex-direction: column; gap: 0; }
.faq-item {
  border-bottom: 1px solid rgba(13,32,48,.1);
  overflow: hidden;
}
.faq-q {
  display: flex; justify-content: space-between; align-items: center;
  padding: 24px 0; cursor: pointer;
  font-size: 16px; font-weight: 500; color: var(--white);
  transition: color .2s;
  gap: 16px;
}
.faq-q:hover { color: var(--green-lit); }
.faq-icon {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--grey-dim);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; transition: transform .3s, background .2s, border-color .2s;
  font-size: 16px; color: var(--grey); line-height: 1;
}
.faq-item.open .faq-icon {
  transform: rotate(45deg);
  background: var(--green-lit); border-color: var(--green-lit); color: var(--bg);
}
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height .4s cubic-bezier(.16,1,.3,1), padding .3s;
  font-size: 14px; color: #2a4a5a; line-height: 1.8;
  padding-bottom: 0;
}
.faq-item.open .faq-a { max-height: 300px; padding-bottom: 24px; }
.faq-right {
  position: sticky; top: 120px;
  display: flex; flex-direction: column; gap: 24px;
}
.faq-cta-card {
  background: linear-gradient(135deg, var(--green-pale), rgba(26,154,170,.2));
  border: 1px solid rgba(125,224,240,.15);
  border-radius: 6px; padding: 40px;
}
.faq-cta-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 42px; letter-spacing: .03em; color: var(--white);
  margin-bottom: 12px;
}
.faq-cta-card p { font-size: 14px; color: var(--grey); margin-bottom: 28px; line-height: 1.7; }

/* ── CONTACT / CTA ── */
.cta-section {
  background: transparent;
  padding: 120px 5vw;
  position: relative; overflow: hidden;
}
.cta-section::before {
  content: ''; position: absolute;
  top: -200px; right: -200px;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(26,154,170,.2) 0%, transparent 70%);
}
.cta-section::after {
  content: ''; position: absolute;
  bottom: -200px; left: -100px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(125,224,240,.08) 0%, transparent 70%);
}
.cta-inner {
  max-width: 1240px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
  position: relative; z-index: 1;
}
.cta-left .s-title { margin-bottom: 20px; }
.cta-checks { display: flex; flex-direction: column; gap: 12px; margin-top: 32px; }
.cta-check {
  display: flex; align-items: center; gap: 12px;
  font-size: 14px; color: var(--grey);
}
.cta-check::before {
  content: '✓'; width: 22px; height: 22px;
  background: rgba(125,224,240,.15); color: var(--green-lit);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 600; flex-shrink: 0;
  line-height: 22px; text-align: center;
}
.cta-form {
  background: var(--bg2);
  border: 1px solid var(--line);
  border-radius: 6px; padding: 40px;
  display: flex; flex-direction: column; gap: 16px;
}
.form-label {
  font-size: 11px; font-weight: 600; letter-spacing: .02em;
  text-transform: none; color: var(--grey); margin-bottom: 6px; display: block;
}
.form-input, .form-select {
  width: 100%;
  background: rgba(255,255,255,.04);
  border: 1px solid var(--line);
  border-radius: 4px; padding: 14px 16px;
  color: var(--white); font-size: 14px;
  font-family: 'Onest', sans-serif;
  outline: none; transition: border-color .2s, background .2s;
}
.form-input::placeholder { color: rgba(125,224,240,.2); }
.form-input:focus, .form-select:focus {
  border-color: rgba(125,224,240,.4);
  background: rgba(125,224,240,.05);
}
.form-select { -webkit-appearance: none; cursor: pointer; }
.form-select option { background: #1e4a5a; }
.form-submit {
  background: var(--green-lit); color: var(--bg);
  border: none; border-radius: 4px;
  padding: 16px; font-family: 'Onest', sans-serif;
  font-size: 14px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; cursor: pointer;
  transition: transform .15s, box-shadow .2s;
  box-shadow: 0 4px 24px rgba(125,224,240,.3);
}
.form-submit:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(125,224,240,.45); }
.form-disc { font-size: 11px; color: var(--grey); text-align: center; opacity: .6; }

/* ── FOOTER ── */
footer {
  background: #1e4a5a;
  border-top: 1px solid var(--line);
  padding: 64px 5vw 40px;
}
.footer-inner {
  max-width: 1240px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px; margin-bottom: 48px;
}
.footer-brand {
  font-family: 'Playfair Display', serif;
  font-size: 32px; letter-spacing: .08em; color: var(--white);
  margin-bottom: 16px;
}
.footer-brand span { color: var(--green-lit); }
.footer-desc { font-size: 13px; color: var(--grey); line-height: 1.75; margin-bottom: 24px; }
.footer-social { display: flex; gap: 10px; }
.social-btn {
  width: 38px; height: 38px; border-radius: 4px;
  border: 1px solid var(--line);
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; transition: background .2s, border-color .2s, transform .15s;
}
.social-btn:hover {
  background: rgba(125,224,240,.1);
  border-color: rgba(125,224,240,.3);
  transform: translateY(-2px);
}
.social-btn svg { width: 16px; height: 16px; }
.footer-col-title {
  font-size: 11px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; color: var(--white);
  margin-bottom: 20px;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.footer-links a {
  font-size: 13px; color: var(--grey); text-decoration: none;
  transition: color .2s;
}
.footer-links a:hover { color: var(--green-lit); }
.footer-bottom {
  max-width: 1240px; margin: 0 auto;
  padding-top: 24px; border-top: 1px solid var(--line);
  display: flex; justify-content: space-between; align-items: center;
  font-size: 12px; color: rgba(125,224,240,.2);
}
.footer-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(125,224,240,.1); color: var(--green-lit);
  border: 1px solid rgba(125,224,240,.2);
  padding: 4px 12px; border-radius: 4px;
  font-size: 11px; font-weight: 600; letter-spacing: .06em;
}

/* ── ANIMATIONS ── */
@keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

/* ── RESPONSIVE ── */
@media (max-width: 960px) {
  /* NAV flotante mobile */
  nav {
    bottom: 16px; left: 50%; right: auto;
    transform: translateX(-50%);
    width: auto; border-radius: 6px;
    padding: 0 6px;
    justify-content: center;
  }
  .nav-logo-fixed { top: 16px; left: 20px; }
  .nav-logo-fixed img { height: 28px; }
  #navLinks, #navCta { display: none; }
  .nav-hamburger { display: flex; }
  /* SECTIONS */
  section { padding: 64px 24px; }
  .why-grid, .faq-grid, .cta-inner { grid-template-columns: 1fr; gap: 40px; }
  .why-right, .faq-right { position: static; }
  .cases-grid { grid-template-columns: 1fr; }
  .case-card:first-child { grid-column: span 1; aspect-ratio: 4/3; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
  .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
  /* HERO tablet */
  .c-header-hp__content-wrapper { left: 24px; right: 24px; align-items: flex-start; }
  .c-header-hp__title { text-align: left; align-items: flex-start; }
  .rc-hero__actions { flex-direction: column; gap: 10px; width: 100%; max-width: 360px; }
  .rc-hero__btn { width: 100%; justify-content: center; height: 52px; }
  .hero-stats { left: 24px; right: 24px; bottom: 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; border-top: 1px solid rgba(125,224,240,.12); padding-top: 20px; }
  .hero-stat { border-right: none; margin-right: 0; padding-right: 0; border-bottom: none; }
  /* VIDEO sin margen en mobile */
  .rc-hero__video { top: 0; left: 0; width: 100%; height: 100%; border-radius: 0; }
  .rc-hero__overlay { top: 0; left: 0; right: 0; bottom: 0; border-radius: 0 !important; }
}
@media (max-width: 600px) {
  /* HERO mobile */
  .c-header-hp__content-wrapper {
    left: 20px; right: 20px;
    justify-content: flex-end;
    padding-bottom: 200px;
    align-items: flex-start;
  }
  .c-header-hp__title {
    font-size: clamp(52px, 13vw, 72px);
    line-height: clamp(52px, 13vw, 72px);
    text-align: left;
    align-items: flex-start;
  }
  .hero-stats {
    left: 20px; right: 20px; bottom: 20px;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    padding-top: 16px;
  }
  .stat-n { font-size: clamp(28px, 7vw, 40px); }
  /* FOOTER */
  .footer-inner { grid-template-columns: 1fr; }
  .cases-header { flex-direction: column; align-items: flex-start; }
  /* MOBILE MENU */
  .mobile-menu a { font-size: 15px !important; padding: 14px 20px; }
  .mobile-menu-cta { font-size: 20px !important; }

  /* TRUST BAR mobile */
  .trust-bar { flex-direction: column; align-items: center; padding: 20px 0 16px; gap: 14px; }
  .trust-label { padding: 0 20px; border-right: none; text-align: center; }
  .trust-logos-wrap { width: 100%; height: 40px; }
}

/* ── ABOUT STRIP ── */
.about-strip {
  background: transparent;
  padding: 120px 5vw;
  border-bottom: 1px solid var(--line);
}
.about-inner {
  max-width: 1240px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
}
.about-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 48px);
  line-height: 1.15; letter-spacing: .01em;
  color: var(--white);
}
.about-text {
  font-size: 16px; line-height: 1.8;
  color: var(--grey); margin-bottom: 36px;
  font-weight: 400;
}
.about-cta {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 13px; font-weight: 600; letter-spacing: .01em;
  text-transform: none; text-decoration: none;
  color: var(--bg); background: var(--white);
  padding: 14px 28px; border-radius: 4px;
  transition: background .2s, transform .15s;
  margin-bottom: 36px; display: inline-flex;
}
.about-cta:hover { background: var(--green-lit); transform: translateY(-2px); }
.about-flags {
  display: flex; gap: 20px; flex-wrap: wrap;
  margin-top: 8px;
}
.about-flags span {
  font-size: 13px; color: var(--grey);
  letter-spacing: .04em; font-weight: 400;
}
@media (max-width: 960px) {
  .about-inner { grid-template-columns: 1fr; gap: 40px; }
  .about-strip { padding: 80px 5vw; }
}


.nav-pill-label {
  font-size: 13px; font-weight: 400; color: rgba(5,24,32,.7);
  letter-spacing: .01em; display: none;
}
@media (max-width: 960px) {
  .nav-pill-label { display: block; }
}

/* ── PILL MOBILE BTN LOOP ── */
.nav-pill-btn {
  display: none;
  height: 36px;
  background: var(--white);
  border-radius: 4px;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  padding: 0 14px;
  font-size: 12px;
  font-weight: 600;
  color: var(--bg);
  letter-spacing: .02em;
  white-space: nowrap;
  transition: background .2s;
}
.nav-pill-btn:hover { background: var(--green-lit); }
@media (max-width: 960px) {
  .nav-pill-btn { display: inline-flex; }
  .nav-pill-label { display: none !important; }
  nav {
    padding: 0 8px !important;
    gap: 10px;
    justify-content: space-between;
    width: auto !important;
    min-width: 260px;
    max-width: 340px;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}

/* ── NUCLEAR RESET ── */
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
body {
  margin: 0 !important;
  padding: 0 !important;
}`;
  document.head.appendChild(style);

  // 2. Inyectar HTML del nav
  const navDiv = document.createElement('div');
  navDiv.id = 'cachai-nav';
  navDiv.innerHTML = `<!-- MEGA MENU: NAV TOP (2 columnas, full width) -->
<div id="megaPanelTop" style="
  position:fixed; top:0; left:0; right:0; z-index:9998;
  opacity:0; visibility:hidden; pointer-events:none;
  transition: opacity .2s ease, visibility .2s ease;
  background:rgba(13,30,42,.97);
  backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(255,255,255,.08);
  padding:88px 80px 48px;
">
  <div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:80px;">
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px;font-family:'Onest',sans-serif;">Construir</div>
      <a href="shopify.html" style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:#e8f8fc;text-decoration:none;">Ecommerce &amp; Shopify <span style="opacity:.3;">→</span></a>
      <a href="migrations.html" style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:#e8f8fc;text-decoration:none;">Migraciones a Shopify <span style="opacity:.3;">→</span></a>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Shopify Plus <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    </div>
    <div>
      <div style="font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px;font-family:'Onest',sans-serif;">Crecer</div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Growth Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Email Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">SEO Ecommerce <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Analytics &amp; Data <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Sales Strategy <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;font-family:'Onest',sans-serif;font-size:14px;color:rgba(232,248,252,.3);">Conversion Rate Optimization <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    </div>
  </div>
</div>

<!-- MEGA MENU: PILL (mini, encima del pill) -->
<div id="megaPanelPill" style="
  position:fixed; bottom:84px; left:50%; transform:translateX(-50%);
  width:280px; z-index:10000;
  opacity:0; visibility:hidden; pointer-events:none;
  transition: opacity .2s ease, visibility .2s ease;
  background:rgba(30,74,90,.97);
  backdrop-filter:blur(20px);
  border:1px solid rgba(125,224,240,.15);
  border-radius:6px;
  overflow:hidden;
">
  <div id="megaPillP1">
    <a href="shopify.html" style="display:flex;align-items:center;justify-content:space-between;padding:13px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:#e8f8fc;text-decoration:none;">Ecommerce &amp; Shopify <span style="opacity:.4;">→</span></a>
    <button onclick="openPillServices()" style="display:flex;align-items:center;justify-content:space-between;padding:13px 18px;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:#e8f8fc;background:none;border:none;cursor:pointer;width:100%;text-align:left;">Todos los servicios <span style="opacity:.4;">›</span></button>
  </div>
  <div id="megaPillP2" style="display:none;">

    <div style="font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(232,248,252,.3);padding:6px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;">Construir</div>
    <a href="shopify.html" style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:#e8f8fc;text-decoration:none;">Ecommerce &amp; Shopify <span style="opacity:.3;">→</span></a>
    <a href="migrations.html" style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:#e8f8fc;text-decoration:none;">Migraciones a Shopify <span style="opacity:.3;">→</span></a>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Shopify Plus <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(232,248,252,.3);padding:6px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;">Crecer</div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Growth Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Email Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">SEO Ecommerce <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Analytics &amp; Data <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;border-bottom:1px solid rgba(125,205,232,.08);font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Sales Strategy <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:11px 18px;font-family:'Onest',sans-serif;font-size:12px;color:rgba(232,248,252,.35);">Conversion Rate Optimization <span style="font-size:10px;background:rgba(255,255,255,.06);padding:1px 6px;border-radius:2px;">Próximo</span></div>
  </div>
</div>


<!-- NAV TOP (visible al inicio) -->
<header class="nav-top" id="navTop">
  <a href="#" class="nav-top-logo">
    <img src="logo_cachaisolutions_blanco.svg" alt="Cachai Solutions" style="height:32px;display:block;">
  </a>
  <ul class="nav-top-links">
    <li><a href="#casos">Casos</a></li>
    <li><a href="#nosotros">Nosotros</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li class="nav-mega-wrap" id="navMegaWrap">
      <button class="nav-mega-trigger">
        Servicios
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </li>
  </ul>
  <a href="#contacto" class="nav-top-cta">Probemos juntos</a>
</header>

<!-- ISOTIPO fijo (aparece al scrollear) -->
<div class="nav-isotipo" id="navIsotipo">
  <a href="#"><img src="isotipo.svg" alt="Cachai" id="isotipoImg" style="height:36px!important;width:auto!important;max-width:36px!important;display:block;"></a>
</div>

<nav id="nav">
  <a href="#" class="nav-logo">
    <img src="logo_cachaisolutions_blanco.svg" alt="Cachai Solutions" style="height:34px;display:block;">
  </a>
  <ul class="nav-links">
    <li><a href="#casos">Casos</a></li>
    <li><a href="#nosotros">Nosotros</a></li>
    <li><a href="#faq">Faq</a></li>
    <li class="nav-mega-wrap" id="navMegaWrapPill">
      <button class="nav-mega-trigger">
        Servicios
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </li>
  </ul>
  <div class="nav-cta-wrap">
    <a href="#contacto" class="nav-cta">Probemos juntos</a>
  </div>
  <button class="nav-hamburger" id="hamburger" onclick="toggleMobile()">
    <span></span><span></span><span></span>
  </button>
  <a href="#contacto" class="nav-pill-btn">Probemos juntos →</a>
</nav>


<!-- MOBILE SERVICES SUB-PANEL -->
<div id="mobileServicesPanel" style="
  position:fixed;top:80px;left:16px;right:16px;bottom:90px;z-index:1000;
  background:rgba(30,74,90,.95);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border:1px solid rgba(125,224,240,.15);
  border-radius:6px;
  display:flex;flex-direction:column;
  overflow:hidden;
  transform:translateX(calc(100% + 32px));
  transition:transform .35s cubic-bezier(.16,1,.3,1);
  pointer-events:none;
">
  <!-- Header -->
  <div style="display:flex;align-items:center;gap:12px;padding:0 12px;height:52px;border-bottom:1px solid rgba(125,205,232,.08);flex-shrink:0;">
    <button onclick="closeMobileServices()" style="background:none;border:none;cursor:pointer;color:#e8f8fc;display:flex;align-items:center;gap:8px;font-size:13px;font-weight:500;font-family:'Onest',sans-serif;width:100%;padding:8px 8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Volver
    </button>
  </div>
  <!-- Content -->
  <div style="flex:1;overflow-y:auto;padding:16px 8px;">
    <div style="padding:8px 12px;font-size:10px;font-weight:600;letter-spacing:.14em;color:rgba(232,248,252,.3);text-transform:uppercase;border-bottom:1px solid rgba(125,205,232,.08);">Construir</div>
    <a href="shopify.html" style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:#e8f8fc;text-decoration:none;padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Ecommerce &amp; Shopify <span style="opacity:.4;">→</span></a>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Migraciones a Shopify <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Shopify Plus <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="padding:8px 12px;font-size:10px;font-weight:600;letter-spacing:.14em;color:rgba(232,248,252,.3);text-transform:uppercase;border-bottom:1px solid rgba(125,205,232,.08);">Crecer</div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Growth Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Email Marketing <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">SEO Ecommerce <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Analytics &amp; Data <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;border-bottom:1px solid rgba(125,205,232,.08);">Sales Strategy <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
    <div style="display:flex;align-items:center;justify-content:space-between;font-family:'Onest',sans-serif;font-size:13px;font-weight:500;color:rgba(232,248,252,.4);padding:14px 20px;">Conversion Rate Optimization <span style="font-size:10px;background:rgba(255,255,255,.06);padding:2px 7px;border-radius:2px;">Próximo</span></div>
  </div>
</div>
<!-- MOBILE MENU OVERLAY -->
<div class="mobile-menu-overlay" id="mobileOverlay" onclick="toggleMobile()"></div>

<!-- MOBILE MENU — contenedor único con 2 paneles -->
<div class="mobile-menu" id="mobileMenu">
  <!-- PANEL PRINCIPAL -->
  <div class="mmenu-panel" id="mmPanel1">
    <a href="#casos" onclick="toggleMobile()">Casos</a>
    <a href="#nosotros" onclick="toggleMobile()">Nosotros</a>
    <a href="#faq" onclick="toggleMobile()">Faq</a>
    <button class="mmenu-srv-btn" onclick="openMobileServices()">
      Servicios <span>›</span>
    </button>
  </div>

  <!-- PANEL SERVICIOS -->
  <div class="mmenu-panel" id="mmPanel2" style="transform:translateX(100%);position:absolute;inset:0;">
    <button class="mmenu-back-btn" onclick="closeMobileServices()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Volver
    </button>
    <div class="mmenu-section-title">Construir</div>
    <a href="shopify.html" onclick="toggleMobile()">Ecommerce &amp; Shopify <span class="mmenu-arrow">→</span></a>
    <a href="migrations.html" onclick="toggleMobile()">Migraciones a Shopify <span class="mmenu-arrow">→</span></a>
    <div class="mmenu-item-disabled">Shopify Plus <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-section-title">Crecer</div>
    <div class="mmenu-item-disabled">Growth Marketing <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-item-disabled">Email Marketing <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-item-disabled">SEO Ecommerce <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-item-disabled">Analytics &amp; Data <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-item-disabled">Sales Strategy <span class="mmenu-soon">Próximo</span></div>
    <div class="mmenu-item-disabled">Conversion Rate Optimization <span class="mmenu-soon">Próximo</span></div>
  </div>
</div>

<!-- HERO CURSOR -->
<div class="hero-cursor" id="heroCursor">
  <div class="hero-cursor-ring">
    <svg viewBox="0 0 100 100" width="100" height="100">
      <defs>
        <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"/>
      </defs>
      <text font-size="9" fill="rgba(255,255,255,0.75)" font-family="Onest,sans-serif" letter-spacing="3.2">
        <textPath href="#circlePath">NEXT · NEXT · NEXT · NEXT · NEXT · NEXT ·</textPath>
      </text>
    </svg>
  </div>
  <div class="hero-cursor-arrow">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  </div>
</div>`;
  document.body.insertBefore(navDiv, document.body.firstChild);

  // 3. Nav JS
  
})();
