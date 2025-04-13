import Alena from "./assets/index-page/Alena.jpg";
import Projects from "./projects/Projects.tsx";
import HeaderNoHamburger from "./HeaderNoHamburger.tsx";
function MainPage() {
    const hrStyle = {
        height: '2px',
        borderWidth: '0',
        marginTop: '0',
        marginBottom: '2px',
        marginLeft: '-12px',
        marginRight: '-12px',
        backgroundColor: 'black'
    }

    const rowStyle = {
        padding: '0 12px'
    }
    
    return(
        <div>
            <div style={rowStyle}>
                <HeaderNoHamburger/>
            </div>
            <hr style={hrStyle}/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-center' style={{margin: '100px'}}>
                    <div className='d-flex justify-content-around' style={{maxWidth: '750px'}}>
                        <img src={Alena} alt="Alena" style={{maxHeight: '136px', marginRight: '50px'}}/>
                        <div>
                            <p className='fs64'>Привет,</p>
                            <p className='fs64' style={{marginTop: '-10px'}}>меня зовут Алёна</p>
                            <p className='fs42' style={{marginTop: '10px'}}>Я продуктовый дизайнер</p>
                            <p className='fs42' style={{marginTop: '10px'}}>с фокусом на UX/UI </p>
                            <p className='fs42' style={{marginTop: '10px'}}>и любовью к эстетике</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <hr style={hrStyle}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-4'>
                            <p className='fs42Medium'>Проекты</p>
                            <p className='fs24'>Учебные</p>
                        </div>
                        <div className='col col-8'>
                            <Projects/>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default MainPage;