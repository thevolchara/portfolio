import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg";
import {useNavigate} from "react-router";
import VMeste1 from "../assets/VMeste-page/VMeste_pic1.jpg";
import VMeste2 from "../assets/VMeste-page/VMeste_pic2.jpg";
import VMeste3 from "../assets/VMeste-page/VMeste_pic3.jpg";
import VMeste4 from "../assets/VMeste-page/VMeste_pic4.jpg";

function TogetherPage() {
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
                <p className='fs64'>«ВМесте»</p>
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
                                <p className='fs20'>Создать мобильное приложение для Южно-Сахалинска с афишей
                                    мероприятий, бронированием билетов и возможностью продвижения событий. Цель —
                                    развитие туризма и городской культуры. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Решение</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Минималистичное приложение с поиском событий, онлайн-оплатой и созданием
                                    мероприятий. Учтены потребности туристов
                                    и жителей. Монетизация через сервисные
                                    сборы и рекламу.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Удобный сервис, объединяющий организаторов
                                    и гостей событий. Упрощает поиск мероприятий, повышает вовлечённость в культурную
                                    жизнь города.
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
                <img src={VMeste1} alt="VMeste1" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between'>
                    <p className='fs42Medium' style={{minWidth: '350px'}}>Дизайн процесс</p>
                    <p className='fs20' style={{maxWidth: '450px'}}>
                        Дизайн-процесс Вместе включал в себя исследование, структурно-функциональный анализ,
                        разработку вайрфреймов и создание дизайн-концепции. Итоговый этап – UI-кит, спецификации
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <img src={VMeste2} alt="VMeste2" style={{minWidth: '100%', marginLeft: '-5px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={VMeste3} alt="VMeste3" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={VMeste4} alt="VMeste4" style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between' style={{maxWidth: '1300px'}}>
                    <p className='fs20 bordered'>Участники</p>
                    <div style={{maxWidth: '400px'}}>
                        <p className='fs15 color-gray'>РУКОВОДИТЕЛЬ ПРОЕКТА</p>
                        <p className='fs20'>Алёна Кононова — общая координация
                            и контроль исполнения.</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ВИЗУАЛИЗАТОР</p>
                        <p className='fs20'>
                            Ли Лолита и Андрей Туров — разработка UI/UX дизайна, визуальной концепции
                            и интерфейсов.
                        </p>
                    </div>
                    <div style={{maxWidth: '400px'}}>
                        <p className='fs15 color-gray'>АРХИВАТОР</p>
                        <p className='fs20'>Анастасия Визженкова — сбор и подготовка материалов.</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ИНТЕЛЛЕКТУАЛ</p>
                        <p className='fs20'>
                            Александр Лукин и Ян Кузнецов — исследование аудитории, анализ рынка
                            и проектирование функциональной архитектуры.
                        </p>
                    </div>
                </div>
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
                             navigate("/portfolio/project/psycho")
                         }}>
                        <img src={require('../assets/index-page/IPsyH.jpg')} alt='bazaH'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium'>''ЯПсихолог''</p>
                        <p className='fs20'>
                            Личный кабинет психолога, в котором осуществляется
                            функция учета пациентов
                        </p>
                    </div>
                    <div style={{maxWidth: '500px', cursor: 'pointer'}}
                         onClick={() => {
                             navigate("/portfolio/project/baza")
                         }}>
                        <img src={require('../assets/index-page/BazaH.jpg')} alt='bazaH'
                             style={{maxWidth: '550px', borderRadius: '20px'}}/>
                        <br/>
                        <br/>
                        <p className='fs24Medium'>''БАЗА''</p>
                        <p className='fs20'>
                            Портфолио компании, которая занимается созданием
                            дизайна интерьера
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TogetherPage;