import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import teamStyles from './Team.module.scss';

import Heading from '../Heading';
import BodyText from '../BodyText';

const TeamMembers = ({ items }) => {
    return (
        <Swiper
            className={`${teamStyles['team-members']}`}
            breakpoints={{
                300: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                },
                981: {
                    slidesPerView: 6.5,
                    spaceBetween: 20,
                },
            }}>
            {items.map(({ img, title, copy }, index) => (
                <SwiperSlide
                    className={`${teamStyles['team-item']}`}
                    key={index}>
                    <Image
                        src={img}
                        width={200}
                        height={200}
                        alt='Profile Pic'
                    />
                    <Heading style='heading-5' level='5'>
                        {title}
                    </Heading>
                    <BodyText small>{copy}</BodyText>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TeamMembers;
