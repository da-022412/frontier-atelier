import Hero from '../components/Hero';
import Information from '../components/Information';
import Divider from '../components/Divider';
import Club from '../components/Club';
import Lambs from '../components/Lambs';
import Lambo from '../components/Lambo';
import Charity from '../components/Charity';
import RoadMap from '../components/RoadMap';
import Team from '../components/Team';
import Why from '../components/Why';

import homeStyles from '../components/Hero/Hero.module.scss';

export default function Home() {
    return (
        <main className={homeStyles.main}>
            <Hero />
            <Information />
            <div id='club'>
                <Club />
            </div>
            <Divider />
            <Lambs />
            <Divider />
            <Lambo />
            <Divider />
            <Charity />
            <Divider />
            <div id='roadmap'>
                <RoadMap />
            </div>
            <Divider />
            <div id='team'>
                <Team />
            </div>
            <Divider />
            <Why />
        </main>
    );
}
