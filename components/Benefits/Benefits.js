import benefitsStyles from './Benefits.module.scss';

import BenefitsBlurbs from './BenefitsBlurbs';

import Container from '../Container';
import Heading from '../Heading';

let CONTENT = [
    {
        title: 'Magic',
        copy: 'Our pieces are the true realization and celebration of creativity.',
    },
    {
        title: 'Purity',
        copy: 'Innocence and dreaming is what moves us.',
    },
    {
        title: 'Frontier Thinking',
        copy: 'A relentless desire to push the boundaries of what is possible.',
    },
    {
        title: 'Soul',
        copy: 'Our pieces have a unique identity, this is what makes them magical.',
    },
    {
        title: 'Privacy',
        copy: 'We are highly confidential and protect secrets.',
    },
];

const Benefits = () => {
    return (
        <Container>
            <div className={`${benefitsStyles['benefits-container']}`}>
                <Heading style='heading-3' level='3'>
                    Driven by our{' '}
                    <span style={{ color: 'var(--color-accent' }}>
                        custom spirit
                    </span>
                </Heading>
                <BenefitsBlurbs items={CONTENT} />
            </div>
        </Container>
    );
};

export default Benefits;
