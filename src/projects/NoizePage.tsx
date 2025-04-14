import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg";
import {useNavigate} from "react-router";
import noize from "../assets/noize-page/noize_pic1.jpg";

function NoizePage() {
    const navigate = useNavigate();
    const mainPath = "/portfolio";
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
    return (
        <div>
            <div style={rowStyle}>
                <Header/>
            </div>
            <hr style={hrStyle}/>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between' style={{maxWidth: '250px'}}
                     onClick={() => navigate(mainPath)}>
                    <img src={arrow} alt='arrow'/>
                    <p className='fs24' style={{marginTop: '15px', cursor: 'pointer'}}>Ко всем работам</p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <p className='fs64'>Сайт-визитка</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between' style={{maxWidth: '750px'}}>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Задача</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>Создать сайт для музыкального исполнителя Noize MC, включающий
                                    аудиоплеер, расписание концертов и медиаконтент. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Решение</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Адаптивный сайт с использованием HTML, CSS
                                    и JavaScript, где добавлены функциональный аудиоплеер на базе тега
                                    и отображение расписания.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Современный сайт-визитка, предоставляющий доступ к музыке, видео, фотографиям
                                    и актуальной информации о выступлениях.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='vertical-line' style={{marginRight: '20px'}}></div>
                    <div>
                        <p className='fs15 color-gray'>ГОД РЕАЛИЗАЦИИ</p>
                        <p className='fs20'>2024</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ТЕХНОЛОГИИ</p>
                        <p className='fs20'>HTML, CSS, JavaScript</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ИНСТРУМЕНТЫ</p>
                        <p className='fs20'>Figma, JB Rider</p>
                    </div>
                </div>
            </div>
            <div style={rowStyle}>
                <img src={noize} alt="noize" style={{maxHeight: '136px', marginRight: '50px'}}/>
            </div>
        </div>
);

}
export default NoizePage;