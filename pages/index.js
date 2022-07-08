import Image from 'next/image';

import Hero from '../components/Hero';
import About from '../components/About';
import Information from '../components/Information';
import Benefits from '../components/Benefits';
import Design from '../components/Design';
import Team from '../components/Team';
import Makers from '../components/Makers';
import CallOut from '../components/CallOut';

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <div className='parallax yatch'></div>
            <Information />
            <div className='parallax sneakers'></div>
            <Benefits />
            <div className='parallax satellite'></div>
            <Design />
            <div className='parallax fashion'></div>
            <Team />
            <div className='parallax liquor'></div>
            <Makers />
            <div className='parallax vehicle'></div>
            <CallOut />
        </main>
    );
}
