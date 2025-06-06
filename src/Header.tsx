import logoBlack from './assets/logoBlack.svg'
import {useNavigate} from "react-router";
import HamburgerMenuBlack from "./HamburgerMenuBlack.tsx";

function Header() {
    const navigate = useNavigate();
    return (
        <div className='d-flex justify-content-between' style={{padding: '20px 0'}}>
            <img src={logoBlack} alt='logoBlack'/>
            <div className='d-flex justify-content-between'>
                <p className='fs24 link m-10-20' onClick={() => navigate("/portfolio")}>Главная</p>
                <p className='fs24 link m-10-20' onClick={() => navigate("/portfolio/about")}>Обо мне</p>
                <p className='fs24 link m-10-20' onClick={() => navigate("/portfolio/contacts")}>Контакты</p>
            </div>
            <div style={{marginTop: '20px'}}><HamburgerMenuBlack/></div>
        </div>
    );
}

export default Header;