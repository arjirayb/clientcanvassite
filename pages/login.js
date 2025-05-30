import styles from './Login.module.css'; // Adjust path if your CSS is in another folder

export default function Login() {
  return (
    <form className={styles.form}>
      <h2 className={styles.heading}>Login</h2>

      <label htmlFor="email">Email</label>
      <input
        className={styles.input}
        type="email"
        id="email"
        placeholder="Your email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        className={styles.input}
        type="password"
        id="password"
        placeholder="Your password"
        required
      />

      <button className={styles.loginBtn}>Log In</button>
    </form>
  );
}
