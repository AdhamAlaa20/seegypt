import './footer.css';



export default function Footer(){
    return(    
        <footer className="footer-distributed">
        <div className="footer-left">
            <h3>SEEgypt travel <span>logo</span></h3>
            <p className="footer-links">
            <a href="/about">About</a>
            </p>
            <p className="footer-company-name">SEEgypt travel ©2023</p>
        </div>
        <div className="footer-center">
            <div>
            <i className="fa fa-map-marker" />
            <a  className='address' href="https://goo.gl/maps/vbS3ucXFUrMHN5N38"> 32 Street 87, Maadi as Sarayat Al Gharbeyah, Maadi, Cairo Governorat</a>
            </div>
            <div>
            <i className="fa fa-phone" />
            <p style={{	color:"goldenrod"}} >+20100 142 3443</p>
            </div>
            <div>
            <i className="fa fa-envelope" />
            <p><a href="torg@link.net">torg@link.net</a></p>
            </div>
        </div>
        </footer>

);


}