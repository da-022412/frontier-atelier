import { useState } from 'react';

import tabsStyles from './Makers.module.scss';

import Blurb from '../Blurb';

const Tabs = ({ items }) => {
    const [active, setActive] = useState('All');

    return (
        <section classname={tabsStyles.tabs}>
            <div className={`${tabsStyles['tabs-titles']}`}>
                {items.tabs.map((tab) => (
                    <div
                        key={tab}
                        active={active === tab ? tab.toString() : null}
                        onClick={() => setActive(tab)}
                        className={tab === active ? tabsStyles.active : null}>
                        {tab}
                    </div>
                ))}
            </div>
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
        </section>
    );
};

export default Tabs;
