import drop from "./../Assets/IMAGE (7).png"

export default function Footer(props) {
    return(
        <>
        <div>
            <div className="footer">
                <div>
                    <p>Categories</p>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic-Automation</p>
                </div>
                <div>
                    <p>Contact</p>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>Categories</p>
                    <p>About</p>
                </div>
                <div className="footer-div2">
                    <p>United States</p>
                    <img src={drop}></img>
                </div>
            </div>
        </div>
        </>
    )
}