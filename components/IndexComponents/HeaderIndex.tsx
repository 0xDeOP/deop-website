import Auth from "../../components/Auth";
import {useStacks} from "../../providers/StacksProvider";
import {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import Link from "next/link";

export default function HeaderIndex() {

    const router = useRouter()
    const path = router.asPath
    console.log(path)

    return (
        <header className="header-wrapper w-100 position-fixed bg-darkyellow dark-bg3">
            <nav className="navbar navbar-expand-lg navbar-light border-0">
                <div className="container posr">
                    <a className="navbar-brand light-logo" href="index.html">
                        <img src="logo.png" alt="logo"/>
                    </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0" id="navbar-main">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Home</a>
                            </li>

                            <li className="nav-item menu-item-has-children">
                                <a className="nav-link text-white" href="https://unisat.io/brc20/DeOP" target={"blank"}>
                                    DeOP Info
                                </a>
                            </li>
                            <li className="nav-item menu-item-has-children">
                                <a className="nav-link text-white" href="https://unisat.io/market?tick=DeOP"
                                   target={"blank"}>
                                    Trade DeOP
                                </a>
                            </li>

                            <li className="nav-item menu-item-has-children ">
                                <a className="nav-link text-white" href="https://twitter.com/DeOP_BRC20"
                                   target={"blank"}>
                                    Twitter
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="https://t.me/deop_brc20" target={"blank"}>
                                    Telegram
                                </a>
                            </li>
                        </ul>
                        <a href="#"
                           className="btn btn-lg menu-btn border-0 text-white rajdhani-600 rounded-6 bg-gray-900 px-4 font-sm text-uppercase"
                           data-bs-toggle="modal" data-bs-target="#connetwallet"> Connect Wallet</a>

                        <a href="#" data-switch-theme
                           className="ms-2 menu-btn btn-toggle-dark btn btn-icon btn-round"><i
                            className="bi-brightness-low font-xl m-0"/></a>
                    </div>
                    <a href="#"
                       className="btn btn-md header-btn text-gray-800 rajdhani-700 rounded-6 bg-transparent border-dark border-2 px-4 font-sm text-uppercase dark-text"
                       data-bs-toggle="modal" data-bs-target="#connetwallet">
                        Try App (soon)
                    </a>

                    {/*<a href="#" data-switch-theme className="ms-2 header-btn btn-toggle-dark btn btn-icon btn-round"><i*/}
                    {/*    className="bi-brightness-low font-xl m-0"/></a>*/}
                </div>
            </nav>

            <div className="modal fade show" id="connetwallet" aria-hidden="true" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title font-lg rajdhani-700 text-gray-900 dark-text">Connect your
                                wallet</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div
                            className="modal-body border-top border-bottom p-3 d-flex flex-column align-items-center justify-content-center">
                            <figure className="mb-3"><img src="https://via.placeholder.com/100x100.png" alt="icon"/>
                            </figure>
                            <p className="px-md-4 text-center rajdhani-600 lh-22 text-gray-900 dark-text">Before getting
                                started, watch this short video to learn about your Secret Recovery Phrase and how to
                                keep your wallet safe.</p>
                        </div>
                        <div className="modal-footer d-flex">
                            <div className="flex-grow-1 mb-2">
                                <button type="button"
                                        className="btn btn-block btn-lg text-uppercase rajdhani-600 lh-28 py-2 btn-dark"
                                        data-bs-dismiss="modal">Skip
                                </button>
                            </div>
                            <div className="flex-grow-1 mb-2">
                                <button type="button" id="connectButton"
                                        className="btn btn-block btn-lg bg-current text-uppercase rajdhani-600 lh-28 py-2 text-gray-900 posr">Connet
                                    Now
                                    <span id="loading"><span>•</span><span>•</span><span>•</span></span>
                                </button>
                            </div>
                            <div id="walletID"
                                 className="rajdhanirajdhani-600 lh-28 text-warning m-0 text-center w-100"/>
                            <div id="mobileDeviceWarning"
                                 className="rajdhanirajdhani-600 lh-22 text-warning m-0 text-center w-100">If you are on
                                a mobile phone, please use MetaMask application's browser to connect.
                            </div>
                            <div id="installAlert"
                                 className="rajdhanirajdhani-600 lh-28 text-warning m-0 text-center w-100">Please
                                refresh your browser after installing the Metamask plugin
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}
