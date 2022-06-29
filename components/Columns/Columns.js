import Image from 'next/image';

import columnsStyles from './Columns.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';
import List from '../List';
import Button from '../Button';

const Columns = ({ items }) => {
    return (
        <Container>
            <Heading style='heading-2' level='2'>
                {items.title}
            </Heading>
            <div className={`${columnsStyles['columns']}`}>
                <div className={`${columnsStyles['column-content']}`}>
                    {items.subTitle ? (
                        <Heading style='heading-3' level='3'>
                            {items.subTitle}
                        </Heading>
                    ) : null}
                    {items.copy
                        ? items.copy.map(({ text }, index) => (
                              <BodyText key={index}>{text}</BodyText>
                          ))
                        : null}
                    {items.list ? <List content={items.list} /> : null}
                    {items.btn ? (
                        <Button style='primary-btn' link={items.link}>
                            {items.btn}
                        </Button>
                    ) : null}
                </div>
                <div className={`${columnsStyles['column-content']}`}>
                    <Image src={items.img} alt='Lazy Lambs NFT' />
                </div>
            </div>
        </Container>
    );
};

export default Columns;
