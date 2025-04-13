import logoBlack from './assets/logoBlack.svg'
import HamburgerMenu from "./HamburgerMenu.tsx";
import {useNavigate} from "react-router";

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
            <div style={{marginTop: '20px'}}><HamburgerMenu/></div>
        </div>
    );
}

export default Header;