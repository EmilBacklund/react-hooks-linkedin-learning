import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from './components/StarRating';
import APIgithubHookTest from './components/APIgithubHookTest';

function UseStateCongrats() {
  const [name, setName] = useState('Emil');
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  }, [name]);

  useEffect(() => {
    console.log(`Celebrate ${name}`);
  }, [name]);

  useEffect(() => {
    console.log(`The user is: ${admin ? 'admin' : 'not admin'}`);
  }, [admin]);

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Will')}>Change winner</button>
      <p>{admin ? 'You are now logged in' : 'You are not logged in'}</p>
      <button onClick={() => setAdmin(!admin)}>{admin ? 'log out' : 'log in'}</button>
    </section>
  );
}

function TestUseStateHook() {
  const [status, setStatus] = useState('Not Delivered');
  console.log(status);
  return (
    <div>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus('Delivered')}>Deliver</button>
    </div>
  );
}

function UseStateCheckbox() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input type='checkbox' value={checked} onChange={() => setChecked(!checked)} />
      <p>{checked ? 'Checked' : 'Not checked'}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestUseStateHook />
    <UseStateCheckbox />
    <StarRating totalStars={10} />
    <UseStateCongrats />
    <APIgithubHookTest />
  </React.StrictMode>
);
