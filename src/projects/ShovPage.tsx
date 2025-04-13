import Header from "../Header.tsx";
import arrow from "../assets/icon_and_logo/arrow_dark.svg"
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
        </div>
    );
}

export default ShovPage;