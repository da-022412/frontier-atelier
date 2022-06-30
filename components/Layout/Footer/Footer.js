import footerStyles from './Footer.module.scss';

import Container from '../../Container';
import Heading from '../../Heading';
import BodyText from '../../BodyText';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={`${footerStyles['footer-container']}`}>
                <Container>
                    <div className={`${footerStyles['footer-message']}`}>
                        <Heading style='heading-2' level='2'>
                            Welcome to the{' '}
                            <span style={{ color: 'var(--color-accent)' }}>
                                curiosity sandbox
                            </span>
                        </Heading>
                        <BodyText>312.508.7496</BodyText>
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
