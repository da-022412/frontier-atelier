import Image from 'next/image';

import lamboStyles from './Lambo.module.scss';

import Container from '../Container';
import Heading from '../Heading';
import BodyText from '../BodyText';

import LamboImg from '../../assets/images/4lambos.webp';
import LamboBroward3Img from '../../assets/images/lambobroward3.webp';

const CONTENT = {
    list: '<span style="font-size:1.3rem;"><b><span style="color:#ffea0e;">40%</span> Lamborghini Urus<br><span style="color:#ffea0e;">60%</span> Lamborghini Huracán<br><span style="color:#ffea0e;">80%</span> Lamborghini Usus<br><span style="color:#ffea0e;">100%</span> Lamborghini Huracán</b></span>',
};

const Lambo = () => {
    return (
        <Container>
            <div className={`${lamboStyles['lambo-columns']}`}>
                <div className={`${lamboStyles['lambo-img-container']}`}>

                    <figure className={`${lamboStyles['LamboBroward3Img-img']}`}>
                        <Image
                            src={LamboBroward3Img}
                            height={64}
                            width={252}
                            alt='Lamborghini Broward - Official Supply Partner'
                        />
                    </figure>



                    <figure className={`${lamboStyles['lambo-img']}`}>
                        <Image
                            src={LamboImg}
                            height={475}
                            width={556}
                            alt='4 Lambos'
                        />
                    </figure>
                </div>
                <div className={`${lamboStyles['lambo-content']}`}>
                    <Heading style='heading-2' level='2'>
                        The Quad Lambo NFT Sweepstakes
                    </Heading>
                    <BodyText>
                        Enjoy the high-end lifestyle with the ultimate symbol of
                        prestige and quality.
                    </BodyText>

                    <BodyText>
                        LazyLamb is giving back to the community while democratizing access to luxury. 
                        We’re giving away four very special NFTs that are redeemable for real Lamborghini vehicles, With each sweepstake unlocked by hitting one of our roadmap percentage targets:
                    </BodyText>
                    <BodyText>{CONTENT.list}</BodyText>

                    <BodyText>
                        After the membership tokens are sold out, we’ll give another Lamborghini car for every 
                        4,000 ETH in trading volume to continue adding value and sustaining a high floor price. 
                    </BodyText>

                    <BodyText>
                        Every Lamb in the collection is automatically entered for chance to win!
                        Winners will be selected from a random sweepstakes drawing on Chainlink with 100% transparency.
                    </BodyText>
                </div>
            </div>
        </Container>
    );

};

export default Lambo;
