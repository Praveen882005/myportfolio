// ===== ALL JAVASCRIPT =====

(function() {
  console.log('✅ Praveen Kumar portfolio loaded');

  // ---- DOWNLOAD RESUME ----
  const downloadBtn = document.getElementById('downloadResume');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();

      const resumeContent = `PRAVEEN KUMAR I - SOFTWARE ENGINEER
Email: cgmpraveenkumar@gmail.com | Phone: +91 7603861661
Location: Thiruvanmnalai, Tamilnadu

ABOUT
Software Engineering undergraduate with hands-on experience in Python, Java, and full-stack web development. Skilled in building database-driven applications, AI-powered solutions, and scalable software systems. Strong problem-solving mindset with a passion for clean code, automation, and real-world software development.

EDUCATION
B.Tech in Information Technology - SNS College of Engineering, Coimbatore (CGPA: 7.65/10) Sep 2023 – Present
Higher Secondary Education (HSC) - Maharishi Higher Secondary School (72.5%) Aug 2021 – May 2022

ACADEMIC PROJECTS
- Limited Battery System: Designed a rechargeable battery system as an alternative to AA/AAA batteries.
- Vehicle Information Management System: Managed cab owner details, service records, and fine history.
- Agri-Doctor (AI-Based Agricultural Assistant): Plant disease detection using image recognition with chatbot support.

INTERNSHIPS
- Artificial Intelligence Intern @ Retech Solutions Pvt. Ltd. (Jun 2025 – Jul 2025): Built AI-based chatbot for customer support.
- Industry Training (AI & Python) @ ByteXL (Nov 2025 – Dec 2025): Completed Azure DP-900 certification.

TECHNICAL SKILLS
Python, Java, C, OOPs, DSA Basics, HTML, CSS, JavaScript, Flutter, MySQL, Image Recognition, GitHub, VS Code, Canva

CERTIFICATIONS
- Microsoft Azure AI-900 (AI Fundamentals) - Aug 2025
- Microsoft Azure DP-900 (Data Fundamentals) - Jan 2026
- IBM - Python / AI Fundamentals
- Preplnsta - Programming & Aptitude Training`;

      const blob = new Blob([resumeContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Praveen_Kumar_Resume.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  // ---- ADD CURRENT YEAR TO FOOTER ----
  const footer = document.querySelector('.footer-note');
  if (footer) {
    const yearSpan = document.createElement('span');
    yearSpan.style.marginLeft = '0.5rem';
    yearSpan.style.fontSize = '0.8rem';
    yearSpan.style.color = '#94a3b8';
    yearSpan.textContent = `· ${new Date().getFullYear()}`;
    footer.appendChild(yearSpan);
  }

  // ---- CLICK LOGGING FOR PROJECTS/INTERNS ----
  const items = document.querySelectorAll('.project-item, .intern-item');
  items.forEach((item) => {
    item.addEventListener('click', function() {
      const title = this.querySelector('h4')?.textContent?.trim() || 'item';
      console.log(`📌 Clicked: ${title}`);
    });
  });
})();