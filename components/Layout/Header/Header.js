import Link from 'next/link';
import Image from 'next/image';

import headerStyles from './Header.module.scss';

import Logo from '../../../assets/images/logo-fa-wayne.webp';

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <div className={`${headerStyles['header-container']}`}>
                <figure className={headerStyles.logo}>
                    <Link href='/'>
                        <a>
                            <Image
                                src={Logo}
                                height='60'
                                width='243'
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
