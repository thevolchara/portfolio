import Header from "./Header.tsx";
import heroban from "./assets/obomne-page/heroban.jpg";
function About() {
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
            <div style={rowStyle}>
                <img src={heroban} alt="heroban" style={{maxHeight: '136px', marginRight: '50px'}}/>
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
                <p className='fs42Medium'>Алёна Кононова</p>
                <p className='fs20'>Мне 22 года, я живу в Санкт-Петербурге и занимаюсь UX/UI-дизайном. Сейчас учусь в
                    СПБГУПТД на направлении
                    09.03.03 "Прикладная информатика в дизайне" (бакалавриат).</p>
                <p className='fs20'>За время учебы я создала множество проектов
                    — от веб-сайтов до мобильных приложений. В этом портфолио вы сможете изучить некоторые из них и
                    узнать, как я работаю над каждым этапом создания продукта.</p>
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
                <p className='fs32Medium'>Что я умею?</p>
                <p className='fs20'>Я сочетаю аналитический подход с креативностью, чтобы создавать удобные и красивые
                    интерфейсы.
                    Вот мои ключевые навыки:</p>
                <p className='fs20'>Адаптивный дизайн</p>
                <p className='fs20'>Оптимизация интерфейсов под различные устройства (desktop, mobile).</p>
                <p className='fs20'>UX/UI дизайн</p>
                <p className='fs20'>Создание вайфреймов, карт сайта, прототипов и дизайн-систем.</p>
                <p className='fs20'>Графический дизайн</p>
                <p className='fs20'>Работа в Figma , Adobe Illustrator, Photoshop, InDesign и других инструментах.</p>
                <p className='fs20'>Аналитика</p>
                <p className='fs20'>Исследование поведения пользователей, анализ данных, проектирование логики
                    приложений.</p>
                <p className='fs15'>СИЛЬНАЯ СТОРОНА</p>
                <p className='fs20'>Умение работать с ассоциациями. Я создаю дизайн-концепции, которые не просто
                    выглядят красиво, но и точно соответствуют духу компании.</p>
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
                <p className='fs32Medium'>Мой путь в дизайне только начинается</p>
                <p className='fs20'>Я постоянно развиваюсь, регулярно практикуюсь и совершенствую свои навыки. Слежу за
                    трендами в области UX/UI-дизайна , изучаю новые инструменты и подходы. Моя цель — создавать
                    продукты, которые делают жизнь людей проще.</p>

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
                <p className='fs32Medium'>Хотите поработать вместе?</p>
                <p className='fs20'>Если вам нужен UX/UI-дизайнер или вы хотите обсудить один из моих проектов, напишите мне на почту: alena_kononova@internet.ru . Буду рада сотрудничеству и обратной связи!</p>
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

export default About;