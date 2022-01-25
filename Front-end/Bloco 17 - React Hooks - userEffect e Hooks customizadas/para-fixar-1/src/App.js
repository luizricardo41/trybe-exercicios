import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState([]);
  const [multiple, setMultiple] = useState(false);
  let [timer, setTimer] = useState(10);

  const decrementTimer = () => {
    setTimer(timer => timer - 1)
  }

  const verifyNumber = (num) => {
    if (num % 3 === 0 || num % 5 === 0) {
      setMultiple(true)
      setTimeout(() => setMultiple(false), 4000)
    } 
  }

  useEffect(() => {
    const ramdomNum = () => {
      const num = Math.floor(Math.random() * (100)) + 1;
      verifyNumber(num);
      setNum(num);
      setTimer(10);
    }
    const intervalNumber = setInterval(ramdomNum, 10000);
    const intervalTimer = setInterval(decrementTimer, 1000);

    return () => {
      clearInterval(intervalNumber);
      clearInterval(intervalTimer);
    };
  }, []);

  return (
    <div>
      <p>Tempo:{' '}{timer}</p>
      {' '}
      <p>Número aleatório:{' '}{num}</p>
      {' '}
      {multiple && 'Acerto'}
    </div>
  );
}

export default App;
