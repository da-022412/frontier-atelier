import faqStyles from './Faqs.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import Accordion from './Accordion';
import BodyText from '../BodyText';

const CONTENT = {
    faqs: [
        {
            title: 'What is Lazy Lamb?',
            copy: 'Lazy Lamb is the first virtual exotic car club and marketplace where membership is purchased through an NFT and owned by the token-holder.<ul><li>Owning a token grants instant membership and access to club benefits.</li><li>No yearly membership dues or reoccurring fees. Ever.</li><li>Members can sell, trade, or even lease their tokens at any time, turning their membership into a valuable asset.</li><li>Designed for utility, member-value, and engagement.</li>',
        },
        {
            title: 'How do I become a member?',
            copy: 'Lazy Lamb membership NFTs can only be purchased with Ether (ETH), the cryptocurrency of Ethereum. The price of a Token is one ETH.',
        },
        {
            title: 'What exactly is an NFT?',
            copy: 'NFTs are tokens that we can use to represent ownership of unique and non-interchangeable items. They allow us to represent ownership of things like art, collectibles, real estate, and other unique items, like a Lazy Lamb Membership. NFTs can only have one official owner at a time and are secured by the Ethereum blockchain, which establishes a verifiable and traceable permanent record of ownership for each item.',
        },
        {
            title: 'I’m new to this NFT stuff… How can I buy this thing?',
            copy: 'Here are the step-by-step needed to buy your Lazy Lamb NFT:<ul><li><b>Step 1: Create an Ethereum-compatible crypto wallet</b> We recommend using <a href="https://coinbase.com/wallet" target="_blank">Coinbase Wallet</a> or <a href="https://metamask.io" target="_blank">Metamask</a></li><li><b>Step 2: Buy some ETH</b> Ether (ETH) is the cryptocurrency of Ethereum. Your wallet should give you options to buy ETH directly from their app. The price of a Lazy Lamb Token is 1 ETH.<br>Alternatively, you might buy it directly from an exchange like <a href="https://coinbase.com" target="_blank">Coinbase</a>, <a href="https://binance.com" target="_blank">Binance</a>, or <a href="https://crypto.com" target="_blank">Crypto.com</a>, but you will need to transfer the ETH to your wallet, which will incur additional fees.</li><li><b>Step 3:</b> Connect your wallet and buy a Lazy Lamb Membership Token.</li></ul>',
        },
        {
            title: 'Is there an age requirement to own a token?',
            copy: 'Yes, all token holders must be at least 18 years of age.',
        },
        {
            title: 'How long is the membership valid for?',
            copy: 'Your membership will remain valid as long as you are a token holder.',
        },
        {
            title: 'Are there any membership fees or dues?',
            copy: 'No. Lazy Lamb has no membership dues or reoccurring fees. Some additional (optional) experiences might require additional payment not included with the membership.',
        },
        {
            title: 'How do I participate in the events and experiences?',
            copy: 'Members can access our complete event schedule and request passes online via our private member portal. Event passes are available on a first-come, first-served basis for all active members. Members must verify ownership with the wallet where the Lazy Lamb tokens are stored before attending an event.',
        },
        {
            title: 'Will the events and experiences be available for non-members?',
            copy: 'Nope. Non-members will only have access to Lazy Lamb events if they are a guest of an active member. Members can bring one guest to all parties, meetings, and social events.',
        },

    ],
    more: 'More questions? <a href="https://discord.gg/yYrQd6dzTD" target="_blank">Visit our Discord channel.</a>',
};

const Faqs = () => {
    return (
        <main className={faqStyles.faqs}>
            <Container>
                <div className={`${faqStyles['title-container']}`}>
                    <Heading style='heading-2' level='1'>
                        Faqs
                    </Heading>
                </div>
                <Accordion items={CONTENT.faqs} />
                <div className={`${faqStyles['info-container']}`}>
                    <BodyText>{CONTENT.more}</BodyText>
                </div>
            </Container>
        </main>
    );
};

export default Faqs;
