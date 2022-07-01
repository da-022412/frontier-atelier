import Image from 'next/image';

import designStyles from './Design.module.scss';

import Container from '../Container';
import Heading from '../Heading';

import Infographic from '../../assets/images/Infographic_Design101.svg';

const Design = () => {
    return (
        <Container>
            <div className={`${designStyles['design-container']}`}>
                <Heading style='heading-3' level='3'>
                    Welcome to{' '}
                    <span style={{ color: 'var(--color-accent)' }}>
                        Design School 101
                    </span>
                </Heading>
                <figure className={`${designStyles['design-img']}`}>
                    <Image src={Infographic} />
                </figure>
            </div>
        </Container>
    );
};

export default Design;
