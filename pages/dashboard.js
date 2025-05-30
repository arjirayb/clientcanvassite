import styles from './Dashboard.module.css'; // Adjust path if CSS is in another folder

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Your Dashboard</h1>
      <p className={styles.message}>This is a protected area of your app. You can add client tools, stats, or other features here.</p>

      {/* Example placeholder content */}
      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <h3>Clients</h3>
          <p>Manage client profiles</p>
        </div>
        <div className={styles.card}>
          <h3>Projects</h3>
          <p>Track ongoing work</p>
        </div>
        <div className={styles.card}>
          <h3>Invoices</h3>
          <p>Generate and view invoices</p>
        </div>
      </div>
    </div>
  );
}
