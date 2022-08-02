import { motion } from 'framer-motion';

import makersStyles from './Makers.module.scss';

import Tabs from './Tabs';

import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

import imageOne from '../../assets/images/bjakre-ingels.webp';
import imageTwo from '../../assets/images/wynton-marsalis.webp';
import imageThree from '../../assets/images/sara-ferrero.webp';
import imageFour from '../../assets/images/marcus-samuelsson.webp';
import imageFive from '../../assets/images/lawrence-graff.webp';
import imageSix from '../../assets/images/scott-kelly.webp';
import imageEight from '../../assets/images/pierre-alexis-dumas.webp';
import imageNine from '../../assets/images/sara-ferrero-m.webp';
import imageTen from '../../assets/images/richard-mille.webp';
import imageEleven from '../../assets/images/gerald-genta.webp';
import imageTwelve from '../../assets/images/david-adjaye.webp';
import imageFourteen from '../../assets/images/alex-ricard.webp';
import imageFifteen from '../../assets/images/christian-louboutin.webp';
import imageSixteen from '../../assets/images/richelle-parham.webp';
import imageSeventeen from '../../assets/images/marek-reichman.webp';
import imageEighteen from '../../assets/images/michael-bay.webp';
import imageNineteen from '../../assets/images/tamara-ralph.webp';
import imageTwenty from '../../assets/images/fabritzio-buonamassa.webp';
import imageTwentyOne from '../../assets/images/kehinde-wiley.webp';
import MichaelB from '../../assets/images/michael-beneville.webp';
import CraigC from '../../assets/images/craig-currie.webp';
import ChrisC from '../../assets/images/img_chris.jpg';
import Reg from '../../assets/images/img_reggie.jpg';
import Helmut from '../../assets/images/img_helmut.jpg';
import Simon from '../../assets/images/img_simon.jpg';
import Farouk from '../../assets/images/img_ farouk.jpg';
import Niel from '../../assets/images/img_niel.jpg';
import Neal from '../../assets/images/img_neal.jpg';
import Russ from '../../assets/images/img_russ.jpg';
import Charles from '../../assets/images/img_charles.jpg';

const CONTENT = {
    tabs: ['All', 'Creative', 'Fashion', 'Architecture', 'Experiences'],
    items: [
        {
            img: Charles,
            title: 'Charles Melcher',
            copy: 'Bespoke Multimedia Publishing',
            tab: 'Creative',
        },
        {
            img: Russ,
            title: 'Russ Campbell',
            copy: 'Bespoke Eyewear',
            tab: 'Fashion',
        },
        {
            img: Niel,
            title: 'Niel Fox',
            copy: 'Bespoke Luxury Travel',
            tab: 'Experiences',
        },
        {
            img: Neal,
            title: 'Neal Callow',
            copy: '007 Production Designer',
            tab: 'Creative',
        },
        {
            img: ChrisC,
            title: 'Chris Courbold',
            copy: '007 Special Effects Supervisor',
            tab: 'Creative',
        },
        {
            img: Reg,
            title: 'Reginald Hudlin',
            copy: 'Filmmaker Bespoke Content',
            tab: 'Creative',
        },
        {
            img: Helmut,
            title: 'Helmut Kinzler',
            copy: 'Bespoke Metaverse Design',
            tab: 'Experiences',
        },
        {
            img: Simon,
            title: 'Simon Sproule',
            copy: 'Bespoke Restomod Cars',
            tab: 'Creative',
        },
        {
            img: Farouk,
            title: 'Farouk Nefzi',
            copy: 'Bespoke Yacht Design',
            tab: 'Creative',
        },
        {
            img: imageOne,
            title: 'Bjakre Ingels',
            copy: 'Bespoke Architecture',
            tab: 'Architecture',
        },
        {
            img: imageTwo,
            title: 'Wynton Marsalis',
            copy: 'Jazz legend Bespoke Music Scores',
            tab: 'Creative',
        },
        {
            img: imageThree,
            title: 'Sara Ferrero',
            copy: 'Creative Director, Valextra Custom Bags and Luggage',
            tab: 'Creative',
        },
        {
            img: imageFour,
            title: 'Marcus Samuelsson',
            copy: 'Superstar chef Bespoke Culinary',
            tab: 'Creative',
        },
        {
            img: imageFive,
            title: 'Sir Lawrence Graff',
            copy: 'CEO, Graff Bespoke Jewelry ',
            tab: 'Fashion',
        },
        {
            img: imageSix,
            title: 'Scott Kelly',
            copy: 'NASA Astronaut Bespoke Experiences',
            tab: 'Experiences',
        },
        {
            img: imageEight,
            title: 'Pierre Alexis Dumas',
            copy: 'Creative Director, Hermes Bespoke Handbags',
            tab: 'Fashion',
        },
        {
            img: imageTen,
            title: 'Richard Mille',
            copy: 'Legendary Watchmaker Bespoke Timepieces',
            tab: 'Fashion',
        },
        {
            img: imageEleven,
            title: 'Gerald Genta',
            copy: 'Legendary Watchmaker Bespoke Timepieces',
            tab: 'Fashion',
        },
        {
            img: imageFourteen,
            title: 'Alex Ricard',
            copy: 'CEO, Pernod Ricard Bespoke Spirits',
            tab: 'Creative',
        },
        {
            img: imageFifteen,
            title: 'Christian Louboutin',
            copy: 'Designer Bespoke Footwear',
            tab: 'Fashion',
        },
        {
            img: imageSixteen,
            title: 'Richelle Parham',
            copy: 'President - New Ventures, Universal Music Group Bespoke Music Compositions',
            tab: 'Experiences',
        },
        {
            img: imageSeventeen,
            title: 'Marek Reichman',
            copy: 'Chief Designer, Aston Martin Bespoke Autos',
            tab: 'Creative',
        },
        {
            img: imageEighteen,
            title: 'Michael Bay',
            copy: 'Filmmaker Bespoke Movies',
            tab: 'Creative',
        },
        {
            img: imageNineteen,
            title: 'Tamara Ralph',
            copy: 'Founder, Ralph & Russo Bespoke Dresses',
            tab: 'Fashion',
        },
        {
            img: imageTwenty,
            title: 'Fabritzio Buonamassa',
            copy: 'Legendary Watch Designer Custom Timepieces',
            tab: 'Fashion',
        },
        {
            img: imageTwentyOne,
            title: 'Kehinde Wiley',
            copy: 'Artist Bespoke Portraits',
            tab: 'Creative',
        },
        {
            img: MichaelB,
            title: 'Michael Beneville',
            copy: 'Founder Beneville Studios Billionaire Custom Publisher',
            tab: 'Creative',
        },
        {
            img: CraigC,
            title: 'Craig Currie',
            copy: 'Founder SCPS Unlimited Bespoke Object Production',
        },
    ],
};

const Makers = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, default: { duration: 1.5 } }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`${makersStyles['makers-section']}`}>
            <ContainerTight>
                <Heading style='heading-3' level='3'>
                    Meet the{' '}
                    <span style={{ color: 'var(--color-accent)' }}>
                        makers.
                    </span>
                </Heading>
                <BodyText>
                    The Frontier Atelier creative journey starts with a
                    “one-on-one” partnership with a brilliant designer.
                </BodyText>
            </ContainerTight>
            <Tabs items={CONTENT} />
        </motion.section>
    );
};

export default Makers;
