import { useRef, useState } from 'react';

export function WebcamViewer() {
    const videoRef = useRef(null);
    const [error, setError] = useState(null);
    const [isStreaming, setIsStreaming] = useState(false);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            videoRef.current.srcObject = stream;
            setIsStreaming(true);
        } catch (err) {
            setError('Камера не доступна или доступ запрещен');
            console.error(err);
        }
    };

    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h2>Webcam Viewer</h2>
            <button onClick={startCamera} disabled={isStreaming}>
                {isStreaming ? 'Камера включена' : 'Включить камеру'}
            </button>
            <div style={{ marginTop: '1rem' }}>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    width="480"
                    height="360"
                    style={{ border: '2px solid #ccc', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}
