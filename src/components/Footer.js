import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer className="ComponentFooter">
            <div className="ComponentFooter__Icons">
                <a href="twitter.com"><FontAwesomeIcon className="ComponentFooter__Twitter" icon={faSquareTwitter} /></a>
                <a href="facebook.com"><FontAwesomeIcon className="ComponentFooter__Facebook" icon={faSquareFacebook} /></a>
                <a href="instagram.com"><FontAwesomeIcon className="ComponentFooter__Instagram" icon={faSquareInstagram} /></a>
                <a href="github.com"><FontAwesomeIcon className="ComponentFooter__Github" icon={faSquareGithub} /></a>
            </div>
        </footer>
    )
}