import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [clockTime, setClockTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setClockTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeWithLeadingZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  const formatDate = (date) => {
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return date.toLocaleDateString(undefined,options);
  }

  const hours = clockTime.getHours() % 12;
  const minutes = clockTime.getMinutes();
  const seconds = clockTime.getSeconds();
  const ampm = clockTime.getHours() < 12 ? 'AM' : 'PM';

  return (
    <div className="digital-clock">
      <h1>Digital Clock </h1>
      <div className="time">
        {formatTimeWithLeadingZero(hours)} :
        {formatTimeWithLeadingZero(minutes)} :
        {formatTimeWithLeadingZero(seconds)} {ampm}
      </div>
      <div className="date">{formatDate(clockTime)}</div>
    </div>
  )
}

export default App