export default function Info(){
    return (
        <header className="ComponentTop">
            <img className="ComponentTop__Img" 
            src="./1.png" alt="profile"/>
            <h1 className="ComponentTop__H1">Luis Mora</h1>
            <h2 className="ComponentTop__H2">Frontend Developer</h2>
            <p className="ComponentTop__P">luismora.website</p>
            <a className="ComponentTop__Button-1" href="mailto:someone@example.com">Email</a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com"className="ComponentTop__Button-2">Linkedin</a>
        </header>
    )
}