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
                            width={200}
                            height={200}
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
                            width={200}
                            height={200}
                            alt='Profile Pic'
                        />
                    </figure>
                    <Heading style='heading-5' level='5'>
                        {title}
                    </Heading>
                    <BodyText small>{copy}</BodyText>
                </>
            )}
        </motion.div>
    );
};

export default Blurb;
