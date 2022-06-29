import Link from 'next/link';

import navStyles from './Nav.module.scss';

const NavItem = ({ title, slug }) => {
    return (
        <div className={`${navStyles['link-container']}`}>
            <Link href={slug}>
                <a className={`${navStyles['link-text']}`}>{title}</a>
            </Link>
        </div>
    );
};

export default NavItem;
