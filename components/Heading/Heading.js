import headingStyles from './Heading.module.scss';

const Heading = ({ children, style, level }) => {
    const Tag = 'h' + level;
    return <Tag className={`${headingStyles[style]}`}>{children}</Tag>;
};

export default Heading;
