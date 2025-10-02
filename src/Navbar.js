import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>👨‍💻 Portföy</div>
      <ul style={styles.navLinks}>
        <li>
          <a href="#hero" style={styles.navLinkItem}>
            Ana Sayfa
          </a>
        </li>
        <li>
          <a href="#about" style={styles.navLinkItem}>
            Hakkımda
          </a>
        </li>
        <li>
          <a href="#projects" style={styles.navLinkItem}>
            Projeler
          </a>
        </li>
        <li>
          <a href="#contact" style={styles.navLinkItem}>
            İletişim
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    width: "97%",
    backgroundColor: "#1e1e2f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
  logo: {
    color: "white",
    backgroundColor: "transparent",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navLinkItem: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;
