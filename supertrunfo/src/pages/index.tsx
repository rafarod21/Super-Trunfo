import Image from 'next/image';
import type { NextPage } from 'next';
import Link from 'next/link';

import Logo from '../../public/logo.svg';

import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.imageContainer}>
        <Image src={Logo} alt='Super-Trunfo' />
      </div>
      <h2>Escolha um deck para jogar</h2>
      <div className={styles.decksContainer}>
        <Link href='/action'>
          <button className={styles.deckWrapper}>
            <div className={styles.deck} />
            <span>Marvel</span>
          </button>
        </Link>
        <Link href='/action'>
          <button className={styles.deckWrapper}>
            <div className={styles.deck} />
            <span>Animais</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
