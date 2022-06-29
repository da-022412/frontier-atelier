import React, { useState } from 'react';
import Image from 'next/image';

import accordionStyles from './Accordion.module.scss';

import Heading from '../../Heading';
import BodyText from '../../BodyText';

import More from '../../../assets/images/expand-more.webp';
import Less from '../../../assets/images/expand-less.webp';

const AccordionItem = ({ title, copy }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`${accordionStyles['accordion-item']}`}>
            <div
                className={`${accordionStyles['accordion-title']}`}
                onClick={() => setIsActive(!isActive)}
            >
                <Heading style='heading-3' level='3'>
                    {title}
                </Heading>
                {isActive ? (
                    <Image src={Less} height={24} width={24} alt='Less' />
                ) : (
                    <Image src={More} height={24} width={24} alt='More' />
                )}
            </div>
            {isActive && (
                <div className={`${accordionStyles.panel}`}>
                    <BodyText>{copy}</BodyText>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
