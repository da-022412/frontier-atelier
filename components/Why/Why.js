import Img from '../../assets/images/checkered-flag.webp';

import Columns from '../Columns';

const CONTENT = {
    title: 'Why Lazy Lamb NFTs?',
    subTitle: 'Giving back to the community while democratizing access to luxury',


    list: [
        {
            item: 'Premium car club with real-life events to build an actual community of car enthusiast',
        },
        {
            item: 'Balanced trading community: we will manage and help the community build wealth by providing access to ongoing rewards post-sell-out while keeping the floors balanced so the value of the NFT is tied to real utility.',
        },
        {
            item: 'As the treasury grows so do the rewards. A new car is rewarded to the community for every 4000 eth traded.',
        },
        {
            item: 'Bring underserved kids into the luxury car community to present a new view on lifestyle, access, and mentorship.',
        },
        {
            item: 'As an NFT, your Lazy Lamb membership becomes an asset. Your token can be sold or transferred to others at any time. The NFT structure creates a unique new opportunity to try alternative economic models, which will allow us to create a loyal, engaged member community, delivering exceptional and sustainable experiences for our members for the many years to come.',
        },
    ],


    btn: 'Join the Whitelist',
    link: 'https://whitelist.lazylamb.com/',
    img: Img,
};

const Why = () => {
    return <Columns items={CONTENT} />;
};

export default Why;
