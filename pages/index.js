import Image from 'next/image';

import Hero from '../components/Hero';
import About from '../components/About';
import Information from '../components/Information';

import homeStyles from '../components/Hero/Hero.module.scss';

import Yatch from '../assets/images/frontier-atelier-yacht.webp';

export default function Home() {
    return (
        <main className={homeStyles.main}>
            <Hero />
            <About />
            <Image src={Yatch} />
            <Information />
        </main>
    );
}
