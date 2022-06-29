import containerStyles from './ContainerTight.module.scss';

const ContainerTight = ({ children }) => {
    return <section className={containerStyles.container}>{children}</section>;
};

export default ContainerTight;
