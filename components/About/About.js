import aboutStyles from './About.module.scss';

import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

const About = () => {
    return (
        <ContainerTight>
            <div className={`${aboutStyles['about-container']}`}>
                <Heading style='heading-2' level='2'>
                    This is <br />
                    <span style={{ color: 'var(--color-accent)' }}>
                        Frontier
                        <br />
                        Atelier.
                    </span>
                </Heading>
                <div className={`${aboutStyles['about-text']}`}>
                    <BodyText>
                        Frontier Atelier is a curiosity sandbox, and the only
                        bespoke Design Studio in the world where discerning
                        patrons can design and produce custom objects and
                        experiences, seamlessly integrating the skills of the
                        very best artisans, utilizing advanced fabrication
                        techniques, innovative technology, and impactful
                        storytelling.
                    </BodyText>
                    <BodyText>
                        Frontier Atelier enables our patrons to build one-of-one
                        items, manifesting their creative dreams and desires,
                        transforming them into a bespoke products and unique
                        experiences in collaboration with our in-house artisans
                        and creators as well as leading Design Houses and
                        Brands.
                    </BodyText>
                </div>
            </div>
        </ContainerTight>
    );
};

export default About;
