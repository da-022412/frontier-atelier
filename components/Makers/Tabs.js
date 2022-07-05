import { useState } from 'react';

import tabsStyles from './Makers.module.scss';

import Blurb from '../Blurb';

import imageOne from '../../assets/images/bjakre-ingels.webp';
import imageTwo from '../../assets/images/wynton-marsalis.webp';
import imageThree from '../../assets/images/sara-ferrero.webp';
import imageFour from '../../assets/images/marcus-samuelsson.webp';
import imageFive from '../../assets/images/lawrence-graff.webp';
import imageSix from '../../assets/images/scott-kelly.webp';
import imageSeven from '../../assets/images/fox-harrell.webp';
import imageEight from '../../assets/images/pierre-alexis-dumas.webp';
import imageNine from '../../assets/images/sara-ferrero-m.webp';
import imageTen from '../../assets/images/richard-mille.webp';
import imageEleven from '../../assets/images/gerald-genta.webp';
import imageTwelve from '../../assets/images/david-adjaye.webp';
import imageThirteen from '../../assets/images/neri-oxmn.webp';
import imageFourteen from '../../assets/images/alex-ricard.webp';
import imageFifteen from '../../assets/images/christian-louboutin.webp';
import imageSixteen from '../../assets/images/richelle-parham.webp';
import imageSeventeen from '../../assets/images/marek-reichman.webp';
import imageEighteen from '../../assets/images/michael-bay.webp';
import imageNineteen from '../../assets/images/tamara-ralph.webp';
import imageTwenty from '../../assets/images/fabritzio-buonamassa.webp';
import imageTwentyOne from '../../assets/images/kehinde-wiley.webp';

const CONTENT = {
    tabs: [
        'All',
        'Creative',
        'Fashion',
        'Technology',
        'Architecture',
        'Experiences',
    ],
    items: [
        {
            img: imageOne,
            title: 'Bjakre Ingels',
            copy: 'Bespoke Architecture',
            tab: 'Architecture',
        },
        {
            img: imageTwo,
            title: 'Wynton Marsalis',
            copy: 'Jazz legend Bespoke music scores',
            tab: 'Creative',
        },
        {
            img: imageThree,
            title: 'Sara Ferrero',
            copy: 'Creative Director, Valextra Custom bags and luggage',
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
            copy: 'CEO, Graff Bespoke jewelry ',
            tab: 'Fashion',
        },
        {
            img: imageSix,
            title: 'Scott Kelly',
            copy: 'NASA Astronaut Bespoke experiences',
            tab: 'Experiences',
        },
        {
            img: imageSeven,
            title: 'D. Fox Harrell',
            copy: 'Head of Virtuality Lab, MIT Bespoke VR experiences',
            tab: 'Experiences',
        },
        {
            img: imageEight,
            title: 'Pierre Alexis Dumas',
            copy: 'Creative Director, Hermes Bespoke handbags',
            tab: 'Fashion',
        },
        {
            img: imageNine,
            title: 'Sara Ferrero',
            copy: 'Watchmaker Bespoke timepieces',
            tab: 'Fashion',
        },
        {
            img: imageTen,
            title: 'Richard Mille',
            copy: 'Legendary watchmaker Bespoke timepieces',
            tab: 'Fashion',
        },
        {
            img: imageEleven,
            title: 'Gerald Genta',
            copy: 'Legendary watchmaker Bespoke timepieces',
            tab: 'Fashion',
        },
        {
            img: imageTwelve,
            title: 'David Adjaye',
            copy: 'Former Co-head of National Bank of Canada’s Private Equity Group',
            tab: 'Fashion',
        },
        {
            img: imageThirteen,
            title: 'Neri Oxmn',
            copy: 'Bio-Architect Bespoke organic art',
            tab: 'Creative',
        },
        {
            img: imageFourteen,
            title: 'Alex Ricard',
            copy: 'CEO, Pernod Ricard Bespoke spirits',
            tab: 'Creative',
        },
        {
            img: imageFifteen,
            title: 'Christian Louboutin',
            copy: 'Designer Bespoke footwear',
            tab: 'Fashion',
        },
        {
            img: imageSixteen,
            title: 'Richelle Parham',
            copy: 'President - New Ventures, Universal Music Group Bespoke music compositions',
            tab: 'Experiences',
        },
        {
            img: imageSeventeen,
            title: 'Marek Reichman',
            copy: 'Chief Designer, Aston Martin Bespoke autos',
            tab: 'Creative',
        },
        {
            img: imageEighteen,
            title: 'Michael Bay',
            copy: 'Filmmaker Bespoke movies',
            tab: 'Creative',
        },
        {
            img: imageNineteen,
            title: 'Tamara Ralph',
            copy: 'Founder, Ralph & Russo Bespoke dresses',
            tab: 'Fashion',
        },
        {
            img: imageTwenty,
            title: 'Fabritzio Buonamassa',
            copy: 'Legendary watch designer Custom timepieces',
            tab: 'Fashion',
        },
        {
            img: imageTwentyOne,
            title: 'Kehinde Wiley',
            copy: 'Artist Bespoke portraits',
            tab: 'Creative',
        },
    ],
};

const Tabs = () => {
    const [active, setActive] = useState('All');

    return (
        <>
            <div className={`${tabsStyles['tabs-titles']}`}>
                {CONTENT.tabs.map((tab) => (
                    <div
                        key={tab}
                        active={active === tab ? tab.toString() : null}
                        onClick={() => setActive(tab)}
                        className={tab === active ? tabsStyles.active : null}>
                        {tab}
                    </div>
                ))}
            </div>
            <div className={tabsStyles.tab}>
                {CONTENT.items.map(({ img, title, copy, tab }, index) =>
                    active === tab ? (
                        <Blurb
                            img={img}
                            title={title}
                            copy={copy}
                            key={index}
                        />
                    ) : active === 'All' ? (
                        <Blurb
                            img={img}
                            title={title}
                            copy={copy}
                            key={index}
                        />
                    ) : null
                )}
            </div>
        </>
    );
};

export default Tabs;
