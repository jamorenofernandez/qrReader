// import { Html5Qrcode } from 'html5-qrcode';
// import React, { useEffect, useRef } from 'react';

// const QRCodeReader = ({ onScan }) => {
//     const videoRef = useRef(null);
//     const html5QrCodeRef = useRef(null);
  
//     useEffect(() => {
//       html5QrCodeRef.current = new Html5Qrcode('qr-code-reader');
//       html5QrCodeRef.current.start({ facingMode: 'environment' }, {
//         fps: 10,
//         qrbox: 250,
//       }, (qrCodeMessage) => {
//         onScan(qrCodeMessage);
//       });
  
//       return () => {
//         if (html5QrCodeRef.current) {
//           html5QrCodeRef.current.stop();
//         }
//       };
//     }, [onScan]);
  
//     useEffect(() => {
//       if (videoRef.current) {
//         html5QrCodeRef.current.setVideoElement(videoRef.current);
//       }
//     }, []);
  
//     return (
//       <div id="qr-code-reader">
//         <video ref={videoRef} width="100%" height="100%" autoPlay playsInline muted />
//       </div>
//     );
//   };
  
//   export default QRCodeReader;