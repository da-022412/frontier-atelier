import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import heroStyles from './Hero.module.scss';

import Container from '../Container';
import Heading from '../Heading';

import arrowDown from '../../assets/images/arrow-down.webp';

const Hero = () => {
    const [time, setTime] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => setTime(true), 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={heroStyles.hero}>
            <AnimatePresence>
                {!time ? (
                    <motion.div
                        key='first'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5, default: { duration: 1 } }}
                        className={`${heroStyles['heading-container']}`}>
                        <Heading style='heading-2' level='2'>
                            Welcome to the{' '}
                            <span style={{ color: 'var(--color-accent)' }}>
                                curiosity sandbox
                            </span>
                        </Heading>
                    </motion.div>
                ) : (
                    <motion.div
                        key='second'
                        initial={{ opacity: 0 }}
                        transition={{ delay: 1.5, default: { duration: 1 } }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={`${heroStyles['heading-container']}`}>
                        <Container>
                            <Heading style='heading-1' level='1'>
                                <span style={{ color: 'var(--color-accent)' }}>
                                    Frontier Atelier
                                </span>{' '}
                                is a bespoke, private online luxury shopping
                                platform enabling patrons to purchase one-of-one
                                items and experiences curated by creators and
                                artisans from the far reaches of this beautiful
                                world.
                            </Heading>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
            <video autoPlay loop muted className={heroStyles.video} playsInline>
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
