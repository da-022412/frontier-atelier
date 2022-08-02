import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import teamStyles from './Team.module.scss';

import Blurb from '../Blurb';

const TeamMembers = ({ items }) => {
    return (
        <Swiper
            className={`${teamStyles['team-members']}`}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                300: {
                    spaceBetween: 10,
                    slidesPerView: 1.25,
                },
                768: {
                    slidesPerView: 2.5,
                },
                981: {
                    slidesPerView: 4.5,
                },
                1200: {
                    slidesPerView: 6,
                },
            }}>
            {items.map(({ img, title, copy }, index) => (
                <SwiperSlide key={index}>
                    <Blurb img={img} title={title} copy={copy} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TeamMembers;
