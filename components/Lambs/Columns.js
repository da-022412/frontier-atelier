import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

import columnsStyles from '../Columns/Columns.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

const Columns = ({ items }) => {
    return (
        <Container>
            <Heading style='heading-2' level='2'>
                {items.title}
            </Heading>
            <div className={`${columnsStyles['columns']}`}>
                <div className={`${columnsStyles['column-content']}`}>
                    {items.copy.map(({ text }, index) => (
                        <BodyText key={index}>{text}</BodyText>
                    ))}
                </div>
                <div className={`${columnsStyles['column-content']}`}>
                    <Swiper navigation={true} modules={[Navigation]}>
                        {items.slide.map(({ img }, index) => (
                            <SwiperSlide key={index}>
                                <Image src={img} alt='Lazy Lambs NFT' />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </Container>
    );
};

export default Columns;
