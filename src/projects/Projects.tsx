import ProjectCard from "./ProjectCard.tsx";

function Projects() {
    const startPath = "/portfolio/project";
    const projects = [
        {
            header: "«Шов+Шов»",
            description: "Адаптивный сайт для школы шитья",
            image: require("../assets/index-page/ShovV.jpg"),
            imageH: require("../assets/index-page/ShovH.jpg"),
            path: `${startPath}/shov`
        },
        {
            header: "«ЯПсихолог»",
            description: "Личный кабинет психолога, в котором осуществляется функция учета пациетов",
            image: require("../assets/index-page/IPsyV.jpg"),
            imageH: require("../assets/index-page/IPsyH.jpg"),
            path: `${startPath}/psycho`
        },
        {
            header: "«ВМесте»",
            description: "Приложение, которое объединяет все события города в одном месте",
            image: require("../assets/index-page/VMesteV.jpg"),
            imageH: require("../assets/index-page/VMesteH.jpg"),
            path: `${startPath}/together`
        },
        {
            header: "«БАЗА»",
            description: "Портфолио компании, которая занимается созданием дизайна интрьера",
            image: require("../assets/index-page/BazaV.jpg"),
            imageH: require("../assets/index-page/BazaH.jpg"),
            path: `${startPath}/baza`
        },
        {
            header: "Сайт-визитка",
            description: "Данный сайт посвящен исполнителю Noize MC",
            image: require("../assets/index-page/NoizeV.jpg"),
            imageH: require("../assets/index-page/NoizeH.jpg"),
            path: `${startPath}/site`
        }
    ];
    return (
        <>
            <div className='container' style={{marginTop: "10px"}}>
                <div className='row'>
                    {projects.map((p) => (
                        <div className='col col-sm-12 col-lg-6'>
                            <ProjectCard imgSrc={p.image} imgAlt={p.image} header={p.header} description={p.description}
                                         navigatePath={p.path} key={p.header}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects;