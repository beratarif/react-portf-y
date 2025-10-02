import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    mesaj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi!");
    setFormData({ ad: "", email: "", mesaj: "" });
  };

  return (
    <motion.section
      id="contact"
      style={styles.container}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 style={styles.heading}>İletişime Geç</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="ad"
          placeholder="Adınızı giriniz"
          value={formData.ad}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="E-postanızı giriniz"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="Mesaj"
          placeholder="Mesajınız"
          value={formData.mesaj}
          onChange={handleChange}
          required
          style={{ ...styles.input, minHeight: "100px" }}
        />
        <button type="submit" style={styles.button}>
          Gönder
        </button>
      </form>
      <div style={styles.icon}>
        <a href="https://github.com/beratarif" target="_blank" rel="noreferrer">
          <FaGithub size={30} color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/berat-g%C3%B6n%C3%BCl-17ab96358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} color="#0E76A8" />
        </a>
        <a href="mailto:gonulberat1@gmail.com">
          <FaEnvelope size={30} color="	#f2a60c" />
        </a>
      </div>
    </motion.section>
  );
};

const styles = {
  container: {
    padding: "4rem 2rem",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "500px",
    margin: "0 auto",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "0.8rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  icon: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
  },
};

export default Contact;
