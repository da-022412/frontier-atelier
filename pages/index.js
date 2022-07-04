import { useState, useCallback, useEffect } from 'react';

import Image from 'next/image';

import Hero from '../components/Hero';
import About from '../components/About';
import Information from '../components/Information';
import Benefits from '../components/Benefits';
import Design from '../components/Design';
import Team from '../components/Team';
import Makers from '../components/Makers';
import CallOut from '../components/CallOut';

import Yatch from '../assets/images/frontier-atelier-yacht.webp';
import Sneakers from '../assets/images/frontier-atelier-sneakers.webp';
import Satellite from '../assets/images/frontier-atelier-satellite.webp';
import Fashion from '../assets/images/frontier-atelier-fashion.webp';
import Liquor from '../assets/images/frontier-atelier-liquor.webp';
import Vehicle from '../assets/images/frontier-atelier-vehicle.webp';

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

export default function Home() {
    const isBreakpoint = useMediaQuery(980);

    return (
        <main>
            <Hero />
            <About />
            <Image src={Yatch} />
            <Information />
            <Image src={Sneakers} />
            <Benefits />
            <Image src={Satellite} />
            <Design />
            <Image src={Fashion} />
            <Team />
            <Image src={Liquor} />
            <Makers />
            <Image src={Vehicle} />
            <CallOut />
        </main>
    );
}
