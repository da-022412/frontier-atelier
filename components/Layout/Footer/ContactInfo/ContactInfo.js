import contactStyles from './Contact.module.scss';

import BodyText from '../../../BodyText';

import SocialIcons from '../../../SocialIcons';

const ContactInfo = () => {
    return (
        <div className={`${contactStyles['contact-container']}`}>
            <SocialIcons />
            <BodyText>{CONTENT.smartContract}</BodyText>
            <BodyText>{CONTENT.terms}</BodyText>
        </div>
    );
};

const CONTENT = {
    smartContract: 'Verified Smart Contract <span style="color: #ffea0e"></span>',
    terms: '<span style="color: #c4c4c4">&copy; 2022 MetaSpeed, Inc. All rights reserved.</span>',
};

export default ContactInfo;
