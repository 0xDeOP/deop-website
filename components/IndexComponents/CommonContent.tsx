import React from 'react';
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

import nft_bg1 from '../../styles/images/nft-bg-1.png'
import nft_bg2 from '../../styles/images/nft-bg-2.png'

export default function CommonContent() {
    return (
        <div className="text-wrapper pt-75 pb-75 bg-lightgreen">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-9 col-lg-12 text-center">
                        <h3 className="display1-size text-gray-900 rajdhani-600 mb-0">The project that inspired the</h3>
                        <div className="d-flex flex-row gap-4 justify-content-center">
                            <h3 className="display1-size text-gray-900 rajdhani-600 mb-0">modern CryptoArt</h3>
                            <OwlCarousel
                                className="owl-theme ovh nft-bg-fade w-200"
                                loop
                                items={1}
                                margin={10}
                                autoplay={true}
                                dots={false}
                                autoplaySpeed={1000}
                                animateOut={'fadeOut'}
                            >
                                <div className="item d-flex gap-2">
                                    <Image src={nft_bg1} alt={"nft"} className={"h-76 w-250"}/>
                                </div>
                                <div className="item d-flex gap-2">
                                    <Image src={nft_bg2} alt={"nft"} className={"h-76 w-250"}/>
                                </div>
                            </OwlCarousel>
                        </div>
                        <h3 className="display1-size text-gray-900 rajdhani-600">CryptoPunks are one of the earliest and
                            most iconic examples of "Non-Fungible Tokens” minted on <span
                                className="bg-image-contain bg-no-repeat bg-image-center"
                                style={{backgroundImage: 'url(text-bg-1.png)'}}>Ethereum,</span> and were the
                            inspiration</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
