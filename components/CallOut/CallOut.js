import { motion } from 'framer-motion';

import Image from 'next/image';

import callOutStyles from './CallOut.module.scss';

import Container from '../Container';
import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

import Email from '../../assets/images/email-icon.webp';

const CallOut = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, default: { duration: 1.5 } }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className={`${callOutStyles['callout-video-container']}`}>
                <Heading style='heading-4' level='4'>
                    A new docuseries about the brilliant designers who create
                    objects of desire
                </Heading>
                <iframe
                    src='https://player.vimeo.com/video/740867914'
                    width='1280'
                    height='720'
                    frameBorder='0'
                    allow='autoplay; fullscreen'
                    allowFullScreen></iframe>
            </motion.div>
            <ContainerTight>
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5, default: { duration: 1.5 } }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${callOutStyles['callout-container']}`}>
                    <Heading style='heading-3' level='3'>
                        Ready to{' '}
                        <span style={{ color: 'var(--color-accent)' }}>
                            create?
                        </span>
                    </Heading>
                    <BodyText>
                        Our team is at your service to imagine and fabricate
                        unique products and experiences in collaboration with
                        the world&apos;s leading Design Houses and Brands.
                    </BodyText>
                    <a
                        className={`${callOutStyles['btn-container']}`}
                        href='mailto:jon@futurlogic.com'>
                        <div className={callOutStyles.btn}>
                            <Image
                                src={Email}
                                height={20}
                                width={20}
                                alt='Email'
                            />{' '}
                            Let&apos;s Talk
                        </div>
                    </a>
                </motion.div>
            </ContainerTight>
        </Container>
    );
};

export default CallOut;
