// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div style={styles.wrapper}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heading}>ClientCanvas</h1>
        <p style={styles.subheading}>
          Create stunning, branded onboarding forms in minutes — no coding required.
        </p>
        <Link href="/signup">
          <a style={styles.button}>Try for Free</a>
        </Link>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.featureHeading}>Why ClientCanvas?</h2>
        <ul style={styles.featureList}>
          <li>⚡ Easy-to-build forms — drag & drop simplicity</li>
          <li>📱 Mobile-ready — looks great on every device</li>
          <li>🧩 Embed anywhere — your site, your brand</li>
          <li>💌 Collect client info, files, and sign-offs</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} ClientCanvas. Built for creators & freelancers.</p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    fontFamily: "'Segoe UI', sans-serif",
    padding: "2rem",
    background: "#f9f9f9",
    color: "#333",
  },
  hero: {
    textAlign: "center",
    padding: "4rem 2rem",
    background: "#111",
    color: "#fff",
    borderRadius: "10px",
    marginBottom: "3rem",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    maxWidth: "500px",
    margin: "0 auto",
  },
  button: {
    background: "#00B894",
    color: "#fff",
    padding: "1rem 2rem",
    fontSize: "1rem",
    borderRadius: "6px",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.3s",
  },
  features: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem 1rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  featureHeading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  featureList: {
    listStyle: "none",
    padding: 0,
    fontSize: "1.1rem",
    lineHeight: "2",
  },
  footer: {
    textAlign: "center",
    marginTop: "4rem",
    fontSize: "0.9rem",
    color: "#777",
  },
};
