import { AppConfig, showConnect, UserData, UserSession } from "@stacks/connect";
import { useEffect, useState } from "react";
import SecondaryButton from "./SecondaryButton";
import { appDetails } from "../lib/constants";
import Link from "next/link";
import Swal from 'sweetalert2'
// import { useStacks } from "../providers/StacksProvider";

export default function Auth() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const address = userData?.profile?.stxAddress?.testnet

  const appConfig = new AppConfig(['store_write'])
  const userSession = new UserSession({ appConfig });
  const [network, setNetwork] = useState('testnet')

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      // setLoggedIn(true);
      setUserData(userSession.loadUserData());
    }
    getNetworkPaydii()
  }, []);

  const handleLogIn = async () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  }

  const getNetworkPaydii = () => {
    let network = localStorage.getItem('NETWORK_PAYDII')
    if(network == 'mainnet') {
      setNetwork('mainnet')
    } 
  }

  const logUserOut = async () => {
    userSession.signUserOut();
    window.location.reload();
  }

  const handleChangeNetwork = (network:string) => {
    localStorage.setItem('NETWORK_PAYDII', network)

    Swal.fire({
      title: '<strong>Switch network</u></strong>',
      icon: 'info',
      html: `
          <div style="font-size:13px">You just switched network to <span class="text-success">` +  network +  `</span>. 
          Please switch the network on your wallet to <span class="text-success">` + network +  `</span> according to the instructions below</div>
          <div>
            <img width="80%" style="border:1px solid lightgrey; margin: 20px auto 0px auto" src="https://i.im.ge/2022/08/24/O5lvVq.Screenshot-at-Aug-24-13-21-21.png"></img>
          </div>
      `,
        
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> I understand!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      
    }).then((result) => {
      userSession.signUserOut();
      window.location.href ='/'
    })

    
  }

  const truncateAddress = (address:string) => {
    if(address) {
      let p_1 =  address.slice(0,8)
      let p_2 = address.slice(address.length - 5, address.length)
      return p_1 + '...' + p_2
    }
  }

  const renderChangeNetwork = () => {
    return (
      <li className="nav-item dropdown d-none d-lg-block address-logined mr-2 network-main">
      <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split text-address-login" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false"> 
        <span style={{textTransform: 'capitalize'}}>{network}</span>
        </a>
      <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
        <div className="dropdown-item preview-item" onClick={(e) => {e.preventDefault(); handleChangeNetwork('mainnet')}}>
            Mainnet
        </div>
        <div className="dropdown-item preview-item" onClick={(e) => {e.preventDefault(); handleChangeNetwork('testnet')}}>
          Testnet
        </div>
      </div>
    </li>
    )
  }

  if (address) {
    return (
      <div className="d-flex"> 
        {renderChangeNetwork()}
        <li className="nav-item dropdown d-none d-lg-block address-logined">
          <a className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split text-address-login" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false"> 
          {truncateAddress(address)}
           </a>
          <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">

            <Link href={'/dashboard'}>
            <div className="dropdown-item preview-item">
                <i className="dropdown-item-icon mdi mdi-view-dashboard text-primary me-2" /> 
                Dashboard
            </div>
            </Link>

            <div className="dropdown-item preview-item" onClick={handleLogIn}>
                <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2" /> 
                Change Account
            </div>
            <div className="dropdown-item preview-item" onClick={logUserOut}>
            <i className="dropdown-item-icon mdi mdi-power text-primary me-2" />
              Sign Out
            </div>
           
          </div>
        </li>
      </div>
    )
  } else {
    return (
      // <SecondaryButton type="button" onClick={handleLogIn}></SecondaryButton>
      <div className="d-flex">
        {renderChangeNetwork()}
        <button type="button" className="btn btn-outline-info" onClick={handleLogIn}>Connect Wallet</button>
      </div>
    )
  }
}