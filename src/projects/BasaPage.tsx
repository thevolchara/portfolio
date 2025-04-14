import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg";
import {useNavigate} from "react-router";
import baza1 from "../assets/baza-page/Baza_pic1.jpg";
import baza2 from "../assets/baza-page/Baza_pic2.jpg";

function BasaPage() {
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
                <p className='fs64'>«БАЗА»</p>
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
                                <p className='fs20'>Разработать сайт для компании «БАЗА», которая занимается дизайном
                                    интерьеров и отделочным ремонтом. Цель — создать удобный ресурс для связи с
                                    клиентами, демонстрации услуг и портфолио. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Решение</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Сайт создан на HTML, CSS и JavaScript. Все страницы связаны для удобной навигации.
                                    На каждой странице доступны формы для заявок или вопросов. Дизайн выполнен в
                                    минималистичном стиле, подчеркивающем экологичность. Реализованы интерактивные
                                    элементы: фильтры портфолио, раскрывающиеся блоки с часто задаваемыми вопросами и
                                    динамическая форма расчета стоимости проекта.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Создан функциональный ресурс, решающий задачи коммуникации с клиентами. Сайт
                                    предоставляет информацию об услугах
                                    и отражает преимущества компании.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='vertical-line' style={{marginRight: '20px'}}></div>
                    <div>
                        <p className='fs15 color-gray'>ГОД РЕАЛИЗАЦИИ</p>
                        <p className='fs20'>2023</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ТЕХНОЛОГИИ</p>
                        <p className='fs20'>HTML, CSS, JavaScript</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ИНСТРУМЕНТЫ</p>
                        <p className='fs20'>Figma, Adobe Dreamweaver</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={baza1} alt="baza1" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <div style={rowStyle}>
                <img src={baza2} alt="baza2" style={{minWidth: '100%', marginLeft: '-20px'}}/>
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
                             navigate("/portfolio/project/together")
                         }}>
                        <img src={require('../assets/index-page/VMesteH.jpg')} alt='bazaHVm'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium'>''ВМесте''</p>
                        <p className='fs20'>
                            Приложение, которое объединяет все события города
                            в одном месте
                        </p>
                    </div>
                    <div style={{maxWidth: '500px', cursor: 'pointer'}}
                         onClick={() => {
                             navigate("/portfolio/project/shov")
                         }}>
                        <img src={require('../assets/index-page/ShovH.jpg')} alt='ShovH'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium'>''Шов+Шов''</p>
                        <p className='fs20'>
                            Адаптивный сайт для школы шитья
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasaPage;