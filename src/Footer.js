import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Berat Arif Gönül | Tüm hakları saklıdır.</p>
      <div style={styles.icon}>
        <a href="https://github.com/beratarif" target="_blank" rel="noreferrer">
          <FaGithub size={20} color="black"/>
        </a>
        <a
          href="https://www.linkedin.com/in/berat-g%C3%B6n%C3%BCl-17ab96358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={20}  color="#0E76A8"/>
        </a>
        <a href="mailto:gonulberat1@gmail.com" target="_blank" rel="noreferrer">
          <FaEnvelope size={20} color="#f2a60c" />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#4040d6ff',
    color: '#fff',
    padding: '1rem 2rem',
    textAlign: 'center',
    marginTop:'1rem',
    minWidth: '2rem',
  },
  icon:{
    backgroundColor: '',
    marginTop:'0.5rem',
    display: 'flex',
    justifyContent: 'center',
    gap:'1rem',
  },
};

export default Footer;
