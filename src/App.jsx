import { useState } from "react";
import "./App.css";

const ASSET_BASE = import.meta.env.BASE_URL;

const projectHighlights = [
  {
    title: "BMI CALCULATOR",
    stack: "React, HTML, CSS",
    video: `${ASSET_BASE}videos/bmi-calculator.mp4`,
    summary:
      "This project is a BMI Calculator built with React and Vite that lets users enter their height in centimeters and weight in kilograms, validates that both inputs are numeric, calculates BMI using the standard formula (weight divided by height in meters squared), and then displays both the BMI value and a health category such as Under Weight, Normal Weight, Over Weight, or Obese, with a clean interface styled in CSS and a clear button to reset all fields and results.",
    impact:
      "Helps users quickly understand their body weight status and encourages healthier lifestyle choices.",
  },
  {
    title: "CURRENCY CONVERTER",
    stack: "React, HTML, CSS",
    video: `${ASSET_BASE}videos/currencyconverter.mp4`,
    summary:
      "This lightweight currency converter built with React and Vite delivers real-time exchange calculations using live data from the ExchangeRate API, optimizes performance through local rate caching, and ensures a smooth user experience with proper loading and error handling in a clean, well-structured codebase.",
    impact:
      "This project enhances real-world financial usability by providing fast, reliable currency conversions with live exchange rates from the ExchangeRate API, while demonstrating efficient API integration, performance optimization through caching, and strong frontend architecture using React and Vite.",
  },
  {
    title: "WEBSITE FOR A LOGISTIC COMPANY",
    stack: "React, CSS",
    video: `${ASSET_BASE}videos/logistics-website.mp4`,
    summary:
      "This React + Vite marketing website for Drop Ease showcases a modern, responsive courier brand presence with dynamic view switching, interactive contact modals powered by FormSubmit, and a polished dark-gold themed UI built with clean CSS and efficient frontend architecture.",
    impact:
      "This project enhances brand visibility and demonstrates strong frontend development skills through a responsive React + Vite marketing site with seamless user interaction powered by FormSubmit.",
  },
];

const skills = [
  "JavaScript / TypeScript",
  "React & Frontend Architecture",
  "Node.js & Express APIs",
  "PL/SQL / Database Design",
  "Testing & Debugging",
  "CI/CD and Deployment",
  "Oracle Forms and Reports",
  "HTML5 & CSS",
];

const workExperiences = [
  {
    company: "Ceylinco General Insurance Limited",
    role: "Associate Software Engineer",
    period: "March 2022 - Present",
    summary:
      "Contributing to enterprise insurance software solutions with strong focus on Oracle 12c Forms and Reports, PL/SQL development, and production-level support.",
    responsibilities: [
      "Developing and maintaining business applications used in core insurance operations.",
      "Writing and optimizing PL/SQL procedures, functions, and report queries.",
      "Collaborating with stakeholders to deliver requirement-driven software enhancements.",
      "Troubleshooting production issues and improving system performance and reliability.",
    ],
  },
];

const educationQualifications = [
  {
    title: "Bachelor's in Software Engineering",
    institution: "Cardiff Metropolitan University",
    modules: [
      "Software Architecture",
      "Database Management Systems",
      "Data Structures and Algorithms",
      "Web Application Development",
      "Software Testing and Quality Assurance",
    ],
  },
  {
    title: "Higher National Diploma in Computing & Software Engineering",
    institution: "ICBT Campus",
    modules: [
      "Object-Oriented Programming",
      "System Analysis and Design",
      "Networking Fundamentals",
      "Project Management",
      "Mobile Application Development",
    ],
  },
  {
    title: "Diploma in Information & Communication Technology",
    institution: "ICBT Campus",
    modules: [
      "Computer Fundamentals",
      "Office Applications",
      "Programming Basics",
      "Web Technologies",
      "Information Systems",
    ],
  },
];

const graduationPhotos = [
  { src: `${ASSET_BASE}graduation/grad-1.jpg`, alt: "Graduation photo 1" },
  { src: `${ASSET_BASE}graduation/grad-2.jpg`, alt: "Graduation photo 2" },
  { src: `${ASSET_BASE}graduation/grad-3.jpg`, alt: "Graduation photo 3" },
  { src: `${ASSET_BASE}graduation/grad-4.jpg`, alt: "Graduation photo 4" },
  { src: `${ASSET_BASE}graduation/grad-5.jpg`, alt: "Graduation photo 5" },
  { src: `${ASSET_BASE}graduation/grad-6.jpg`, alt: "Graduation photo 6" },
];

const socialPlatforms = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/18eBXQe3bH/",
    logo: "https://cdn.simpleicons.org/facebook/1877F2",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/_sajii_xv?igsh=OTZoMDFuMncwZnN5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sajeewan-sathiyanathan-05b453188/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/sajeewan1503",
    logo: "https://cdn.simpleicons.org/github/FFFFFF",
  },
];

const CONTACT_EMAIL = "sathiyanathansajeewan3@gmail.com";
const CONTACT_PHONE = "+94 71 872 2486";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const openContactModal = () => {
    setSubmitStatus("");
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setSubmitStatus("");
    setIsContactOpen(false);
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_captcha", "false");
    formData.append("_subject", "Collaboration request from portfolio website");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${CONTACT_EMAIL}`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setSubmitStatus("Message sent successfully.");
    } catch {
      setSubmitStatus("Message could not be sent right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <header className="hero">
        <p className="site-top-title">My Portfolio</p>
        <div className="hero-content">
          <figure className="profile-photo-wrap">
            <img
              src={`${ASSET_BASE}mypp.jpg`}
              alt="Portrait of Your Name"
              className="profile-photo"
              style={{
                display: "block",
                margin: "28px auto 0",
                objectPosition: "center 18%",
              }}
              loading="eager"
            />
          </figure>
          <div className="hero-text">
            <h1>Mr. Sathiyanathan Sajeewan</h1>
            <p className="qualification">(BSc (Hons)(UK), HDCSE, DICT)</p>
            <p className="eyebrow">Associate Software Engineer</p>
            <p className="lead">
              I build reliable and user-focused software products with a balance
              of clean architecture, practical delivery, and measurable business
              impact.
            </p>
            <div className="hero-meta">
              <button
                type="button"
                className="hero-button hero-button-secondary"
                onClick={openContactModal}
              >
                Open to Collaborations
              </button>
              <a
                href={`${ASSET_BASE}resume.pdf`}
                download
                className="hero-button hero-button-secondary"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section bio" aria-labelledby="bio-title">
          <h2 id="bio-title">PROFILE</h2>
          <p>
            Associate Software Engineer with 3+ years of experience specializing
            in Oracle 12c Forms and Reports development, with strong expertise
            in PL/SQL and MySQL. Skilled in designing, developing, and
            maintaining enterprise applications, optimizing database
            performance, and implementing complex business logic. Additionally
            experienced with frontend web development using React, PHP, HTML5,
            and CSS, enabling full-stack solution development. Demonstrates a
            strong problem-solving ability, attention to detail, and a passion
            for delivering high-quality, scalable software solutions.
          </p>
        </section>

        <section
          className="section education"
          aria-labelledby="education-title"
        >
          <h2 id="education-title">Education Qualifications</h2>
          <div className="education-list">
            {educationQualifications.map((qualification) => (
              <article key={qualification.title} className="education-item">
                <h3 className="education-degree">{qualification.title}</h3>
                <p className="education-institute">
                  {qualification.institution}
                </p>
                <p className="education-label">Modules Studied</p>
                <ul className="education-modules">
                  {qualification.modules.map((module) => (
                    <li key={module}>{module}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section experience"
          aria-labelledby="experience-title"
        >
          <h2 id="experience-title">Work Experience</h2>
          <div className="experience-list">
            {workExperiences.map((experience) => (
              <article key={experience.company} className="experience-item">
                <h3 className="experience-role">{experience.role}</h3>
                <p className="experience-company">{experience.company}</p>
                <p className="experience-period">{experience.period}</p>
                <p className="experience-summary">{experience.summary}</p>
                <ul className="experience-points">
                  {experience.responsibilities.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="skills-title">
          <h2 id="skills-title">Core Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <p key={skill} className="skill-pill">
                {skill}
              </p>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects I Have Worked On</h2>
          <div className="project-grid">
            {projectHighlights.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-period">{project.period}</p>
                <h3>{project.title}</h3>
                <p className="project-stack">{project.stack}</p>
                <p className="project-detail">
                  <span className="project-detail-label">summary:</span>{" "}
                  {project.summary}
                </p>
                <p className="project-detail project-impact">
                  <span className="project-detail-label">impact:</span>{" "}
                  {project.impact}
                </p>
                {project.video && (
                  <div className="project-video-frame">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                      aria-label={`${project.title} demo video`}
                    >
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section graduation" aria-labelledby="graduation-title">
          <h2 id="graduation-title">Graduation Photos</h2>
          <div className="graduation-grid">
            {graduationPhotos.map((photo) => (
              <figure key={photo.src} className="graduation-card">
                <img src={photo.src} alt={photo.alt} className="graduation-photo" loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer" aria-label="Social media links">
        <div className="social-list">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label={platform.name}
              title={platform.name}
            >
              <img src={platform.logo} alt={`${platform.name} logo`} className="social-logo" />
            </a>
          ))}
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Sathiyanathan Sajeewan. All rights reserved.</p>
      </footer>

      {isContactOpen && (
        <div className="contact-modal-backdrop" onClick={closeContactModal}>
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-close"
              aria-label="Close contact dialog"
              onClick={closeContactModal}
            >
              X
            </button>
            <h2 id="contact-modal-title">Contact Details</h2>
            <p className="contact-line">
              <strong>Email:</strong> {CONTACT_EMAIL}
            </p>
            <p className="contact-line">
              <strong>Phone:</strong> {CONTACT_PHONE}
            </p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <input
                className="contact-input"
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                className="contact-input"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="contact-input contact-textarea"
                name="message"
                placeholder="Type your message here..."
                required
              />
              <div className="contact-actions">
                <button
                  type="submit"
                  className="hero-button hero-button-secondary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  className="hero-button hero-button-secondary"
                  onClick={closeContactModal}
                >
                  Close
                </button>
              </div>
            </form>
            {submitStatus && <p className="contact-status">{submitStatus}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
