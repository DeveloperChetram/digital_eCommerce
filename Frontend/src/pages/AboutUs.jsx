import React from 'react';

// For production styling, import a dedicated CSS file.
// import './AboutUs.css';

const AboutUs = () => {
  // Inline styles for demonstration purposes. A CSS file is recommended.
  const styles = {
    container: {
      padding: '2rem 4rem',
      fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      lineHeight: '1.7',
      color: '#333',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    foxIcon: {
      width: '60px',
      height: '60px',
      display: 'block',
      margin: '0 auto 1rem auto',
    },
    h2: {
      fontSize: '2.5rem',
      marginBottom: '0.5rem',
      color: '#BF40BF', // theme color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
    },
    h3: {
      fontSize: '1.8rem',
      borderBottom: '3px solid #BF40BF', // theme color
      paddingBottom: '0.5rem',
      marginTop: '3rem',
      marginBottom: '1.5rem',
      color: '#BF40BF', // theme color
    },
    subheading: {
      fontSize: '1.2rem',
      color: '#666',
      maxWidth: '800px',
      margin: '0 auto',
    },
    section: {
      marginBottom: '3rem',
    },
    problemGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    problemCard: {
      background: '#fff8f0',
      border: '1px solid #fee',
      padding: '1.5rem',
      borderRadius: '8px',
    },
    principlesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      textAlign: 'center',
    },
    principleCard: {
      background: '#f9f9f9',
      padding: '2rem',
      borderRadius: '8px',
      borderTop: '4px solid #0275d8', // A blue accent
    },
    teamSection: {
      background: '#f4f8fa',
      padding: '2rem',
      borderRadius: '8px',
      textAlign: 'center',
    },
    strong: {
      fontWeight: '600',
    },
    p: {
      marginBottom: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src="/assets/fox-border.png" alt="Vulpixo Fox Logo" style={styles.foxIcon} />
        <h2 style={styles.h2}>About Vulpixo</h2>
        <p style={styles.subheading}>
          We are re-architecting the digital content economy from the ground up. Vulpixo is more than a marketplace; it's a secure, intelligent, and equitable ecosystem designed for the future of digital commerce.
        </p>
      </header>

      <section style={styles.section}>
        <h3 style={styles.h3}>The Flawed State of Digital Commerce</h3>
        <p style={styles.p}>
          The digital marketplace landscape, despite its massive growth, is fraught with systemic challenges that hinder both creators and consumers. We didn't just want to build another platform; we wanted to solve the fundamental problems that plague the industry.
        </p>
        <div style={styles.problemGrid}>
          <div style={styles.problemCard}>
            <h4>For Creators & Sellers</h4>
            <p style={styles.p}>
              Content creators navigate a minefield of high marketing costs, operational inefficiencies like manual order processing, and the constant, significant risk of content misuse due to inadequate Digital Rights Management (DRM). This fragmented approach diverts focus from what truly matters: creation.
            </p>
          </div>
          <div style={styles.problemCard}>
            <h4>For Consumers & Buyers</h4>
            <p style={styles.p}>
              Consumers face a landscape of overwhelming choice overload, ineffective product discovery, and significant cybersecurity threats, including malware and financial fraud. The lack of genuine, AI-driven personalization on most platforms leads to frustrating and inefficient experiences.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>Our Philosophy: The Vulpixo Difference</h3>
        <p style={styles.p}>
          Vulpixo was born from a direct, comprehensive response to these market deficiencies. Our architecture and features are built upon four core pillars designed to create an environment of unparalleled trust and efficiency.
        </p>
        <div style={styles.principlesGrid}>
          <div style={styles.principleCard}>
            <h4><img src="/assets/fox-border.png" alt="Fox Icon" style={{width:'32px',height:'32px',verticalAlign:'middle',marginRight:'0.5rem'}} />Uncompromising Security</h4>
            <p>We employ state-of-the-art measures, from multi-factor authentication (MFA) to proactive intrusion detection systems (IDS), ensuring the robust protection of data, transactions, and intellectual property.</p>
          </div>
          <div style={styles.principleCard}>
            <h4>💡Intelligent Discovery</h4>
            <p>Leveraging the power of AI, we move beyond generic, rules-based personalization. Our platform is designed to learn and adapt, providing a genuinely individualized discovery experience for every user.</p>
          </div>
          <div style={styles.principleCard}>
            <h4>🚀 Creator Empowerment</h4>
            <p>We provide a full suite of tools for distribution, marketing, and deep analytics. Our goal is to reduce operational burdens, allowing creators to focus on their craft and build sustainable businesses.</p>
          </div>
          <div style={styles.principleCard}>
            <h4>⚖️ Intellectual Integrity</h4>
            <p>At our core is a robust IP management framework with integrated DRM systems. We ensure creators' rights are respected and that they are fairly compensated for their digital assets.</p>
          </div>
        </div>
      </section>
      
      <section style={{...styles.section, ...styles.teamSection}}>
        <h3 style={styles.h3}>Our Journey & The Team</h3>
        <p style={{...styles.p, maxWidth: '800px', margin: '0 auto 2rem auto'}}>
          Vulpixo is the vision of <strong style={styles.strong}>Chetram Patel</strong> and <strong style={styles.strong}>Vishal Singh Lodhi</strong>, brought to life as a minor project in partial fulfillment of their Bachelor of Technology in Computer Science & Engineering at <strong style={styles.strong}>Eklavya University, Damoh (M.P.), India</strong>.
        </p>
        <p style={{...styles.p, maxWidth: '800px', margin: '0 auto 2rem auto'}}>
          What began as an academic exercise quickly grew into a passion project. Mentored by <strong style={styles.strong}>Dr. Prashant Sen (HOD, CSE Department)</strong>, we committed to applying rigorous software engineering principles to solve tangible, real-world problems. The entire system—from its component-based React frontend to its scalable Node.js backend—was architected with a focus on maintainability, security, and performance. This is not just a project; it's the application of our education to build something meaningful.
        </p>
      </section>

      <section style={styles.section}>
        <h3 style={styles.h3}>A Vision for the Future</h3>
        <p style={styles.p}>
          The launch of Vulpixo is just the beginning. The system's modular design provides a strong foundation for our ambitious roadmap. We are actively exploring enhancements that will keep Vulpixo at the cutting edge:
        </p>
        <ul>
            <li><strong style={styles.strong}>Advanced AI Integration:</strong> Implementing Natural Language Processing (NLP) for search and machine-learning-based fraud detection systems.</li>
            <li><strong style={styles.strong}>Global Performance Scaling:</strong> Utilizing Content Delivery Networks (CDNs) and database sharding to ensure a fast, responsive experience for users worldwide.</li>
            <li><strong style={styles.strong}>Continuous Security Hardening:</strong> Committing to regular, in-depth security audits and integrating automated security testing into our development pipeline.</li>
        </ul>
        <p style={styles.p}>
            By ensuring creators can thrive and consumers can trust, we believe Vulpixo can play a key role in stimulating a more diverse, innovative, and trustworthy digital economy for everyone.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;