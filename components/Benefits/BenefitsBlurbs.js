import benefitsStyles from './Benefits.module.scss';

import Heading from '../Heading';

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
                    <p className={`${benefitsStyles['benefits-blurb-copy']}`}>
                        {copy}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default BenefitsBlurbs;
