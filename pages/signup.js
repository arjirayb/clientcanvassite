import styles from './Signup.module.css';

export default function Signup() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Name" />
      <input className={styles.input} type="email" placeholder="Email" />
      <input className={styles.input} type="password" placeholder="Password" />
      <button className={styles.signupBtn}>Sign Up</button>
    </form>
  );
}
