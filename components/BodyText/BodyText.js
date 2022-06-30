import textStyles from './BodyText.module.scss';

const BodyText = ({ children }) => {
    return (
        <div
            className={`${textStyles['body-text']}`}
            dangerouslySetInnerHTML={{ __html: children }}></div>
    );
};

export default BodyText;
