import Image from 'next/image';

import teamStyles from './Team.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

import Grey from '../../assets/images/grey.webp';
import Jeb from '../../assets/images/Jeb.webp';
import SeanC from '../../assets/images/seanclayton.webp';
import Electron from '../../assets/images/Electronshaper.webp';
import Lenny from '../../assets/images/Lenny.webp';
import YoungHero from '../../assets/images/logo_younghero.webp';
import Atlas from '../../assets/images/logo_atlas.webp';
import Myosin from '../../assets/images/myosin-logo.webp';
import LamboBroward2 from '../../assets/images/lambobroward2.webp';

const Team = () => {
    return (
        <Container>
            <Heading style='heading-2' level='2'>
                The Team
            </Heading>
            <div className={`${teamStyles['team-columns']}`}>
                {team.map(({ title, text, img }, index) => (
                    <div className={`${teamStyles['team-item']}`} key={index}>
                        <Image
                            src={img}
                            width={200}
                            height={200}
                            className={`${teamStyles['team-img']}`}
                            alt='Profile Pic'
                        />
                        <Heading style='heading-3' level='3'>
                            {title}
                        </Heading>
                        <BodyText>{text}</BodyText>
                    </div>
                ))}
            </div>
            <div className={`${teamStyles['brand-columns']}`}>
                {brands.map(({ title, img, height, width }, index) => (
                    <div
                        className={`${teamStyles['brand-item-container']}`}
                        key={index}
                    >
                        <div className={`${teamStyles['brand-item']}`}>
                            <Image
                                src={img}
                                width={width}
                                height={height}
                                className={`${teamStyles['brand-img']}`}
                                alt='Profile Pic'
                            />
                            <Heading style='heading-6' level='6'>
                                {title}
                            </Heading>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    );
};

const team = [
    {
        title: 'Grey',
        text: 'The Dreamer',
        img: Grey,
    },
    {
        title: 'Sean C.',
        text: 'The Shaman',
        img: SeanC,
    },
    {
        title: 'Electronshaper',
        text: 'The Weaver',
        img: Electron,
    },
    {
        title: 'JEB',
        text: 'The Thinkerer',
        img: Jeb,
    },
    {
        title: 'Lenny G.',
        text: 'The Pet Lamb',
        img: Lenny,
    },
];

const brands = [
    {
        img: YoungHero,
        title: 'Artwork by YoungHero',
        height: 21,
        width: 304,
    },
    {
        img: Atlas,
        title: 'Smart-Contract by Atlas',
        height: 44,
        width: 261,
    },
    {
        img: Myosin,
        title: 'Utility Strategy + Website by Myosin',
        height: 59,
        width: 216,
    },
    {
        img: LamboBroward2,
        title: 'Official Lamborghini Dealer',
        height: 99,
        width: 220,
    },

];

export default Team;
