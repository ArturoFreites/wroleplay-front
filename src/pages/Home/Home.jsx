import flow from '../../assets/flow.webp';
import aorus from '../../assets/aorus.webp';
import Streamers from './components/Streamers';
import Eventos from './components/Eventos';
import Trabajos from './components/Trabajos';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import logo from '../../assets/logo.png';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';

function Home() {

    const [scrollY, setScrollY] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const handleTimeoutComplete = () => {
        setContentVisible(true)
        console.log('cargo el timeout')
    };


    useEffect(() => {

        const timeout = setTimeout(() => {
            setIsLoading(false);
            handleTimeoutComplete();
        }, 3000);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const isFirstLoad = localStorage.getItem('isFirstLoad');

        if (!isLoading) {

            if (!isFirstLoad) {
                localStorage.setItem('isFirstLoad', 'true');
            }else{
                setContentVisible(true);
            }
            const contentTimer = setTimeout(() => {
                setContentVisible(true);
            }, 1000);

            return () => {
                clearTimeout(contentTimer);
            };
        }
    }, [isLoading]);

    return (
        <main className="vista">
            {isLoading ? <Loader /> : (
                <div className={`home-container ${contentVisible ? 'visible' : ''}`} >
                    <section className="home-portada">
                        <img className='home-portada-imagen image1' src={img1} style={{ transform: `translateX(${scrollY / 5}px)` }} />
                        <img className='home-portada-imagen image2' src={img2} style={{ transform: `translateY(${scrollY / 3}px)` }} />
                        <img className='home-portada-imagen image3' src={img3} style={{ transform: `translateY(${scrollY / 5}px)` }} />
                        <img className='image4' src={logo} />
                    </section>
                    <section className='home-sponsors'>
                        <img src={flow} />
                        <img src={aorus} />
                    </section>
                    <Streamers />
                    <Eventos />
                    <Trabajos />
                </div>
            )}

        </main>
    );
}

export default Home;