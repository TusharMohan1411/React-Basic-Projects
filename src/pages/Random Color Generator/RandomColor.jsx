import { useEffect, useState } from 'react';
import './RandomColor.css';

export default function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function generateHexColor() {
        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor);
    }

    function generateRgbColor() {
        let r = randomColorUtility(256);
        let g = randomColorUtility(256);
        let b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        { typeOfColor === 'hex' ? generateHexColor() : generateRgbColor() }
    }, [typeOfColor])


    return (
        <div id="random-color-main-container" style={{ background: color }}>
            <h1>Random Color Generator</h1>

            <div id="color-btns">
                <button onClick={typeOfColor === 'hex' ? generateHexColor : generateRgbColor}>Generate Random Color</button>
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            </div>
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                <h2>{typeOfColor}</h2>
                <h3>{color}</h3>
            </div>
        </div>
    )
} 