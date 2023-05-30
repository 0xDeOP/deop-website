import React from 'react';
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";

const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

import nft_bg1 from '../../styles/images/nft-bg-1.png'
import nft_bg2 from '../../styles/images/nft-bg-2.png'


export default function BannerContent() {
    return (
        <div className="banner-wrapper  pb-250 bg-darkyellow dark-bgimage2 bg-image-center bg-no-repeat">
            <div className="container py-lg-5">
                <div className="row justify-content-center">
                    <div className="col-12 mb-3">
                        <div className="d-flex flex-row gap-4 justify-content-lg-center ">
                            <div className="d-md-block d-none">

                                <OwlCarousel
                                    className="owl-theme ovh nft-bg-fade  w-250 mt-2"
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
                            <h3 className="text-gray-900 dark-text rajdhani-700 ls-1 mb-0 display6-size lh-08">Deflationary</h3>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 ">
                        <h3 className="text-gray-900 dark-text rajdhani-700 ls-1 mb-0 display6-size lh-08">Ordinals</h3>
                    </div>
                    <div className="col-lg-5 col-md-6 mt-xl-3 d-md-block d-none">
                        <p className="lh-32 dark-text text-gray-900 rajdhani-600 mb-0">
                            ☉ Deflationary Ordinals Protocol: The first deflationary protocol on Ordinals.
                        </p>
                        <p className="text-gray-900  dark-text rajdhani-600 mb-0">
                            ☉ DeOP will use revenue from the marketplace to buy back and burn the supply
                        </p>
                    </div>
                    <div className="col-12 mt-3"/>
                    <div className="col-3 d-md-block d-none">
                        <div className="d-flex justify-content-end w-100 mt-3">
                            <figure className="w-60 mb-0">
                                <img src="images/btc-logo.png" alt="avater" className="img-icon-banner w-100"/>
                            </figure>
                            <figure className="w-60 mb-0 ms-n4">
                                <img src="images/ordinals-logo.png" alt="avater" className="img-icon-banner w-100"/>
                            </figure>
                            <figure className="w-60 mb-0 ms-n4">
                                <img src="images/unisat-logo.png" alt="avater" className="img-icon-banner w-100"/>
                            </figure>
                            <figure className="w-60 mb-0 ms-n4">
                                <img src="images/hiro-logo.png" alt="avater" className="img-icon-banner w-100"/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-5 text-md-center"><h3
                        className="text-gray-900 dark-text rajdhani-700 ls-1 mb-0 display6-size lh-08">Protocol</h3>
                    </div>

                    <div className="col-12 d-md-none d-block md-mt-3">
                        <p className="font-md dark-text lh-32 text-gray-900 rajdhani-600 mb-0">
                            Eros donec ac odio
                            tempor
                            orci dapibus ultrices in iaculis. Orci phasellus egestas tellus rutrum tellus.
                        </p>
                    </div>
                    <div className="col-md-4 text-start py-3">
                        <a href="https://unisat.io/market?tick=DeOP&tab=1"
                           target={'_blank'}
                           className="btn btn-lg border-0 text-white rajdhani-600 rounded-6 bg-orange px-5 font-sm text-uppercase">
                            Get DEOP token
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
