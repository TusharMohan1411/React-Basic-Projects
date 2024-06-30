import React, { useState, useRef } from 'react';
import './Stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            timerRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10); // update every 10 milliseconds
            }, 10);
        }
    };

    const stopTimer = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(timerRef.current);
        }
    };

    const resetTimer = () => {
        stopTimer();
        setTime(0);
    };

    const formatTime = (time) => {
        const milliseconds = ("0" + (time % 1000)).slice(-3);
        const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
        const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
        const hours = ("0" + Math.floor(time / 3600000)).slice(-2);
        return `${hours}h : ${minutes}m : ${seconds}s : ${milliseconds}ms`;
    };

    return (
        <div className="stopwatch">
            <div className="stopwatch-display">{formatTime(time)}</div>
            <div className="stopwatch-buttons">
                <button className="stopwatch-button" onClick={startTimer}>Start</button>
                <button className="stopwatch-button" onClick={stopTimer}>Stop</button>
                <button className="stopwatch-button" onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Stopwatch;
