import Columns from './Columns';

import ImgOne from '../../assets/images/lazy-lamb-01.webp';
import ImgTwo from '../../assets/images/lazy-lamb-02.webp';
import ImgThree from '../../assets/images/lazy-lamb-03.webp';
import ImgFour from '../../assets/images/lazy-lamb-04.webp';
import ImgFive from '../../assets/images/lazy-lamb-05.webp';
import ImgSix from '../../assets/images/lazy-lamb-06.webp';

const CONTENT = {
    title: 'The Lambs',
    copy: [
        {
            text: 'In addition to the membership benefits, Each Lazy Lamb NFT also includes a unique digital collectible, officially owned by the token holder. Each Lamb artwork is unique, and no two are the same (And some are very, very special...).', 
        },
        {
            text: 'The collection includes 10,000 unique collectibles with multiple traits, including different supercar models, colors, accessories, expressions, clothing, and much more.',
        },
        {
            text: 'The complete collection is stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. <a href="#">View our provenance record.</a>',
        },
    ],
    slide: [
        {
            img: ImgOne,
        },
        {
            img: ImgTwo,
        },
        {
            img: ImgThree,
        },
        {
            img: ImgFour,
        },
        {
            img: ImgFive,
        },
        {
            img: ImgSix,
        },
    ],
};

const Lambs = () => {
    return <Columns items={CONTENT} />;
};

export default Lambs;
