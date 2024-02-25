import search from "./../Assets/IMAGE.png"

export default function Navbar(props) {
  return (
    <>
      <div>
        <div className="navbar-cont">
            <ul>
                <li><input type="text"/>
                <img className="search" src={search}/>
                </li>
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
          </ul>
        </div>
      </div>
    </>
  );
}
