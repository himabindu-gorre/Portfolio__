import React from 'react';
import './Experience.css';
// import theme_pattern from '../../../public/assets/theme_pattern.svg';
import theme_pattern from '/assets/theme_pattern.svg';

const Experience = () => {
  const experienceData = [
    {
      title: "Web Development using WordPress and Artificial Intelligence",
      company: "YugaYatra Retail OPC Limited",
      duration: "Apr 28, 2025 – Jun 28, 2025",
      highlights: [
        "Developing thebrightlearn. in LMS website using WordPress and Canva. Freelancing on Upwork, working on Amazon and Flipkart seller portals, and collaborating via Google Workspace."
      ]
    },
    {
      title: "Ethical Hacking and Cyber Security",
      company: "Supraja Technologies",
      duration: "July 22, 2022 – Sep 22, 2022",
      highlights: [
        "Completed a short-term internship in Ethical Hacking and Cyber Security, which improved understanding of security principles using Kali Linux."
      ]
    }
  ];

  return (
    <div id='experience' className='experience'>
      {/* <div className="experience-title">
        <h1>Experience</h1>
      </div> */}
      <div className="experience-title">
            <h1>My Experience</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.title}</h3>
              <div className="experience-duration">{exp.duration}</div>
            </div>
            <div className="experience-details">
              <div className="experience-company">
                <strong>{exp.company}</strong>
              </div>
              {exp.highlights && (exp.highlights.length > 0) && (
                <div className="experience-highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience; 
