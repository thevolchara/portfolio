import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg";
import {useNavigate} from "react-router";
import IPSy1 from "../assets/IPSy-page/IPSy_pic1.jpg";
import IPSy2 from "../assets/IPSy-page/IPSy_pic2.jpg";
import IPSy3 from "../assets/IPSy-page/IPSy_pic3.jpg";
import IPSy4 from "../assets/IPSy-page/IPSy_pic4.jpg";

function PsychoPage() {
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
    return(
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
                <p className='fs64'>«ЯПсихолог»</p>
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
                                <p className='fs20'>Разработать удобный и функциональный интерфейс для личного кабинета
                                    психолога, автоматизирующий учет пациентов, управление записями на сеансы и ведение
                                    данных о терапии. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Решение</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Интерфейс разработан с акцентом на простоту
                                    и эффективность. Включает модуль управления расписанием, базу данных пациентов
                                    с информацией о диагнозах и прогрессе,
                                    а также инструменты для анализа результатов терапии. Реализованы интуитивные
                                    элементы для быстрого редактирования данных
                                    и планирования сеансов.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Система обеспечивает комфортное взаимодействие с данными, минимизирует ручной труд и
                                    повышает организованность работы психолога. Четкий дизайн
                                    и продуманная структура повышает
                                    качество обслуживания пациентов
                                    и освобождает время специалиста
                                    для решения ключевых задач.
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
                        <p className='fs15 color-gray'>ИНСТРУМЕНТЫ</p>
                        <p className='fs20'>Figma</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={IPSy1} alt="IPSy1" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={IPSy2} alt="IPSy2" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={IPSy3} alt="IPSy3" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={IPSy4} alt="IPSy4" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <p className='fs32'>Смотрите также</p>
                <br/>
                <br/>
                <div className='d-flex justify-content-around'
                     style={{minWidth: '1000px', marginLeft: '-50px', cursor: 'pointer'}}>
                    <div style={{maxWidth: '500px'}}
                         onClick={() => {
                             navigate("/portfolio/project/site")
                         }}>
                        <img src={require('../assets/index-page/NoizeH.jpg')} alt='noize'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium'>Сайт-визитка</p>
                        <p className='fs20'>
                            Данный сайт посвящен исполнителю Noize MC
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
                        <p className='fs24Medium'>''ВМесте''</p>
                        <p className='fs20'>
                            Приложение, которое объединяет все события города
                            в одном месте
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PsychoPage;