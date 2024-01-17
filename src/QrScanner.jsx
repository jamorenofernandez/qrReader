import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

export const QrScanner = (props) => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner(
            'reader', 
            {
                qrbox: {
                    width: 250,
                    height: 250
                },
                fps: 5
            });
        let isScanning = true;
        const success = (result) => {
            if (isScanning) {
                scanner.clear();
                setScanResult(result);
            }
        }
        const error = (err) => {
            console.warn(err);
        } 
        scanner.render(success, error);
    }, []);

    return (
        <>
            {scanResult 
                ? <div>{scanResult}</div>
                : <div id="reader"></div>
            }
        </>)
} 