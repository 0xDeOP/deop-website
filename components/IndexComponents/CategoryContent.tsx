import React from 'react';

export default function CategoryContent() {
    return (
        <div className="nft-wrapper pt-75 pb-75 dark-bg" style={{background: '#F391CF'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="display1-size dark-text lh-2 text-gray-900 rajdhani-600">
                            Our upcoming products
                        </h2>
                    </div>
                    <div className="col-md-12 mt-2 mb-5 portfolio-tab">
                        <ul className="nft-wrapper flex-row d-md-flex mt-4 gap-2" id="filters">
                            <li className="p-0 filter"
                                data-filter=".game, .trading, .music, .meme, .art, .domain"><span>All</span></li>
                            <li className="p-0 filter" data-filter=".game"><span>P2P Marketplace</span></li>
                            <li className="p-0 filter" data-filter=".trading"><span>Wallet</span></li>
                            <li className="p-0 filter" data-filter=".music"><span>Chart Tool</span></li>
                            <li className="p-0 filter" data-filter=".art"><span>NFT</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
