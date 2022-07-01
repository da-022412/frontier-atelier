import textStyles from './BodyText.module.scss';

const BodyText = ({ children, small }) => {
    return (
        <>
            {small ? (
                <small
                    className={textStyles.small}
                    dangerouslySetInnerHTML={{ __html: children }}></small>
            ) : (
                <div
                    className={`${textStyles['body-text']}`}
                    dangerouslySetInnerHTML={{ __html: children }}></div>
            )}
        </>
    );
};

export default BodyText;
