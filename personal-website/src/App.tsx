import React, {useEffect} from 'react';
import './styles/styles.css';
import FOG from 'vanta/src/vanta.fog';

function App() {
    useEffect(() => {
        // We want this code to be run after the component is rendered
        const fogEffect = FOG({
            el: '#vanta',
            highlightColor: 0x14213d,
            midtoneColor: 0xffffff,
            lowlightColor: 0x213663,
            baseColor: 0xffffff,
            blurFactor: 1,
            speed: 3,
            zoom: 2.00
        });

        const handleMouseMove = (event: { clientY: number; clientX: number; }) => {
            const blurLevel = 1 - Math.sin(event.clientY / window.innerHeight) * 0.3;
            const speedLevel = 1 + Math.sin(event.clientX / window.innerWidth) * 5;
            fogEffect.setOptions({blurFactor: blurLevel, speed: speedLevel});
        }

        window.addEventListener('mousemove', handleMouseMove);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (fogEffect) fogEffect.destroy();
        };
    }, []);

    return (
        <div className="app">
            <div className="bg" id="vanta">
                <div className="hero">
                    <h1>Justin Viasus</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
