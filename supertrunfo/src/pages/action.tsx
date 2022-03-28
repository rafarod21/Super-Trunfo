import React from 'react';
import Image from 'next/image';

import imageSpiderMan from '../assets/spiderman.png';
import deckIcon from '../assets/deckIcon.svg';

import styles from '../styles/action.module.scss';

const Action: React.FC = () => {
  return (
    <div className={styles.actionContainer}>
      <h1>Jogador 1</h1>

      <div>
        <div className={styles.numberOfCards}>
          <Image src={deckIcon} alt='Deck' />
          <h5>20</h5>
        </div>
        <h2>15</h2>
        <div className={styles.numberOfCards}>
          <Image src={deckIcon} alt='Deck' />
          <h5>20</h5>
        </div>
      </div>
      <Image src={imageSpiderMan} alt='Imagem da carta' />

      <button>CONFIRMAR</button>
      <button>Desistir da partida</button>
    </div>
  );
};

export default Action;
