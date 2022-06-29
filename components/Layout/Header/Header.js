import Link from 'next/link';
import Image from 'next/image';

import headerStyles from './Header.module.scss';

import Nav from './Nav';
import Button from '../../Button';

import Logo from '../../../assets/images/logo.svg';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <figure className={headerStyles.logo}>
                    <Link href='/'>
                        <a>
                            <Image
                                src={Logo}
                                height='65'
                                width='140'
                                alt='Logo'
                            />
                        </a>
                    </Link>
                </figure>
                <Nav />
                <Button style='primary-btn' link='https://whitelist.lazylamb.com/'>
                    Join the Whitelist
                </Button>
            </div>
        </header>
    );
};

export default Header;
