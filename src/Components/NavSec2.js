import check from "./../Assets/IMAGE (1).png"
import info from "./../Assets/IMAGE (2).png"
import drop from "./../Assets/IMAGE (3).png"

export default function NavSec2(props) {
    return (
        <>
        <div>
            <div className="navsec2-cont">
                    <p className="navsec-title">Best Website builders in the US</p><hr></hr>

                <div className="inner-div-navsec">
                    <div>
                        <img src={check}/>
                        <p className="nav-p">Last Updated - </p>
                        <p className="nav-p">February 22, 2020</p>
                        <img src={info}/>
                        <p className="nav-p">Advertising Disclosure</p>
                    </div>

                    <div>
                        <p className="nav-p">Top Relevant</p>
                        <img src={drop}></img>
                    </div>
                </div>

                <div className="navsec-2ndList">
                    <p>Tools</p>
                    <p>AWS Builder</p>
                    <p>Start Build</p>
                    <p>Build Supplies</p>
                    <p>Tooling</p>
                    <p>BlueHosting</p>
                </div>

                <div className="directory">
                    <p>Home</p>
                    <p className="gt">&gt;</p>
                    <p>Hosting for all</p>
                    <p className="gt">&gt;</p>
                    <p>Hosting</p>
                    <p className="gt">&gt;</p>
                    <p>Hosting6</p>
                    <p className="gt">&gt;</p>
                    <p>Hosting5</p>
                </div>
            </div>
        </div>
        </>
    )
}