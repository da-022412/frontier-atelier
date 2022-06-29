import Heading from '../Heading';

import heroStyles from './Hero.module.scss';

import Container from '../Container';

const Hero = () => {
    return (
        <div className={heroStyles.hero}>
            <Container>
                <div className={`${heroStyles['heading-container']}`}>
                    <Heading style='heading-1' level='1'>
                        Welcome to the{' '}
                        <span style={{ color: 'var(--color-accent)' }}>
                            curiosity sandbox
                        </span>
                    </Heading>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
