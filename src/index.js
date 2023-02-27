import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import StarRating from './components/StarRating';

function UseStateCongrats() {
  const [name, setName] = useState('Emil');

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  });

  return (
    <section>
      <p>Congratulations {name}!</p>
      <button onClick={() => setName('Will')}>Change winner</button>
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
  </React.StrictMode>
);
