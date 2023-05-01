import pic1 from'./images/c1.jpg';
import pic2 from './images/c2.jpg';
import pic3 from './images/c3.jpg';

export default function Home() {
    return(
        <div  className='text-align-center   jusify-content-center   align-items-center   '>
            <h1     className='  col-md-6'>SEEgypt Travel Agency </h1>
            <div id="carouselExampleDark" className="carousel carousel-dark slide  justify-content-center   align-items-center   d-flex">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner  justify-content-center   align-items-center ">
                    <div className="carousel-item active" data-bs-interval={10000}>
                    <img src={pic1} className=" justify-content-center   align-items-center" alt="first" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>We custom design your trip</h5>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                    <img src={pic2}  className=" justify-content-center   align-items-center" alt="second" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>We have side trips to the Middle East Area</h5>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={pic3} className=" justify-content-center   align-items-center" alt="third" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Programs with various languages speaking guides</h5>
                    </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                </div> 
                </div>
    );
}

