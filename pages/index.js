import Hero from '../components/Hero';

import homeStyles from '../components/Hero/Hero.module.scss';

export default function Home() {
    return (
        <main className={homeStyles.main}>
            <Hero />
        </main>
    );
}
