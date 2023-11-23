
import Link from 'next/link';
import React from 'react';
import styles from './login.module.css'
import LoginCard from '@/Components/loginCard/LoginCard'
import Input from '../../Components/input/input'
import Button from '../../Components/button/button'



export default function login() {
  return (
    <div className={styles.background}>

      <LoginCard >
        <form className={styles.form}>
          <div className={styles.logo}>
            <h2 className={styles.header}>CEMEF</h2>
            <p className={styles.text}>Engenharia e Consultoria</p>
            <p className={styles.name}>Argyris</p>
          </div>
          <Input type="email" placeholder="Digite seu e-mail" />
          <Input type="password" placeholder="Digite sua senha" />
          <Button>Entrar</Button>
          <Link href="/forgotPassword"> Esqueceu a senha?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
