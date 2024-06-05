import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer className="ComponentFooter">
            <div className="ComponentFooter__Icons">
                <a target="_blank" rel="noreferrer" aria-label="Twitter" href="https://www.twitter.com"><FontAwesomeIcon className="ComponentFooter__Twitter" icon={faSquareTwitter} /></a>
                <a target="_blank" rel="noreferrer" aria-label="Facebook" href="https://www.facebook.com"><FontAwesomeIcon className="ComponentFooter__Facebook" icon={faSquareFacebook} /></a>
                <a target="_blank" rel="noreferrer" aria-label="Instagram" href="https://www.instagram.com"><FontAwesomeIcon className="ComponentFooter__Instagram" icon={faSquareInstagram} /></a>
                <a target="_blank" rel="noreferrer" aria-label="Github" href="https://www.github.com"><FontAwesomeIcon className="ComponentFooter__Github" icon={faSquareGithub} /></a>
            </div>
        </footer> 
    )
}