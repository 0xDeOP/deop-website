import React from 'react';

export default function FeatureContent() {
    return (
        <div className="feature-wrapper pb-100 bg-darkblack style1 posr">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 pb-50 pt-100">
                        <h2 className="display1-size lh-2 text-white rajdhani-500">
                            How does DeOP brings deflation token to Ordinals?
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-div border-dark border-end rounded-6">
                            <img src="box.svg" alt="box" className="ms-n1 mb-4"/>
                            <h2 className="rajdhani-500 h3 mt-2">
                                Launch a BRC-20 marketplace
                            </h2>
                            <p className="pe-3 rajdhani-500 font-sm mb-0">
                                DeOP will use revenue from the marketplace to buy back and burn the supply
                            </p>
                            <i className="bi-arrow-down-right h1 mt-4 text-gray-900 lh-1"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-div border-dark border-end rounded-6">
                            <img src="award.svg" alt="box" className="ms-n1 mb-4"/>
                            <h2 className="rajdhani-500 h3 mt-2">
                                How will we burn $DeOP?
                            </h2>
                            <p className="pe-3 rajdhani-500 font-sm mb-0">
                                We will transfer $DeOP to wallet
                                "bc1pqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq<br/>qqqqqqqqqqqqqqqqqqqqqs5pgpxg"
                                - address with "x=1" key, trap address that is extremely hard to reach. You can view the
                                first burn
                                <a href="https://ordiscan.com/address/bc1pqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs5pgpxg/brc20"
                                   target="_blank"> here</a>
                            </p>
                            <i className="bi-arrow-down-right h1 mt-4 text-gray-900 lh-1"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="feature-div rounded-6">
                            <img src="lock.svg" alt="box" className="ms-n1 mb-4"/>
                            <h2 className="rajdhani-500 h3 mt-2">Develop an ecosystem around BRC-20</h2>
                            <p className="pe-3 rajdhani-500 font-sm mb-0">
                                As part of our strategic plan, we intend to launch a range of additional products such
                                as wallets and chart tools to provide support for BRC-20 tokens. These initiatives aim
                                to enhance our revenue streams and also facilitate the increased burning of DeOP tokens
                            </p>
                            <i className="bi-arrow-down-right h1 mt-4 text-gray-900 lh-1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
