import Image from 'next/image';

import Hero from '../components/Hero';
import About from '../components/About';
import Information from '../components/Information';
import Benefits from '../components/Benefits';
import Design from '../components/Design';
import Team from '../components/Team';
import Makers from '../components/Makers';

import Yatch from '../assets/images/frontier-atelier-yacht.webp';
import Sneakers from '../assets/images/frontier-atelier-sneakers.webp';
import Satellite from '../assets/images/frontier-atelier-satellite.webp';
import Fashion from '../assets/images/frontier-atelier-fashion.webp';
import Liquor from '../assets/images/frontier-atelier-liquor.webp';

export default function Home() {
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
        </main>
    );
}
