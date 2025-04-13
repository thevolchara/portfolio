function Footer(){
    return(
        <div className="d-flex justify-content-between">
            <p className='fs15' style={{marginTop:'40px'}}>© alenakononova.ru</p>
            <p className='fs15' style={{marginTop:'40px'}}>По любым вопросам: alena_kononova@internet.ru</p>
            <div className="d-flex justify-content-between" style={{marginTop:'30px'}}>
                <p className='fs15 m-10-20'>Behance</p>
                <div style={{marginTop:'6px'}}><span className="dot"></span></div>
                <p className='fs15 m-10-20'>Telegram</p>
                <div style={{marginTop:'6px'}}><span className="dot"></span></div>
                <p className='fs15 m-10-20'>Pinterest</p>
            </div>
        </div>
    );
}

export default Footer;