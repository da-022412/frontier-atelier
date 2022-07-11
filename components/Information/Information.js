import { motion } from 'framer-motion';

import infoStyles from './Info.module.scss';

import Container from '../Container';
import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import InfoBlurbs from './InfoBlurbs';

import ImgOne from '../../assets/images/frontier-atelier-guitar.webp';
import ImgTwo from '../../assets/images/frontier-atelier-tower.webp';

let CONTENT = [
    {
        img: ImgOne,
        title: 'Brand Collaborations and Bespoke Customized Service',
        copy: 'Frontier Atelier clients can collaborate with designers from the wold’s leading Design Houses and most desirable brands to create unique, one-of-a-kind objects.',
    },
    {
        img: ImgTwo,
        title: 'Client Imagination & Innovation Engine',
        copy: 'Frontier Atelier’s in-house design team allows for our clients to imagine new product ideas that both celebrate the heritage of luxury and the exciting possibilities of tomorrow, driven by technology and futurism.',
    },
];

const Information = () => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${infoStyles['info-container']}`}>
                <ContainerTight>
                    <div className={`${infoStyles['info-content']}`}>
                        <Heading style='heading-3' level='3'>
                            Your unique vision.{' '}
                            <span style={{ color: 'var(--color-accent)' }}>
                                Brought to life.
                            </span>
                        </Heading>
                        <p className={infoStyles.text}>
                            Frontier Atelier’s Custom Works and Dream Works
                            services allow our clients to{' '}
                            <span style={{ color: 'var(--color-accent)' }}>
                                create and imagine new product ideas
                            </span>{' '}
                            in-house with our Client Imagination & Innovation
                            Engine team and build entirely new and bespoke
                            objects, products and experiences, or we can
                            originate and oversee collaborations with leading
                            Design Houses and Brands.
                        </p>
                    </div>
                </ContainerTight>
                <InfoBlurbs items={CONTENT} />
            </motion.div>
        </Container>
    );
};

export default Information;
