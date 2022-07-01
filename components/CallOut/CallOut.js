import callOutStyles from './CallOut.module.scss';

import ContainerTight from '../ContainerTight';
import Heading from '../Heading';
import BodyText from '../BodyText';

const CallOut = () => {
    return (
        <ContainerTight>
            <div className={`${callOutStyles['callout-container']}`}>
                <Heading style='heading-3' level='3'>
                    Ready to{' '}
                    <span style={{ color: 'var(--color-accent)' }}>
                        create?
                    </span>
                </Heading>
                <BodyText>
                    Our team is at your service to imagine and fabricate unique
                    products and experiences in collaboration with the world’s
                    leading Design Houses and Brands.
                </BodyText>
            </div>
        </ContainerTight>
    );
};

export default CallOut;
