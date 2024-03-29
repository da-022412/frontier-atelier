import { motion } from 'framer-motion';
import Image from 'next/image';

import blurbStyles from './Blurb.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const Blurb = ({ img, title, copy, mobile }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ delay: 0.25 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={mobile ? blurbStyles.blurbMobile : blurbStyles.blurb}>
            {mobile ? (
                <>
                    <figure className={`${blurbStyles['blurb-img']}`}>
                        <Image
                            src={img}
                            width={150}
                            height={150}
                            alt='Profile Pic'
                        />
                    </figure>
                    <aside className={`${blurbStyles['blurb-mobile']}`}>
                        <h5 className={`${blurbStyles['blurb-mobile-title']}`}>
                            {title}
                        </h5>
                        <BodyText small>{copy}</BodyText>
                    </aside>
                </>
            ) : (
                <>
                    <figure className={`${blurbStyles['blurb-img']}`}>
                        <Image
                            src={img}
                            width={400}
                            height={400}
                            alt='Profile Pic'
                        />
                    </figure>
                    <h5 className={`${blurbStyles['blurb-title']}`}>{title}</h5>
                    <BodyText small>{copy}</BodyText>
                </>
            )}
        </motion.div>
    );
};

export default Blurb;
