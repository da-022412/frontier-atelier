import buttonStyles from './Button.module.scss';

const Button = ({ children, style, link, disabled }) => {
    return (
        <div className={`${buttonStyles['btn-container']}`}>
            {disabled ? (
                <div className={`${buttonStyles['btn-container']}`}>
                    <a>
                        <div className={`${buttonStyles['disabled-btn']}`}>
                            {children}
                        </div>
                    </a>
                </div>
            ) : (
                <div className={`${buttonStyles['btn-container']}`}>
                    <a href={link}>
                        <div className={`${buttonStyles[style]}`}>
                            {children}
                        </div>
                    </a>
                </div>
            )}
        </div>
    );
};

export default Button;
