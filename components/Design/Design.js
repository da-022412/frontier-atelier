import { useState, useCallback, useEffect } from 'react';

import Image from 'next/image';

import designStyles from './Design.module.scss';

import Container from '../Container';
import Heading from '../Heading';

import Infographic from '../../assets/images/Infographic_Design101.svg';
import InfographicMobile from '../../assets/images/ig_design101_mobile 1.webp';

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

const Design = () => {
    const isBreakpoint = useMediaQuery(767);

    return (
        <Container>
            <div className={`${designStyles['design-container']}`}>
                <Heading style='heading-3' level='3'>
                    Welcome to{' '}
                    <span style={{ color: 'var(--color-accent)' }}>
                        Design School 101
                    </span>
                </Heading>
                {isBreakpoint ? (
                    <figure className={`${designStyles['design-img']}`}>
                        <Image src={InfographicMobile} alt='Infographic' />
                    </figure>
                ) : (
                    <figure className={`${designStyles['design-img']}`}>
                        <Image src={Infographic} alt='Infographic' />
                    </figure>
                )}
            </div>
        </Container>
    );
};

export default Design;
