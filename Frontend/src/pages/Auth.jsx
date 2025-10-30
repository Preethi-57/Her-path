import React, { useState } from 'react';
import { login, register } from '../api/api';

export default function Auth(){
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({name:'', email:'', password:''});
  const handle = e => setForm({...form, [e.target.name]: e.target.value});
  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode==='login') {
        const res = await login({ email: form.email, password: form.password });
        alert('Login successful. Token: ' + res.data.token.substring(0,20) + '...');
        localStorage.setItem('token', res.data.token);
      } else {
        const res = await register({ name: form.name, email: form.email, password: form.password });
        alert('Registered. Token saved.');
        localStorage.setItem('token', res.data.token);
      }
    } catch (err) {
      alert('Error: ' + (err.response?.data?.msg || err.message));
    }
  };
  return (
    <div>
      <h2>{mode==='login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={submit}>
        {mode==='register' && <div><input name="name" placeholder="Name" value={form.name} onChange={handle} required /></div>}
        <div><input name="email" placeholder="Email" value={form.email} onChange={handle} required /></div>
        <div><input type="password" name="password" placeholder="Password" value={form.password} onChange={handle} required /></div>
        <button className="button" type="submit">{mode==='login' ? 'Login' : 'Register'}</button>
      </form>
      <div style={{marginTop:10}}>
        <button onClick={()=>setMode(mode==='login'?'register':'login')}>Switch to {mode==='login'?'Register':'Login'}</button>
      </div>
    </div>
  );
}
