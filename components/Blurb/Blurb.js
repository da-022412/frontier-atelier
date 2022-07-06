import Image from 'next/image';

import blurbStyles from './Blurb.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const Blurb = ({ img, title, copy }) => {
    return (
        <div className={blurbStyles.blurb}>
            <figure className={`${blurbStyles['blurb-img']}`}>
                <Image src={img} width={200} height={200} alt='Profile Pic' />
            </figure>
            <Heading style='heading-4' level='4'>
                {title}
            </Heading>
            <BodyText small>{copy}</BodyText>
        </div>
    );
};

export default Blurb;
