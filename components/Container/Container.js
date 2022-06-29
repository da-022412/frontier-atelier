import containerStyles from './Container.module.scss';

const Container = ({ children }) => {
    return <section className={containerStyles.container}>{children}</section>;
};

export default Container;
