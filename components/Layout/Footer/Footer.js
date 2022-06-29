import Image from 'next/image';

import footerStyles from './Footer.module.scss';

import Container from '../../Container';
import Form from './Form';
import ContactInfo from './ContactInfo';

import Logo from '../../../assets/images/metaspeed_white.webp';

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <Container>
                <div className={`${footerStyles['footer-container']}`}>
                    <Form />
                    <Image src={Logo} height={52} width={200} alt='Metaspeed' />
                    <ContactInfo />
                </div>

            </Container>
        </footer>
    );
};

export default Footer;
