import Image from 'next/image';

import infoStyles from './Info.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const InfoBlurbs = ({ items }) => {
    return (
        <div className={`${infoStyles['info-blurbs']}`}>
            {items.map(({ img, title, copy }, index) => (
                <div className={`${infoStyles['info-blurb']}`} key={index}>
                    <figure className={`${infoStyles['info-img']}`}>
                        <Image src={img} />
                    </figure>
                    <Heading style='heading-4' level='4'>
                        {title}
                    </Heading>
                    <BodyText>{copy}</BodyText>
                </div>
            ))}
        </div>
    );
};

export default InfoBlurbs;
