import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer className="ComponentFooter">
            <div className="ComponentFooter__Icons">
                <a target="_blank" href="twitter.com"><FontAwesomeIcon className="ComponentFooter__Twitter" icon={faSquareTwitter} /></a>
                <a target="_blank"  href="facebook.com"><FontAwesomeIcon className="ComponentFooter__Facebook" icon={faSquareFacebook} /></a>
                <a target="_blank"  href="instagram.com"><FontAwesomeIcon className="ComponentFooter__Instagram" icon={faSquareInstagram} /></a>
                <a target="_blank"  href="github.com"><FontAwesomeIcon className="ComponentFooter__Github" icon={faSquareGithub} /></a>
            </div>
        </footer>
    )
}