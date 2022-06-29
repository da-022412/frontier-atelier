import Image from 'next/image';

import columnsStyles from './MultiColumn.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

import Banner from '../../assets/images/banner.webp';

const MultiColumn = ({ items }) => {
    return (
        <Container>
            <figure className={`${columnsStyles['columns-banner']}`}>
                <Image
                    src={Banner}
                    width={1180}
                    height={320}
                    alt='Lazy Lambs Banner'
                />
            </figure>
            <Heading style='heading-2' level='2'>
                {items.title}
            </Heading>
            <div className={`${columnsStyles['columns']}`}>
                {items.content.map(({ heading, copy }, index) => (
                    <div
                        className={`${columnsStyles['column-content']}`}
                        key={index}
                    >
                        <Heading style='heading-4' level='4'>
                            {heading}
                        </Heading>
                        <BodyText>{copy}</BodyText>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default MultiColumn;
