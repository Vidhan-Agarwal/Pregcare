function Footer()
{
    return (
      <div className="Footer">
        <img src="./public/img/girllogo.jpg" style={{height:"50px"}}></img>
        <h5>All rights reserved</h5>
         <ul className="team-icon">
          <li>
            <a href="#" className="twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#" className="facebook">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="linkedin">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul> 
      </div>
    );
}
export default Footer;