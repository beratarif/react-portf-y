import React from "react";
import { motion } from "framer-motion";

const skills = ['HTML', 'CSS','JavaScript', 'React','PHP','MySQL']

const About = () => {
  return (
    <motion.section
      id="about"
      style={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duraction: 1 }}
      viewport={{ once: true }}
    >
      <h2 style={styles.heading}>Hakkımda</h2>
      <p style={styles.description}>
        Merhaba! Ben Frontend geliştirmeye meraklı, React konusunda deneyim
        kazanan bir geliştiriciyim. Web teknolojilerine tutkuyla yaklaşıyorum ve
        kullanıcı dostu arayüzler oluşturmayı seviyorum.
      </p>
        <h3 style={styles.subheading}>Yetenekler</h3>
        <ul style={styles.skillList}>
            {skills.map((skill,index) => (
                <li key={index} style={styles.skillItem}>
                    {skill}
                </li>
            ))}
        </ul>
    </motion.section>
  );
};

const styles={
    container: {
        padding:'4rem 2rem',
        backgroundColor: '#fff',
        textAlign:'center',
    },
    heading:{
        topSize:'2rem',
        marginBottom:'1rem',
    },
    description :{
        maxWidth:'600px',
        margin:'0 auto 2rem',
        fontSize:'1.1rem',
        lineHeight:1.6,
    },
    subheading:{
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
   skillList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
    padding: 0,
  },
  skillItem: {
    backgroundColor: "#355",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
  },
}

export default About;
