import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [msg, setMsg] = useState('');
  let [timer, setTimer] = useState(10);
  const ramdomNum = () => {
    const num = Math.floor(Math.random() * (100)) + 1;
    setNum(num);
    if (num % 3 === 0 || num % 5 === 0) {
      setMsg('Acerto')
    } else {
      setMsg('');
    }
  }

  const playTimer = () => {
    if (timer > 0) {
      setTimer(timer => timer - 1)
    } else {
      setTimer(10);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      playTimer()
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      ramdomNum()
    }, 10000);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div>
      {timer} <br/>
      {' '}
      {num} <br/>
      {' '}
      {msg !== '' && msg}
    </div>
  );
}

export default App;
