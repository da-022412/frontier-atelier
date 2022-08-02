import Link from 'next/link';
import Image from 'next/image';

import headerStyles from './Header.module.scss';

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
                                width='50'
                                alt='Logo'
                            />
                        </a>
                    </Link>
                </figure>
            </div>
        </header>
    );
};

export default Header;
