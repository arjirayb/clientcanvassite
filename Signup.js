import styles from './Signup.module.css'; // Make sure the path is correct

export default function Signup() {
  return (
    <form className={styles.form}>
      <label htmlFor="name">Name</label>
      <input className={styles.input} id="name" type="text" placeholder="Your full name" />

      <label htmlFor="email">Email</label>
      <input className={styles.input} id="email" type="email" placeholder="Your email" />

      <label htmlFor="password">Password</label>
      <input className={styles.input} id="password" type="password" placeholder="Choose a password" />

      <button className={styles.signupBtn}>Sign Up</button>
    </form>
  );
}
