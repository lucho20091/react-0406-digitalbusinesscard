import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareTwitter, faSquareFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return (
        <footer className="ComponentFooter">
            <div className="ComponentFooter__Icons">
                <a href="twitter.com"><FontAwesomeIcon className="ComponentFooter__Twitter" icon={faSquareTwitter} /></a>
                <FontAwesomeIcon className="ComponentFooter__Facebook" icon={faSquareFacebook} />
                <FontAwesomeIcon className="ComponentFooter__Instagram" icon={faSquareInstagram} />
                <FontAwesomeIcon className="ComponentFooter__Github" icon={faSquareGithub} />
            </div>
        </footer>
    )
}