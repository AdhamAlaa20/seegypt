
export default function Card({src, tour, highlight}){
   return( 
   <div classname="col   text-center   card-container">
    <div classname="cards">
        <img src={src} alt="..." />
        <h6>{tour}</h6>
    <span><p> {highlight}</p></span> 
    </div>
    </div>);
}



