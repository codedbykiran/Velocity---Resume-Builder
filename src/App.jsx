import React, { useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
  body { background: #000; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }

  /* --- GLOBAL CENTER ALIGNMENT UTILITY --- */
  .center-layout {
    display: flex;
    flex-direction: column;
    align-items: center;  /* Horizontal Center */
    justify-content: center; /* Vertical Center */
    text-align: center;
    min-height: 100vh;
    width: 100vw;
    padding: 0 20px;
  }

  /* --- LANDING & PROTOCOL TEXT --- */
  .hero-title { 
    font-size: clamp(3rem, 8vw, 5rem); 
    font-weight: 800; 
    letter-spacing: -3px; 
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .hero-title span { color: #4f46e5; }
  
  .description { 
    font-size: 1.2rem; 
    color: #888; 
    max-width: 700px; 
    margin-bottom: 40px; 
    line-height: 1.6;
  }

  /* --- PROTOCOL CARDS CENTERED GRID --- */
  .protocol-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1000px;
    width: 100%;
    margin-top: 40px;
  }

  .protocol-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 45px 30px;
    border-radius: 24px;
    cursor: pointer;
  }
  .protocol-card:hover {
    background: rgba(79, 70, 229, 0.1);
    border-color: #4f46e5;
    transform: translateY(-10px);
  }

  /* --- EDITOR VIEW (CENTERED PREVIEW) --- */
  .editor-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    background: #000;
  }

  .form-container {
    width: 100%;
    max-width: 600px; /* Form ko center mein narrow rakha hai */
    margin-bottom: 80px;
    text-align: left; /* Input labels readable rakhne ke liye left align */
  }

  /* --- RESUME PAPER (PERFECT CENTER) --- */
  .resume-paper {
    width: 210mm;
    min-height: 297mm;
    background: white;
    padding: 60px;
    box-shadow: 0 50px 100px rgba(79, 70, 229, 0.2);
    color: #000;
    transform: scale(0.9);
    margin-bottom: 100px;
  }

  /* --- BUTTONS --- */
  .btn-main {
    background: #4f46e5;
    color: #fff;
    padding: 20px 50px;
    border-radius: 50px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    box-shadow: 0 10px 30px rgba(79, 70, 229, 0.4);
  }
  .btn-main:hover { transform: scale(1.05) translateY(-2px); }

  /* --- INPUTS --- */
  .input-box {
    width: 100%;
    background: #111;
    border: 1px solid #222;
    padding: 18px;
    border-radius: 12px;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 25px;
    font-size: 1rem;
  }

  .anim-reveal { animation: reveal 1s ease-out both; }
  @keyframes reveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
`;

export default function GlobalCenterApp() {
  const [view, setView] = useState('landing');
  const [data, setData] = useState({
    name: 'KIRAN CHARHATE',
    role: 'Lead UI/UX Architect',
    summary: 'Building high-performance digital ecosystems with a focus on intuitive user flow and elite design systems.',
  });

  if (view === 'landing') {
    return (
      <div className="center-layout">
        <style>{styles}</style>
        <div className="anim-reveal">
          <h1 className="hero-title">Master Your <span>Future.</span></h1>
          <p className="description">
            Experience the next generation of professional identity. 
            Designed for those who lead, not those who follow.
          </p>
          <button className="btn-main" onClick={() => setView('protocol')}>Enter Protocol</button>
        </div>
      </div>
    );
  }

  if (view === 'protocol') {
    return (
      <div className="center-layout">
        <style>{styles}</style>
        <h1 className="hero-title anim-reveal">Select <span>Protocol</span></h1>
        <div className="protocol-grid anim-reveal" style={{animationDelay: '0.2s'}}>
          {['Rising Star', 'Architect', 'Legacy Builder'].map((p) => (
            <div key={p} className="protocol-card" onClick={() => setView('editor')}>
              <h3 style={{fontSize: '1.5rem', marginBottom: 10}}>{p}</h3>
              <p style={{color: '#666', fontSize: '0.85rem'}}>AI-Optimized system for professional excellence.</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="editor-wrapper">
      <style>{styles}</style>
      
      <div className="form-container anim-reveal">
        <h2 style={{textAlign: 'center', fontSize: '2.5rem', marginBottom: 40}}>Edit <span>Identity</span></h2>
        
        <label style={{color: '#4f46e5', fontWeight: 800, fontSize: '0.75rem', letterSpacing: 2}}>FULL NAME</label>
        <input className="input-box" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
        
        <label style={{color: '#4f46e5', fontWeight: 800, fontSize: '0.75rem', letterSpacing: 2}}>PROFESSIONAL ROLE</label>
        <input className="input-box" value={data.role} onChange={(e) => setData({...data, role: e.target.value})} />
        
        <label style={{color: '#4f46e5', fontWeight: 800, fontSize: '0.75rem', letterSpacing: 2}}>SUMMARY</label>
        <textarea className="input-box" rows="4" value={data.summary} onChange={(e) => setData({...data, summary: e.target.value})} />
        
        <button className="btn-main" style={{width: '100%'}} onClick={() => window.print()}>Generate Official PDF</button>
      </div>

      <h2 className="anim-reveal" style={{marginBottom: 40, fontSize: '2rem'}}>Live <span>Preview</span></h2>
      <div className="resume-paper anim-reveal">
        <div style={{textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: 40}}>
           <h1 style={{fontSize: '3.5rem', fontWeight: 900}}>{data.name}</h1>
           <p style={{fontSize: '1.2rem', color: '#4f46e5', fontWeight: 700, textTransform: 'uppercase'}}>{data.role}</p>
        </div>
        <div style={{marginTop: 50}}>
           <h4 style={{letterSpacing: 3, color: '#999', fontSize: '0.7rem', marginBottom: 20}}>EXECUTIVE SUMMARY</h4>
           <p style={{lineHeight: 1.8, fontSize: '1.1rem'}}>{data.summary}</p>
        </div>
      </div>
    </div>
  );
}