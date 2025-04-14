import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import NoizePage from "./projects/NoizePage.tsx";
import FooterBlack from "./FooterBlack.tsx";

const useReactPath = () => {
    const [path, setPath] = useState(window.location.pathname);
    const listenToPopstate = () => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };
    useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);
    return path;
};

function BlackApp() {
    const [backImage, setBackImage] = useState({backgroundImage: ""});
    const path = useReactPath();
    useEffect(() => {
        let isLight = window.location.pathname !== "/portfolio/project/site";
        setBackImage({backgroundImage: isLight ? `url(${require('./assets/pattern/Light_theme.jpg')})` : `url(${require('./assets/pattern/Dark_theme.jpg')})`});
    }, [path]);
    const hrStyle = {
        height: '2px',
        borderWidth: '0',
        marginTop: '0',
        marginBottom: '2px',
        marginLeft: '-12px',
        marginRight: '-12px',
        backgroundColor: 'black'
    }
    return (
        <>
            <div style={{backgroundColor: '#1E1E1E'}}>
                <div style={backImage}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col col-12' style={{backgroundColor: '#1E1E1E'}}>
                                <NoizePage/>
                            </div>
                            <div style={{backgroundColor: 'transparent', height: '100px'}}></div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <hr style={hrStyle}/>
                    <FooterBlack/>
                </div>
            </div>
        </>
    )
}

export default BlackApp
