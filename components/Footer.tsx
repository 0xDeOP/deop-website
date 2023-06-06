export default function Footer() {
    return (
        <div className="footer-wrapper pt-75 bg-dark2">
            <div className="container">
                <div className="row row-cols-md-2 row-cols-sm-2 row-cols-se-2 pb-4 row-cols-lg-4 border-bottom border-dark">
                    <div className="col ps-md-5 mb-4">
                        <h4 className="text-white h6 rajdhani-700 mb-4 mt-1 text-uppercase">Products</h4>
                        <ul className="list-group gap-2">
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="#" className="rajdhani-600 text-gray-400 font-sm">BRC20 Marketplace (soon)</a>
                            </li>
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="#" className="rajdhani-600 text-gray-400 font-sm">DeOP Wallet (soon)</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col ps-md-5 mb-4">
                        <h4 className="text-white h6 rajdhani-700 mb-4 mt-1 text-uppercase">ABOUT</h4>
                        <ul className="list-group gap-2">
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="#" className="rajdhani-600 text-gray-400 font-sm">Terms of use</a>
                            </li>
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="#" className="rajdhani-600 text-gray-400 font-sm">Privacy Policy</a>
                            </li>
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="#" className="rajdhani-600 text-gray-400 font-sm">Disclaimer</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col ps-md-5 mb-4">
                        <h4 className="text-white h6 rajdhani-700 mb-4 mt-1 text-uppercase">CONTACT</h4>
                        <ul className="list-group gap-2">
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="mailto:hello@deop.pro"
                                   className="rajdhani-600 text-gray-400 font-sm">hello@deop.pro</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col ps-md-5 mb-4">
                        <h4 className="text-white h6 rajdhani-700 mb-4 mt-1 text-uppercase">Social</h4>
                        <ul className="list-group gap-2">
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="https://twitter.com/DeOP_BRC20" target={"blank"}
                                   className="rajdhani-600 text-gray-400 font-sm">Twitter</a></li>
                            <li className="list-group-item bg-transparent border-0 p-0">
                                <a href="https://t.me/deop_brc20" target={"blank"}
                                   className="rajdhani-600 text-gray-400 font-sm">Telegram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-md-4">
                    <div className="col-md-6  text-md-start d-flex align-items-center">
                        <p className=" rajdhani-600 text-gray-400 font-sm mb-0">
                            © 2023 DEOP TEAM
                        </p>
                    </div>

                </div>
                <div className="row pt-3 pb-md-5 pb-3">
                </div>
            </div>
        </div>
    )
}
