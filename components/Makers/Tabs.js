import { useState } from 'react';

const CONTENT = [
    {
        type: 'Cash',
    },
    {
        type: 'Credit Card',
    },
    {
        type: 'Bitcoin',
    },
];

const Tabs = () => {
    const [active, setActive] = useState(CONTENT[0].type);

    return (
        <>
            <div>
                {CONTENT.map(({ type }, index) => (
                    <div
                        key={index}
                        active={active === type}
                        onClick={() => setActive(type)}>
                        {type}
                    </div>
                ))}
            </div>
            <p />
            <p> Your payment selection: {active} </p>
        </>
    );
};

export default Tabs;
