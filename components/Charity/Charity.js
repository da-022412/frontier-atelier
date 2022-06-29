import Columns from '../Columns';

import Img from '../../assets/images/charity.webp';

const CONTENT = {
    title: 'Charity',
    copy: [
        {
            text: 'We’re not just fun and lifestyle. At Lazy Lamb, we’re also committed to giving back something positive, and doing our part to help take care of others.',
        },
        {
            text: 'We will donate <span style="color:#ffea0e"><b>5% of net profits</b></span> for the entirety of the project (including aftermarket sales)</b> to charities and non-profit organizations with full transparency and oversight from the community.',
        },
    ],
    img: Img,
};

const Charity = () => {
    return <Columns items={CONTENT} />;
};

export default Charity;
