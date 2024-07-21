import { useState } from 'react';
import './qrCode.css';
import QRCode from "react-qr-code";

export default function QrCode() {

    const [input, setInput] = useState('');
    const [QR, setQR] = useState('');

    function handleGenerateQR() {
        setQR(input);
    }

    return (
        <div id="qr-code-cont">
            <h1>QR Code Generator</h1>
            <div id="qr-inner">
                <QRCode value={QR} size={300} />

                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qrInput"
                    id="qrInput"
                    value={input}
                />

                <button onClick={handleGenerateQR}>Generate QR Code</button>
            </div>
        </div>
    )
}