import { motion } from 'framer-motion';
import Image from 'next/image';

import infoStyles from './Info.module.scss';

import Heading from '../Heading';

const InfoBlurbs = ({ items }) => {
    return (
        <div className={`${infoStyles['info-blurbs']}`}>
            {items.map(({ img, title, copy }, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${infoStyles['info-blurb']}`}
                    key={index}>
                    <figure className={`${infoStyles['info-img']}`}>
                        <Image src={img} alt='Information' />
                    </figure>
                    <Heading style='heading-4' level='4'>
                        {title}
                    </Heading>
                    <p className={`${infoStyles['info-blurb-copy']}`}>{copy}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default InfoBlurbs;
