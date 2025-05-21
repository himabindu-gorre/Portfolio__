import Services_Data from '../services_data';

export const generateResume = () => {
  // Get personal info from About component
  const personalInfo = {
    name: "Hima Bindu Gorre",
    title: "MERN Stack Developer",
    email: "himabindugorre7965@gmail.com",
    phone: "+91 6301698850",
    location: "Vijayawada, Andhra Pradesh, India",
    summary: "Recently started my journey as a MERN Stack Developer, excited to learn and grow. Passionate Data Analyst enthusiastic about uncovering insights through data-driven decisions. Skilled in Power BI for creating impactful dashboards and visualizations."
  };

  // Get skills from About component
  const skills = [
    { name: "HTML & CSS", level: 50 },
    { name: "JavaScript", level: 70 },
    { name: "React Js", level: 50 },
    { name: "Node Js", level: 70 },
    { name: "MongoDB", level: 60 },
    { name: "MySQL", level: 50 },
    { name: "Angular Js", level: 60 },
    { name: "JAVA DEVELOPER", level: 80 }
  ];

  // Get education data
  const educationData = [
    {
      title: "Graduation",
      institution: "Vijaya Institute of Technology for Women",
      course: "Computer Science and Engineering",
      grade: "CGPA: 7.99",
      location: "Vijayawada, India"
    },
    {
      title: "Intermediate",
      institution: "Maris Stella College",
      course: "Intermediate",
      grade: "Percentage: 94%",
      location: "Vijayawada, India",
      duration: "Jun 2018 – Apr 2020"
    }
  ];

  // Define experience data
  const experienceData = [
    {
      title: "Web Development using WordPress and Artifical Intelligence",
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

  // Get services data
  const servicesData = Services_Data.map(service => ({
    name: service.s_name,
    description: service.s_desc
  }));

  // Create resume content with modern styling
  const resumeContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - Resume</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        body {
          background: #f5f5f5;
          color: #333;
          line-height: 1.6;
        }

        .resume-container {
          max-width: 800px;
          margin: 40px auto;
          background: white;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .header {
          background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
          color: white;
          padding: 40px;
          text-align: center;
        }

        .header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .header p {
          font-size: 1.2em;
          opacity: 0.9;
        }

        .contact-info {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 15px;
          flex-wrap: wrap;
        }

        .section {
          padding: 30px 40px;
          border-bottom: 1px solid #eee;
        }

        .section:last-child {
          border-bottom: none;
        }

        .section h2 {
          color: #DF8908;
          font-size: 1.5em;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 10px;
        }

        .section h2::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 3px;
          background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .skill-item {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .skill-item:hover {
          transform: translateY(-5px);
        }

        .skill-name {
          font-weight: 500;
          margin-bottom: 8px;
        }

        .skill-bar {
          height: 8px;
          background: #eee;
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-level {
          height: 100%;
          background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
          border-radius: 4px;
          transition: width 1s ease;
        }

        .experience-item, .education-item {
          margin-bottom: 25px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        .experience-item:hover, .education-item:hover {
          transform: translateX(10px);
        }

        .experience-item h3, .education-item h3 {
          color: #B415FF;
          margin-bottom: 10px;
        }

        .education-details {
          color: #666;
          font-size: 0.95em;
        }

        .education-details p {
          margin: 5px 0;
        }

        @media print {
          body {
            background: white;
          }
          .resume-container {
            margin: 0;
            box-shadow: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="resume-container">
        <div class="header">
          <h1>${personalInfo.name}</h1>
          <p>${personalInfo.title}</p>
          <div class="contact-info">
            <p>${personalInfo.email}</p>
            <p>${personalInfo.phone}</p>
            <p>${personalInfo.location}</p>
            <p>GitHub: <a href="https://github.com/himabindu-gorre" target="_blank" rel="noopener noreferrer">github.com/himabindu-gorre</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/himabindu-gorre/" target="_blank" rel="noopener noreferrer">linkedin.com/in/himabindu-gorre/</a></p>
          </div>
        </div>

        <div class="section">
          <h2>Experience</h2>
          ${experienceData.map(exp => `
            <div class="experience-item">
              <h3>${exp.title}</h3>
              <p><strong>${exp.company}</strong></p>
              <p>${exp.duration}</p>
              ${exp.highlights && exp.highlights.length > 0 ? `
                <ul>
                  ${exp.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>Education</h2>
          ${educationData.map(edu => `
            <div class="education-item">
              <h3>${edu.title}</h3>
              <div class="education-details">
                <p><strong>${edu.institution}</strong></p>
                <p>${edu.course} - ${edu.grade}</p>
                <p>${edu.location}</p>
                ${edu.duration ? `<p>${edu.duration}</p>` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>About Me</h2>
          <p>${personalInfo.summary}</p>
        </div>

        <div class="section">
          <h2>Skills</h2>
          <div class="skills-grid">
            ${skills.map(skill => `
              <div class="skill-item">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar">
                  <div class="skill-level" style="width: ${skill.level}%"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="section">
          <h2>Services</h2>
          ${servicesData.map(service => `
            <div class="service-item">
              <h3>${service.name}</h3>
              <p>${service.description}</p>
            </div>
          `).join('')}
        </div>

      </div>
    </body>
    </html>
  `;

  const blob = new Blob([resumeContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export default generateResume; 