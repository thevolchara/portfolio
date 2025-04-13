import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg"
import pic1 from "../assets/shov-shov-page/shov_pic1.jpg"
import pic2 from "../assets/shov-shov-page/shov_pic2.jpg"
import pic3 from "../assets/shov-shov-page/shov_pic3.jpg"
import pic4 from "../assets/shov-shov-page/shov_pic4.jpg"
import {useNavigate} from "react-router";

function ShovPage() {
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
                <p className='fs64'>Шов+Шов</p>
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
                                <p className='fs20'>Разработать сайт для школы шитья "Шов+Шов", объединяющий информацию
                                    о курсах, портфолио студентов и мероприятиях. </p>
                                <p className='fs20'>Основная цель – привлечение новых студентов и демонстрация
                                    возможностей школы. </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Решение</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Создан многостраничный сайт с семью разделами. Включает каталог курсов
                                    с фильтрацией, галерею работ студентов
                                    и анонсы мероприятий. Специальные разделы посвящены косплею и профессиональной
                                    подготовке.
                                    Адаптивный дизайн обеспечивает удобный просмотр на всех устройствах.
                                </p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='fs20 bordered'>Результат</p>
                            <div style={{marginRight: '20px'}}>
                                <p className='fs20'>
                                    Функциональный сайт, который служит визитной карточкой школы, каталогом курсов
                                    и площадкой для демонстрации работ студентов. Четкая структура помогает посетителям
                                    быстро находить нужную информацию.
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
            <br/>
            <div style={rowStyle}>
                <img src={pic1} alt='pic1' style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <div className='d-flex justify-content-between'>
                    <p className='fs42Medium' style={{minWidth: '350px'}}>Дизайн процесс</p>
                    <p className='fs20' style={{maxWidth: '450px'}}>
                        Дизайн-процесс Шов+Шов включал в себя исследование,
                        структурно-функциональный анализ, разработку вайрфреймов и создание дизайн-концепции. Итоговый
                        этап – UI-кит, создание мобильной версии сайта.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <img src={pic2} alt='pic2' style={{minWidth: '100%', marginLeft: '-5px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={pic3} alt='pic3' style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
            <br/>
            <br/>
            <div style={rowStyle}>
                <img src={pic4} alt='pic4' style={{minWidth: '100%', marginLeft: '-20px'}}/>
            </div>
            <br/>
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
                        <p className='fs20'>Ли Лолита — разработка визуальной концепции и интерфейсов.</p>
                    </div>
                    <div style={{maxWidth: '400px'}}>
                        <p className='fs15 color-gray'>АРХИВАТОРЫ</p>
                        <p className='fs20'>Анастасия Визженкова и Яна Васильева — сбор и подготовка материалов.</p>
                        <br/>
                        <br/>
                        <p className='fs15 color-gray'>ИНТЕЛЛЕКТУАЛ</p>
                        <p className='fs20'>
                            Ян Кузнецов — исследование аудитории
                            и проектирование структуры сайта.
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
                     style={{minWidth: '1000px', marginLeft: '-50px', cursor:'pointer'}}>
                    <div style={{maxWidth: '500px'}}
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
                    <div style={{maxWidth: '500px', cursor:'pointer'}}
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
                </div>
            </div>
        </div>
    );
}

export default ShovPage;