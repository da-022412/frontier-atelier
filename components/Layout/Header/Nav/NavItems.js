import NavItem from './NavItem';

const NavItems = ({ items }) => {
    return items.map(({ title, slug }, index) => (
        <NavItem title={title} slug={slug} key={index} />
    ));
};

export default NavItems;
