'use client'
import React, { useState } from 'react';
import styles from '../login/login.module.css';
import LoginCard from '@/Components/loginCard/LoginCard';
import Input from '../../Components/input/input';
import Button from '../../Components/button/button';

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleFormEdit = (field)=> (event)=> {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();
    const res = await fetch('http://26.59.8.182:3000/user', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": formData.name,
        "password": formData.password,
        "email": formData.email

      })

    })
    const data = await res.json()
    console.log(data)


    console.log('Dados do formulário enviados:', formData);
  };

  return (
    <div className={styles.background}>
      <LoginCard>
        <header>
          <h2 className={styles.header}>Cadastro</h2>
        </header>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Digite o nome"
            required
                  onChange={handleFormEdit('name')} 
          />
          <Input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            required
                       onChange={handleFormEdit('email')}
          />
          <Input
            type="password"
            name="password"
            placeholder="Digite a senha"
            required
           
            onChange={handleFormEdit('password')}
          />
          <Button type="submit"> Cadastrar </Button>

        </form>
      </LoginCard>
    </div>
  );
}
