import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <h1 className={style.footerTitle}>ELIBRI</h1>
        <p className={style.footerText}>Ваш лучший выбор для покупки электроники</p>
        <div className={style.developers}>
          <p>Developed by:</p>
          <p>Sattarov Roman - Frontend Developer - @romantoster</p>
          <p>Mareninova Anastasia - Frontend Developer - @enigmaDev</p>
          <p>Fegir Denis - Backend Developer - @Orlov_AD</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
