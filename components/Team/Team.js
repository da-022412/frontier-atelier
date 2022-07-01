import teamStyles from './Team.module.scss';

import TeamMembers from './TeamMembers';

import Container from '../Container';
import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

import JonC from '../../assets/images/jon-cropper.webp';
import AndreasT from '../../assets/images/andreas-thurner.webp';
import MichaelB from '../../assets/images/michael-beneville.webp';
import RichH from '../../assets/images/rich-hallam.webp';
import DianeW from '../../assets/images/diane-warshay.webp';
import CraigC from '../../assets/images/craig-currie.webp';
import BenjaminH from '../../assets/images/benjamin-heneka.webp';
import JonB from '../../assets/images/jon-bond.webp';

const CONTENT = [
    {
        img: JonC,
        title: 'Jon Cropper',
        copy: 'Former Head of Partnerships Aston Martin',
    },
    {
        img: AndreasT,
        title: 'Andreas Thurner',
        copy: 'Former Head of Bespoke Design Services Rolls Royce',
    },
    {
        img: MichaelB,
        title: 'Michael Beneville',
        copy: 'Founder Beneville Studios Billionaire Custom Publisher',
    },
    {
        img: RichH,
        title: 'Rich Hallam',
        copy: 'Personal Concierge Saudi Royal Family',
    },
    {
        img: DianeW,
        title: 'Diane Warshay',
        copy: 'Former Co-head of National Bank of Canada’s Private Equity Group',
    },
    {
        img: CraigC,
        title: 'Craig Currie',
        copy: 'Founder SCPS Unlimited Bespoke Object Production',
    },
    {
        img: BenjaminH,
        title: 'Benjamin Heneka',
        copy: 'Global Luxury Specialist',
    },
    {
        img: JonB,
        title: 'Jon Bond',
        copy: 'Luxury Marketing Guru',
    },
];

const Team = () => {
    return (
        <div className={`${teamStyles['team-container']}`}>
            <Container>
                <ContainerTight>
                    <Heading style='heading-3' level='3'>
                        You could call us your{' '}
                        <span style={{ color: 'var(--color-accent)' }}>
                            dream team.
                        </span>
                    </Heading>
                    <BodyText>
                        Frontier Atelier patrons can collaborate directly with
                        our in-house, highly skilled and globally recognized
                        team of craftsmen, designers, creative technologists,
                        coders, engineers and fabricators, legendary filmmakers
                        and musicians, as well as leading Design Houses and
                        Brands, to develop the most innovative products and
                        experiences. Our renown team will solve the most complex
                        design challenges, build unique artisan objects,
                        creating breathtaking experiences and technologically
                        advanced bespoke items that would otherwise never exist.
                    </BodyText>
                </ContainerTight>
            </Container>
            <TeamMembers items={CONTENT} />
        </div>
    );
};

export default Team;
