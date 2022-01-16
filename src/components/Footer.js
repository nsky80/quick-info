import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"
import twitter from "../images/twitter.png"

export default function Footer() {
    return (
        <div className="footer row">
            <div className="col-6-1">
            </div>
            <div className="col-6-2">
                <a href="https://github.com/nsky80"><img src={github} alt="Github" className="footer-image" /></a>
            </div>
            <div className="col-6-3"><a href="https://instagram.com/n_sky80"><img src={instagram} alt="Instagram" className="footer-image" /></a>
            </div><div className="col-6-4"><a href="https://twitter.com/nsky80"><img src={twitter} alt="Twitter" className="footer-image" /></a>
            </div><div className="col-6-5"><a href="https://facebook.com/nsky80"><img src={facebook} alt="Facebook" className="footer-image" /></a></div>
            <div className="col-6-6"></div>
        </div>
    )
}