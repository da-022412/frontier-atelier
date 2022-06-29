import Columns from '../Columns';

import Img from '../../assets/images/lazylamb_game.webp';

const CONTENT = {
    title: 'Motorsport Racing Tickets',
    subTitle:
        'Witness the action of the world’s fastest machines in person.',
    
    btn: 'Join the Whitelist',
    link: 'https://whitelist.lazylamb.com/',
    img: Img,
};

const Game = () => {
    return <Columns items={CONTENT} />;
};

export default Game;
