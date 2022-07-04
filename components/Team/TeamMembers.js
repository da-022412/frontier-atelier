import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import teamStyles from './Team.module.scss';

import Blurb from '../Blurb';

const TeamMembers = ({ items }) => {
    return (
        <Swiper
            className={`${teamStyles['team-members']}`}
            spaceBetween={20}
            breakpoints={{
                300: {
                    slidesPerView: 1.5,
                },
                768: {
                    slidesPerView: 2.5,
                },
                981: {
                    slidesPerView: 4.5,
                },
                1200: {
                    slidesPerView: 6.5,
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
