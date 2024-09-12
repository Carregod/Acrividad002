import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
   <div> <Link to="/" href="#">Home</Link>
   </div>
      <Link to="/Siguiente" href="#">Siguiente</Link>
      {/* <a className="nav-item nav-link" href="#">Pricing</a>
      <a className="nav-item nav-link disabled" href="#">Disabled</a> */}
    </div>
  </div>
</nav>
  )
};



export default Navbar;
