import photo from "../images/nerd.png"

export default function Info() {
    return (
        <div>
            <img src={photo} alt="logo_here" className="info-image" />
            <div className="info">
                <h2 className="info-name">Satish Kumar Yadav</h2>
                <h5 className="info-profession">Software Engineer</h5>
                <h6 className="info-website">nsky80.github.io</h6>
                <br />
                <div className="row">
                    <div className="col-2-1">
                        <button type="button" className="button-info-email">Email</button>
                    </div>
                    <div className="col-2-2">
                        <button type="button" className="button-info-linkedin">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}