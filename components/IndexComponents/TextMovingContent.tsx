import React from 'react';
import dynamic from 'next/dynamic';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(import("react-owl-carousel"), {ssr: false});

export default function TextMovingContent() {
    return (
        <div className="textscroll-wrapper py-4 bg-lightgreen">
            <OwlCarousel
                className="owl-theme ovh h-35 text-scroll"
                autoWidth={true}
                loop={true}
                items={4}
                autoplay={true}
                autoplayTimeout={1500}
                autoplaySpeed={1500}
                autoplayHoverPause={false}
                dots={false}
            >
                <div className="item d-flex gap-2">
                    <h1 className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Service Development</h1>
                    <img src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/>
                </div>

                <div className="item d-flex gap-2">
                    <h1 className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Artists Marketplace</h1>
                    <img src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/>
                </div>

                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Photoghraphy Trend</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Rankings Collection</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Discusson Platform </h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Developer Platform</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Service Development</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Artists Marketplace</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Photoghraphy Trend</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Rankings Collection</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Discusson Platform </h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
                <div className="item d-flex gap-2"><h1
                    className="text-gray-900 h2 lh-32 rajdhani-700 m-0 text-uppercase">Developer Platform</h1><img
                    src="images/icon-8.png" className="w-20 mt-1 h-20" alt="icon"/></div>
            </OwlCarousel>
        </div>

    )
}
