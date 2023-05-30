import React from 'react';

export default function CategoryContent() {
    return (
        <div className="nft-wrapper pt-75 pb-75 dark-bg" style={{background: '#F391CF'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="display1-size dark-text lh-2 text-gray-900 rajdhani-600">
                            We are inspired to reach even greater heights
                        </h2>
                    </div>
                    <div className="col-md-3 text-end ">
                        <img src="round-text-2.png" alt="round"
                             className="w-110 d-none d-md-block ms-auto"/>
                    </div>
                    <div className="col-md-12 mt-2 mb-5 portfolio-tab">
                        <ul className="nft-wrapper flex-row d-md-flex mt-4 gap-2" id="filters">
                            <li className="p-0 filter"
                                data-filter=".game, .trading, .music, .meme, .art, .domain"><span>All</span></li>
                            <li className="p-0 filter" data-filter=".game"><span>Games</span></li>
                            <li className="p-0 filter" data-filter=".trading"><span>Trading</span></li>
                            <li className="p-0 filter" data-filter=".music"><span>Music</span></li>
                            <li className="p-0 filter" data-filter=".art"><span>Art</span></li>
                            <li className="p-0 filter" data-filter=".domain"><span>Domain</span></li>
                            <li className="p-0 filter" data-filter=".meme"><span>Meme</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    )
}
