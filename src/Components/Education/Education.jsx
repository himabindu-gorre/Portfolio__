import React from 'react'
import './Education.css';
// import theme_pattern from '../../assets/theme_pattern.svg';
import theme_pattern from '/assets/theme_pattern.svg';

const Education = () => {
  const educationData = [
    {
      title: "Bachelor of Technology",
      institution: "Vijaya Institute of Technology for Women",
      course: "Computer Science and Engineering",
      grade: "CGPA: 7.99",
      duration: "Aug 2020 – May 2024",
      location: "Vijayawada, India",
      highlights: [
        "Specialized in Web Development and Data Analysis",
        "Active member of Technical Clubs",
        "Participated in various coding competitions"
      ]
    },
    {
      title: "Intermediate Education",
      institution: "Maris Stella College",
      course: "Science Stream (MPC)",
      grade: "Percentage: 94%",
      duration: "Jun 2018 – Apr 2020",
      location: "Vijayawada, India",
      highlights: [
        "Secured distinction in Mathematics and Physics",
        "Participated in Science Exhibition",
        "Member of Science Club"
      ]
    }
  ];

  return (
    <div id='education' className='education'>
      <div className="education-title">
        <h1>My Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.title}</h3>
              <div className="education-grade">{edu.grade}</div>
            </div>
            <div className="education-details">
              <div className="education-institution">
                <strong>{edu.institution}</strong>
              </div>
              <div className="education-course">{edu.course}</div>
              <div className="education-meta">
                <div className="education-duration">
                  <span>{edu.duration}</span>
                </div>
                <div className="education-location">
                  <span>{edu.location}</span>
                </div>
              </div>
              {edu.highlights && (
                <div className="education-highlights">
                  <h4>Key Highlights:</h4>
                  <ul>
                    {edu.highlights.map((highlight, idx) => (
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
  )
}

export default Education 