import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import headerStyles from '../Header/Header.module.scss';
import navStyles from './MobileNav.module.scss';

import Logo from '../../../assets/images/logo.svg';
import Menu from '../../../assets/images/menu.webp';
import Close from '../../../assets/images/close.webp';
import Button from '../../Button';
import SocialIcons from '../../SocialIcons';
import BodyText from '../../BodyText';

const CONTENT = {
    links: [
        {
            title: 'Club',
            slug: '/#club',
        },
        {
            title: 'Roadmap',
            slug: '/#roadmap',
        },
        {
            title: 'Team',
            slug: '/#team',
        },
        {
            title: 'FAQ',
            slug: '/faqs',
        },
    ],
    footer: '© 2022 MetaSpeed, Inc. All rights reserved.',
};

const MobileHeader = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <header className={headerStyles.header}>
                <div className={`${headerStyles['header-container']}`}>
                    <figure className={headerStyles.logo}>
                        <Link href='/'>
                            <a>
                                <Image
                                    src={Logo}
                                    width={110}
                                    height={50}
                                    alt='Logo'
                                />
                            </a>
                        </Link>
                    </figure>
                    <figure
                        className={headerStyles.menu}
                        onClick={() => setIsActive(!isActive)}
                    >
                        {isActive ? (
                            <Image
                                src={Close}
                                width={24}
                                height={24}
                                alt='Close'
                            />
                        ) : (
                            <Image
                                src={Menu}
                                width={24}
                                height={24}
                                alt='Menu'
                            />
                        )}
                    </figure>
                </div>
            </header>
            {isActive && (
                <nav className={navStyles.nav}>
                    <div className={`${navStyles['nav-container']}`}>
                        {CONTENT.links.map(({ title, slug }, index) => (
                            <div
                                className={`${navStyles['link-container']}`}
                                key={index}
                            >
                                <Link href={slug}>
                                    <a
                                        className={`${navStyles['link-text']}`}
                                        onClick={() => setIsActive(!isActive)}
                                    >
                                        {title}
                                    </a>
                                </Link>
                            </div>
                        ))}
                        <div className={`${navStyles['btn-container']}`}>
                            <Button style='primary-btn' link='https://whitelist.lazylamb.com/'>
                                Join the Whitelist
                            </Button>
                        </div>
                        <div className={`${navStyles['nav-footer']}`}>
                            <SocialIcons />
                            <BodyText>{CONTENT.footer}</BodyText>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
};

export default MobileHeader;
