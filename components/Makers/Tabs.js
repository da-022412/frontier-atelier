import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

import tabsStyles from './Makers.module.scss';

import Heading from '../Heading';
import Blurb from '../Blurb';

import Less from '../../assets/images/caret-up-filled.webp';
import More from '../../assets/images/caret-down-filled.webp';

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

    const isBreakpoint = useMediaQuery(767);

    console.log(active);

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
        </div>
    );
};

export default Tabs;
