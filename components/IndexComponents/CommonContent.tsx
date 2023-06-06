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
                        <h3 className="display1-size text-gray-900 rajdhani-600 mb-0">
                            The DeOP team is dedicated to maximizing the utility of BRC-20 tokens within the Ordinals
                            ecosystem. Our efforts will focus on providing a comprehensive range of utilities that align
                            with the principles of Bitcoin and the future of DeFi on the

                        </h3>

                        <h3 className="display1-size text-gray-900 rajdhani-600">
                            <span className="bg-image-contain bg-no-repeat bg-image-center"
                                  style={{backgroundImage: 'url(text-bg-1.png)'}}>Bitcoin</span> network
                        </h3>

                        <h3 className="display1-size text-gray-900 rajdhani-600 mb-0">
                            Introducing deflationary tokens stands out as a highly innovative mechanism aimed at
                            combating inflation and fostering sustainable economic growth. We firmly believe that such
                            initiatives will contribute to the overall advancement of the
                        </h3>

                        <h3 className="display1-size text-gray-900 rajdhani-600">
                            <span className="bg-image-contain bg-no-repeat bg-image-center"
                                  style={{backgroundImage: 'url(text-bg-1.png)'}}> BRC-20 </span> ecosystem
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
