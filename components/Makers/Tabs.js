import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import tabsStyles from './Makers.module.scss';

import Heading from '../Heading';
import Blurb from '../Blurb';

import Less from '../../assets/images/caret-up-filled.webp';
import More from '../../assets/images/caret-down-filled.webp';

const perPage = 4;
let blurbs = [];

const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, []);

    return targetReached;
};

const Tabs = ({ items }) => {
    const [active, setActive] = useState('All');
    const [isActive, setIsActive] = useState(false);
    const [toShow, setToShow] = useState([]);
    const [next, setNext] = useState(4);
    const [end, setEnd] = useState(false);

    const isBreakpoint = useMediaQuery(767);

    const checkItems = (start, end) => {
        const sliced = items.items.slice(start, end);
        blurbs = [...blurbs, ...sliced];
        setToShow(blurbs);
    };

    useEffect(() => {
        checkItems(0, perPage);
    }, []);

    const showMore = () => {
        checkItems(next, next + perPage);
        setNext(next + perPage);
    };

    return (
        <div className={tabsStyles.tabs}>
            {isBreakpoint ? (
                <>
                    <div
                        className={`${tabsStyles['filter']}`}
                        onClick={() => setIsActive(!isActive)}>
                        <Heading style='heading-5' level='5'>
                            FILTER BY
                        </Heading>
                        {isActive ? (
                            <Image
                                src={Less}
                                height={20}
                                width={20}
                                alt='Less'
                            />
                        ) : (
                            <Image
                                src={More}
                                height={20}
                                width={20}
                                alt='More'
                            />
                        )}
                    </div>
                    {isActive && (
                        <div className={`${tabsStyles['tabs-titles-m']}`}>
                            {items.tabs.map((tab) => (
                                <div
                                    key={tab}
                                    active={
                                        active === tab ? tab.toString() : null
                                    }
                                    onClick={() => setActive(tab)}
                                    className={`${tabsStyles['tabs-title']}`}>
                                    {tab}
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <div className={`${tabsStyles['tabs-titles']}`}>
                    {items.tabs.map((tab) => (
                        <div
                            key={tab}
                            active={active === tab ? tab.toString() : null}
                            onClick={() => setActive(tab)}
                            className={
                                tab === active ? tabsStyles.active : null
                            }>
                            {tab}
                        </div>
                    ))}
                </div>
            )}
            {isBreakpoint ? (
                <>
                    <div className={tabsStyles.tab}>
                        {toShow.map(({ img, title, copy, tab }, index) =>
                            active === tab ? (
                                <Blurb
                                    img={img}
                                    title={title}
                                    copy={copy}
                                    key={index}
                                />
                            ) : active === 'All' ? (
                                <Blurb
                                    img={img}
                                    title={title}
                                    copy={copy}
                                    key={index}
                                />
                            ) : null
                        )}
                    </div>
                    <div
                        className={tabsStyles['btn-container']}
                        onClick={showMore}>
                        <div className={tabsStyles.btn}>Load More</div>
                    </div>
                </>
            ) : (
                <div className={tabsStyles.tab}>
                    {items.items.map(({ img, title, copy, tab }, index) =>
                        active === tab ? (
                            <Blurb
                                img={img}
                                title={title}
                                copy={copy}
                                key={index}
                            />
                        ) : active === 'All' ? (
                            <Blurb
                                img={img}
                                title={title}
                                copy={copy}
                                key={index}
                            />
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
};

export default Tabs;
