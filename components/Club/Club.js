import MultiColumn from '../MultiColumn';

const CONTENT = {
    title: 'The Club',
    content: [
        {
            heading: 'The Community',
            copy: 'Lazy Lamb members are shaped by car culture: its history, its technology, its lifestyle, and most importantly, the thrill of the drive. While our car knowledge is the common bond, it is the passions and pursuits of each Member that makes Lazy Lamb so unique, creating the perfect environment for networking and socializing.',
        },
        {
            heading: 'Physical Events & Pop-ups',
            copy: 'Join this exclusive community for physical & virtual events, including parties, car meetups, charity drives, and other exclusive events that bring our Members together to create a truly special atmosphere and forge friendships.',
        },
        {
            heading: 'Driving Experiences',
            copy: 'Enjoy a wide variety of car-themed events, such as track days, automotive premiers, learning classes, car drives, and other member-only curated experiences that resonate with the automotive enthusiast inside all of us.',
        },
    ],
};

const Club = () => {
    return <MultiColumn items={CONTENT} />;
};

export default Club;
