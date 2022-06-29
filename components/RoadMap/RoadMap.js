import Image from 'next/image';

import roadmapStyles from './RoadMap.module.scss';

import Container from '../Container';

import Sign from '../../assets/images/road-sign.webp';
import RoadMapSVG from '../../assets/images/roadmap.svg';

const RoadMap = () => {
    return (
        <Container>
            <div className={`${roadmapStyles['roadmap-columns']}`}>
                <div className={`${roadmapStyles['img-container']}`}>
                    <figure className={`${roadmapStyles['sign-img']}`}>
                        <Image
                            src={Sign}
                            height={921}
                            width={678}
                            alt='Lambo Road Sign'
                        />
                    </figure>
                </div>
                <div className={`${roadmapStyles['img-container']}`}>
                    <figure className={`${roadmapStyles['roadmap-img']}`}>
                        <Image
                            src={RoadMapSVG}
                            height={755}
                            width={800}
                            alt='Road Map'
                        />
                    </figure>
                </div>
            </div>
        </Container>
    );
};

export default RoadMap;
