import photo from "../images/nerd.png"

export default function Info(){
    return (
        <main>
            <img src={photo} alt="my image"/>
            <h2>Satish Kumar Yadav</h2>
            <h5>Software Engineer</h5>
            <h6>nsky80.github.io</h6>
            <br/>
            <button type="button">Email</button>
            <button type="button">LinkedIn</button>
        </main>
    )
}