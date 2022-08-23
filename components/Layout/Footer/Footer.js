import footerStyles from './Footer.module.scss';

import Container from '../../Container';
import Heading from '../../Heading';
import BodyText from '../../BodyText';

const Footer = () => {
    return (
        <footer>
            <div className={`${footerStyles['footer-container']}`}>
                <Container>
                    <div className={`${footerStyles['footer-message']}`}>
                        <Heading style='heading-4' level='4'>
                            Welcome to the{' '}
                            <span style={{ color: 'var(--color-accent)' }}>
                                curiosity sandbox
                            </span>
                        </Heading>
                        <a href='mailto:jon@futurlogic.com'>
                            <BodyText>jon@futurlogic.com</BodyText>
                        </a>
                    </div>
                </Container>
            </div>
            <Container>
                <div className={footerStyles.legal}>
                    <BodyText style={{ color: 'var(--color-accent' }}>
                        © 2022 Frontier Atelier. All Rights Reserved
                    </BodyText>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
