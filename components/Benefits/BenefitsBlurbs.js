import { motion } from 'framer-motion';

import benefitsStyles from './Benefits.module.scss';

import Heading from '../Heading';

const BenefitsBlurbs = ({ items }) => {
    return (
        <div className={`${benefitsStyles['benefits-blurbs']}`}>
            {items.map(({ title, copy }, index) => (
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.25 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`${benefitsStyles['benefits-blurb']}`}
                    key={index}>
                    <Heading style='heading-4' level='4'>
                        {title}
                    </Heading>
                    <p className={`${benefitsStyles['benefits-blurb-copy']}`}>
                        {copy}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default BenefitsBlurbs;
