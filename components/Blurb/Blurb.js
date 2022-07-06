import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import blurbStyles from './Blurb.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const Blurb = ({ img, title, copy }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.25 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0 }}
                className={blurbStyles.blurb}>
                <figure className={`${blurbStyles['blurb-img']}`}>
                    <Image
                        src={img}
                        width={200}
                        height={200}
                        alt='Profile Pic'
                    />
                </figure>
                <Heading style='heading-5' level='5'>
                    {title}
                </Heading>
                <BodyText small>{copy}</BodyText>
            </motion.div>
        </AnimatePresence>
    );
};

export default Blurb;
