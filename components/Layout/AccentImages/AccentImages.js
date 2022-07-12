import Image from 'next/image';

import accentStyles from './Accent.module.scss';

import Left from '../../../assets/images/left-abstract.webp';
import Right from '../../../assets/images/right-abstract.webp';

const AccentImages = () => {
    return (
        <div className={`${accentStyles['accent-img-container']}`}>
            <figure
                className={`${accentStyles['accent-img']} ${accentStyles['accent-left']}`}>
                <Image src={Left} width={8} height={200} />
            </figure>
            <figure
                className={`${accentStyles['accent-img']} ${accentStyles['accent-right']}`}>
                <Image src={Right} width={8} height={200} />
            </figure>
        </div>
    );
};

export default AccentImages;
