import Columns from '../Columns';

import Img from '../../assets/images/lazylamb_marketplace.webp';

const CONTENT = {

    copy: [
        {
            text: 'Our project ultimate goal is to fund and develop a play-to-earn racing game and marketplace where anyone can buy, sell, or trade digital vehicles. All transactions are recorded in the Ethereum blockchain using smart contracts to verify and manage the ownership and history of the items.',
        },
        {
            text: 'The project is also designed with sustainability and long-term utility. <span style="color:#ffea0e"><b>50% of the net profits</b></span> from the game, as well as every item sold in the marketplace will be stored on a locked, secure wallet, that will be used as an expansion fund guided by the community. ',
        },
        {
            text: 'For the token holder, our mission is to build a utilitarian project that is fun, original, but also valuable, with the potential of creating equity over time.',
        },
        {
            text: 'Join us in this unique opportunity to make history and disrupt an industry.',
        },
    ],
    img: Img,
};

const Club = () => {
    return <Columns items={CONTENT} />;
};

export default Club;
