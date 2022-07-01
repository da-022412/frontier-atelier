import benefitsStyles from './Benefits.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const BenefitsBlurbs = ({ items }) => {
    return (
        <div className={`${benefitsStyles['benefits-blurbs']}`}>
            {items.map(({ title, copy }, index) => (
                <div
                    className={`${benefitsStyles['benefits-blurb']}`}
                    key={index}>
                    <Heading style='heading-4' level='4'>
                        {title}
                    </Heading>
                    <BodyText>{copy}</BodyText>
                </div>
            ))}
        </div>
    );
};

export default BenefitsBlurbs;
