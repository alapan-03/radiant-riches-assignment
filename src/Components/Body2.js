import img from "./../Assets/download 1.png"

export default function Body2(props) {
    return (
        <>
        <div className="body2-outer">
                <p className="body2-title">Related deals you might like for</p>
            <div className="body2">

                <div className="body2-inner">
                    <img src={img}></img>
                    <div className="body2-inner-1">
                        <p className="body2-back">20% off</p>
                        <p className="body2-back">Limited time</p>
                    </div>
                    <p className="body2-p1">Webbuilder 1</p>
                    <p className="body2-p2">Computer  Modern clasic with wix support</p>

                    <div className="body2-inner-2">
                        <p className="body2-price1">$39.96</p>
                        <p className="body2-price2">$49.96</p>
                        <p className="body2-price3">(20% Off)</p>
                    </div>

                    <button className="body2-deal-btn">View Deal</button>
                </div>

                <div className="body2-inner">
                    <img src={img}></img>
                    <div className="body2-inner-1">
                        <p className="body2-back">20% off</p>
                        <p className="body2-back">Limited time</p>
                    </div>
                    <p className="body2-p1">Webbuilder 1</p>
                    <p className="body2-p2">Computer  Modern clasic with wix support</p>

                    <div className="body2-inner-2">
                        <p className="body2-price1">$39.96</p>
                        <p className="body2-price2">$49.96</p>
                        <p className="body2-price3">(20% Off)</p>
                    </div>

                    <button className="body2-deal-btn">View Deal</button>
                </div>

                <div className="body2-inner">
                    <img src={img}></img>
                    <div className="body2-inner-1">
                        <p className="body2-back">20% off</p>
                        <p className="body2-back">Limited time</p>
                    </div>
                    <p className="body2-p1">Webbuilder 1</p>
                    <p className="body2-p2">Computer  Modern clasic with wix support</p>

                    <div className="body2-inner-2">
                        <p className="body2-price1">$39.96</p>
                        <p className="body2-price2">$49.96</p>
                        <p className="body2-price3">(20% Off)</p>
                    </div>

                    <button className="body2-deal-btn">View Deal</button>
                </div>
            </div>
        </div>
        </>
    )
}