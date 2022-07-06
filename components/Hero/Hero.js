import Image from 'next/image';

import Heading from '../Heading';

import heroStyles from './Hero.module.scss';

import Container from '../Container';

import arrowDown from '../../assets/images/arrow-down.webp';

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <div className={`${heroStyles['heading-container']}`}>
                <Container>
                    <Heading style='heading-1' level='1'>
                        Welcome to the{' '}
                        <span style={{ color: 'var(--color-accent)' }}>
                            curiosity sandbox
                        </span>
                    </Heading>
                </Container>
            </div>
            <video autoPlay loop muted className={heroStyles.video}>
                <source src='/assets/videos/FA_hero-web.mp4' type='video/mp4' />
            </video>
            <div className={heroStyles.scroll}>
                EXPLORE
                <Image
                    src={arrowDown}
                    height={28}
                    width={28}
                    alt='Arrow Down'
                />
            </div>
        </div>
    );
};

export default Hero;
