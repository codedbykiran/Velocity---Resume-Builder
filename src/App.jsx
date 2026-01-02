import React, { useState } from 'react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0f172a; color: #f8fafc; overflow-x: hidden; }

  /* CENTER ALIGNMENT WRAPPER */
  .page-container {
    display: grid; place-items: center; align-content: center;
    min-height: 100vh; width: 100vw; text-align: center; padding: 40px 20px;
  }

  /* HERO STYLES */
  .hero-h1 { font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 800; line-height: 1.1; margin-bottom: 20px; }
  .hero-h1 span { background: linear-gradient(to right, #6366f1, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .hero-p { font-size: 1.2rem; color: #94a3b8; max-width: 700px; margin-bottom: 40px; line-height: 1.6; }

  /* CARDS & GRID */
  .grid-box { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; width: 100%; max-width: 1100px; margin-top: 40px; }
  .glass-card {
    background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 40px;
    cursor: pointer; transition: 0.4s;
  }
  .glass-card:hover { border-color: #6366f1; transform: translateY(-10px); background: rgba(255,255,255,0.06); }

  /* TEMPLATE GRID */
  .temp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; width: 100%; max-width: 1200px; }
  .temp-item { background: #fff; padding: 10px; border-radius: 12px; cursor: pointer; position: relative; color: #333; }
  .temp-item:hover { transform: scale(1.03); box-shadow: 0 20px 40px rgba(0,0,0,0.5); }

  /* BUTTONS */
  .btn-god { background: #6366f1; color: white; padding: 18px 50px; border-radius: 100px; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3); }

  /* EDITOR LAYOUT (ZETY) */
  .editor-shell { display: flex; height: 100vh; width: 100vw; text-align: left; background: #0f172a; }
  .side-steps { width: 80px; background: #020617; border-right: 1px solid #1e293b; display: flex; flex-direction: column; align-items: center; padding-top: 30px; gap: 35px; }
  .step-icon { color: #475569; font-size: 0.7rem; font-weight: 800; }
  .step-icon.active { color: #6366f1; }

  .form-container { width: 480px; padding: 40px; overflow-y: auto; background: #0f172a; border-right: 1px solid #1e293b; }
  .preview-container { flex: 1; background: #334155; display: flex; justify-content: center; padding: 40px; overflow-y: auto; }

  .resume-paper { width: 210mm; min-height: 297mm; background: white; color: #1e293b; padding: 60px; box-shadow: 0 40px 100px rgba(0,0,0,0.5); transform: scale(0.85); transform-origin: top center; }
  
  .input-ui { margin-bottom: 20px; }
  .input-ui label { display: block; color: #64748b; font-size: 0.7rem; font-weight: 800; margin-bottom: 6px; text-transform: uppercase; }
  .input-ui input, .input-ui textarea { width: 100%; padding: 12px; background: #1e293b; border: 1px solid #334155; color: white; border-radius: 8px; outline: none; }
`;

export default function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: 'KIRAN CHARHATE',
    email: 'kirancharhate781@gmail.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    summary: 'Building high-performance user interfaces with cutting-edge technology.',
    jobTitle: 'Senior Software Engineer',
    company: 'Velocity AI',
    degree: 'Bachelor of Technology',
    school: 'University of Mumbai'
  });

  const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div style={{ width: '100%' }}>
      <style>{styles}</style>

      {/* STEP 1: HERO */}
      {step === 1 && (
        <div className="page-container">
          <h1 className="hero-h1">Create Your <span>Future</span><br/>In Seconds.</h1>
          <p className="hero-p">The most advanced AI resume builder. No more alignment issues, just pure performance.</p>
          <button className="btn-god" onClick={() => setStep(2)}>Get Started — It's Free</button>
        </div>
      )}

      {/* STEP 2: EXPERIENCE */}
      {step === 2 && (
        <div className="page-container">
          <h2 style={{fontSize:'3rem'}}>Experience Level</h2>
          <div className="grid-box">
            {['Student', 'Professional', 'Executive'].map(l => (
              <div key={l} className="glass-card" onClick={() => setStep(3)}>
                <div style={{fontSize:'3rem', marginBottom:'10px'}}>💼</div>
                <h3 style={{fontSize:'1.5rem'}}>{l}</h3>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: TEMPLATES */}
      {step === 3 && (
        <div className="page-container">
          <h2 style={{fontSize:'3rem', marginBottom:'40px'}}>Select <span>Template</span></h2>
          <div className="temp-grid">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="temp-item" onClick={() => setStep(4)}>
                <div style={{height:'280px', background:'#f8fafc', borderRadius:'8px', border:'1px solid #eee'}}></div>
                <p style={{marginTop:'10px', fontWeight:800}}>Velocity Pro V.{i}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 4: EDITOR (WITH ALL CONTENT) */}
      {step === 4 && (
        <div className="editor-shell">
          <div className="side-steps">
            <div className="step-icon active">INFO</div>
            <div className="step-icon">WORK</div>
            <div className="step-icon">EDU</div>
            <div className="step-icon">SKILLS</div>
          </div>

          <div className="form-container">
            <h2 style={{marginBottom:'25px'}}>Personal Details</h2>
            <div className="input-ui">
              <label>Full Name</label>
              <input name="name" value={data.name} onChange={handleChange} />
            </div>
            <div className="input-ui">
              <label>Email Address</label>
              <input name="email" value={data.email} onChange={handleChange} />
            </div>
            <div style={{display:'flex', gap:'15px'}}>
               <div className="input-ui" style={{flex:1}}><label>Phone</label><input name="phone" value={data.phone} onChange={handleChange} /></div>
               <div className="input-ui" style={{flex:1}}><label>Location</label><input name="location" value={data.location} onChange={handleChange} /></div>
            </div>
            <div className="input-ui">
              <label>Professional Summary</label>
              <textarea name="summary" rows="5" value={data.summary} onChange={handleChange}></textarea>
            </div>
            <h2 style={{margin:'30px 0 20px'}}>Experience</h2>
            <div className="input-ui">
              <label>Job Title</label>
              <input name="jobTitle" value={data.jobTitle} onChange={handleChange} />
            </div>
            <div className="input-ui">
              <label>Company</label>
              <input name="company" value={data.company} onChange={handleChange} />
            </div>

            <button className="btn-god" style={{width:'100%', padding:'15px', marginTop:'20px'}} onClick={() => window.print()}>Download PDF</button>
            <button onClick={() => setStep(1)} style={{background:'none', border:'none', color:'#64748b', marginTop:'20px', cursor:'pointer', width:'100%'}}>Back to Home</button>
          </div>

          <div className="preview-container">
            <div className="resume-paper">
              <h1 style={{fontSize:'3.2rem', fontWeight:800}}>{data.name}</h1>
              <div style={{color:'#6366f1', fontSize:'1rem', borderBottom:'2px solid #6366f1', paddingBottom:'10px', marginBottom:'25px'}}>
                {data.email} | {data.phone} | {data.location}
              </div>

              <h3 style={{color:'#6366f1', textTransform:'uppercase', fontSize:'1rem', marginBottom:'10px'}}>Summary</h3>
              <p style={{lineHeight:1.6, color:'#475569'}}>{data.summary}</p>

              <h3 style={{color:'#6366f1', textTransform:'uppercase', fontSize:'1rem', marginTop:'30px', marginBottom:'10px'}}>Work Experience</h3>
              <div style={{fontWeight:800, fontSize:'1.1rem'}}>{data.jobTitle}</div>
              <div style={{color:'#64748b', marginBottom:'10px'}}>{data.company}</div>
              <p style={{color:'#475569'}}>Responsible for leading high-end projects and delivering optimized results.</p>

              <h3 style={{color:'#6366f1', textTransform:'uppercase', fontSize:'1rem', marginTop:'30px', marginBottom:'10px'}}>Education</h3>
              <div style={{fontWeight:800}}>{data.school}</div>
              <div style={{color:'#475569'}}>{data.degree}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}