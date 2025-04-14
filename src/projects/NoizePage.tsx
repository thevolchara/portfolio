import arrow from "../assets/icon_and_logo/arrow_white.svg";
import {useNavigate} from "react-router";
import noize from "../assets/noize-page/noize_pic1.jpg";
import HeaderBlack from "../HeaderBlack.tsx";

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
                <HeaderBlack/>
            </div>
            <hr style={hrStyle}/>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between' style={{maxWidth: '250px'}}
                     onClick={() => navigate(mainPath)}>
                    <img src={arrow} alt='arrow'/>
                    <p className='fs24 color-white' style={{marginTop: '15px', cursor: 'pointer'}}>Ко всем работам</p>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <p className='fs64 color-white'>Сайт-визитка</p>
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
                            <p className='fs20 bordered color-white'>Задача</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20 color-white'>Создать сайт для музыкального исполнителя Noize MC,
                                    включающий
                                    аудиоплеер, расписание концертов и медиаконтент. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered color-white'>Решение</p>
                            <div style={{marginRight: '20px color-white'}}>
                                <p className='fs20 color-white'>
                                    Адаптивный сайт с использованием HTML, CSS
                                    и JavaScript, где добавлены функциональный аудиоплеер на базе тега
                                    и отображение расписания.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered color-white'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20 color-white'>
                                    Современный сайт-визитка, предоставляющий доступ к музыке, видео, фотографиям
                                    и актуальной информации о выступлениях.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='vertical-line' style={{marginRight: '20px'}}></div>
                    <div>
                        <p className='fs15 color-white'>ГОД РЕАЛИЗАЦИИ</p>
                        <p className='fs20 color-white'>2024</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-white'>ТЕХНОЛОГИИ</p>
                        <p className='fs20 color-white'>HTML, CSS, JavaScript</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-white'>ИНСТРУМЕНТЫ</p>
                        <p className='fs20 color-white'>Figma, JB Rider</p>
                    </div>
                </div>
            </div>
            <div style={rowStyle}>
                <img src={noize} alt="noize" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <p className='fs32 color-white'>Смотрите также</p>
                <br/>
                <br/>
                <div className='d-flex justify-content-around'
                     style={{minWidth: '1000px', marginLeft: '-50px', cursor: 'pointer'}}>
                    <div style={{maxWidth: '500px'}}
                         onClick={() => {
                             navigate("/portfolio/project/psycho")
                         }}>
                        <img src={require('../assets/index-page/IPsyH.jpg')} alt='bazaH'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium color-white'>''ЯПсихолог''</p>
                        <p className='fs20 color-white'>
                            Личный кабинет психолога, в котором осуществляется
                            функция учета пациентов
                        </p>
                    </div>
                    <div style={{maxWidth: '500px', cursor: 'pointer'}}
                         onClick={() => {
                             navigate("/portfolio/project/together")
                         }}>
                        <img src={require('../assets/index-page/VMesteH.jpg')} alt='vmeste'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium color-white'>''ВМесте''</p>
                        <p className='fs20 color-white'>
                            Приложение, которое объединяет все события города
                            в одном месте
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default NoizePage;