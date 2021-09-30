import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { provider, auth } from '../firebase/clientApp';
import { signInWithPopup } from 'firebase/auth';
export default function Home() {
  const singIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result, 'login info');
      })
      .catch(() => {});
  };
  return (
    <div className={styles.container}>
      <button onClick={singIn}>login</button>
    </div>
  );
}
