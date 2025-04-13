import Header from "./Header.tsx";
function Contacts() {
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
                <p className='fs42Medium'>Контакты</p>
                <p className='fs20'>Т: +7 (921) 090 90 90</p>
                <p className='fs20'>E: alena_kononova@internet.ru</p>
            </div>
            <div style={rowStyle}>
                <p className='fs42Medium'>Контакты</p>
                <p className='fs20'>Вконтакте</p>
                <p className='fs20'>Телеграм</p>
            </div>
        </div>
    );
}

export default Contacts;