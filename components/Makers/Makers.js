import makersStyles from './Makers.module.scss';

import Tabs from './Tabs';

import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

const Makers = () => {
    return (
        <section className={`${makersStyles['makers-section']}`}>
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
            <Tabs />
        </section>
    );
};

export default Makers;
