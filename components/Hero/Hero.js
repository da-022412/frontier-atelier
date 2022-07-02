import Heading from '../Heading';

import heroStyles from './Hero.module.scss';

import Container from '../Container';

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
            <div classname={`${heroStyles['video-container']}`}>
                <video autoPlay loop muted>
                    <source
                        src='/assets/videos/FA_hero-web.mp4'
                        type='video/mp4'
                    />
                </video>
            </div>
        </div>
    );
};

export default Hero;
