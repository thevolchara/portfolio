import logoBlack from './assets/logoBlack.svg'
import HamburgerMenu from "./HamburgerMenu.tsx";
function Header(){
    return(
        <div>
            <div className="d-flex justify-content-center">
                <div className='d-flex justify-content-between' style={{margin:'10px', minWidth:'96vw'}}>
                    <img src={logoBlack} alt='logoBlack'/>
                    <div style={{marginTop:'20px'}}><HamburgerMenu/></div>
                </div>
            </div>
            <div style={{minWidth: '96vw'}}>
                <hr/>
            </div>
        </div>
    );
}

export default Header;