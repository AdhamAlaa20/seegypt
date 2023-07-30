import pic25 from './images/c25.jpg'
import pic24 from './images/c24.jpg';
import pic23 from './images/c23.jpg';
import pic22 from './images/c22.jpg';
import pic21 from './images/c21.jpg';
import pic20 from './images/c20.jpg';
import pic19 from './images/c19.jpg';
import pic18 from './images/c18.jpg';
import pic17 from './images/c17.jpg';
import pic16 from './images/c16.jpg';
import pic15 from './images/c15.jpg';
import pic14 from './images/c14.jpg';
import pic13 from './images/c13.jpg';
import pic12 from './images/c12.jpg';
import pic11 from './images/c11.jpg';
import pic10 from './images/c10.jpg';
import pic9 from './images/c9.jpg';
import pic8 from './images/c8.jpg';
import pic7 from './images/c7.jpg';
import pic6 from './images/c6.jpg';
import pic5 from './images/c5.jpg';
import pic4 from './images/c4.jpg';
import Card from '../components/cards/card';


export default function Tours() {
    return(
        <div  className="d-flexbox  justify-content-center align-items-center"> <h1>CAIRO TOURS</h1> 
        <div className="row row-cols-1 row-cols-md-4 g-4    justify-content-center" style={{padding:"30px"}}>
         <Card src={pic4}    
            tour="Giza Pyramids & the Sphinx"   
            highlight="Enjoy an excursion to The Pyramids of Cheops, Chephren and Mykerinus. Then proceed to visit the Sphinx, the head of a pharaoh with a lion's body, the tour also includes a visit to the Valley Temple."/>
         <Card src={pic5}    
            tour="Sakkara Necropolis"   
            highlight="Visit the Step Pyramid of Zoser, the world's oldest major stone structure. Built for King Djoser, then visit the Nobles' Mastabas and get inside the Pyramid of Titi to view the Pyramids text carved on its wall."/>
         <Card src={pic6}    
            tour="Egyptian Museum of Antiquities"   
            highlight="Enjoy a trip to the Egyptian Museum which features artifacts from the Pharaonic period. The museum displays a rare collection of 5000 years of art which is considered the largest most precious collection of Egyptian art in the world, including the treasure of King Tutankhamen which was enclosed in his tomb."/>
         <Card src={pic7}    
            tour="The Citadel and Mosques"   
            highlight="The massive Citadel was built in 1176 by Salah El-Din, founder of the Ayubbid Dynasty, to fortify the city against the Crusaders. Tour includes the visit of Mohamed Ali Alabaster Mosque, Al Nasser Mohamed Mosque and Al Gawhara Palace (if open).
            Outside of the Citadel you will view the Beautiful Islamic architecture of Sultan Hassan and El Refaii Mosques.
            "/>
         <Card src={pic8}    
            tour="Coptic Cairo"   
            highlight="You will discover the Roman fortress, the Hanging church, also called Al Mo'allaka church, then to St. Sergius which sheltered the holy family, St Barbara Church. Then Ben Ezra One of the Oldest Synagogue. End your tour by the treasury collection at the Coptic Museum.
            "/>
         <Card src={pic9}    
            tour="Dahshur Pyramids & Memphis"   
            highlight="The Bent Pyramid is the most eye- catching of the pyramids at Dahshur. The Red Pyramid built by the father of Cheops. Then continue the tour to Memphis, the capital of Old Egypt during ancient time, and here you will see the Statue of Ramses II."/>
         <Card src={pic10}    
            tour="Cairo Walls & Old City Gates"   
            highlight="Walking tour of Old Cairo including stops at “Bab Zuweila” which was built under the supervision of Badr Al Dein Al Gamal. Cross the road to Al Hussein Mosque, and onto Beit El Sehemy the unique Islamic house. Continue walking to Al Hakam Mosque one of the Fatimide Mosques, then to Bab al Fetouh which was built under the supervision of Gawhar El Sakaly. Visit Qalawon complex is included."/>
         <Card src={pic11}    
            tour="Cave Church and the Recycle Center"   
            highlight="Monastery of St Simon the Tanner, the main cathedral is in a cave, and there are a number of wonderful biblical sculptures.
            The people of Zabaleen (Garbage collectors in Arabic), have essentially collected the trash of Cairo at no cost over many years, making their living actually from recycling the trash.
            "/>
         <Card src={pic12}    
            tour="Gayer Anderson museum, Ibn Toulon and Sultan Hassan Mosque"   
            highlight="The Rifai Mosque, where kings Farouk and Fouad and the Shah of Iran are buried, is located in Salah Al-Din square at the Citadel north of Sultan Hassan mosque."/>
         <Card src={pic13}    
            tour="SHOPPING AT KHAN EL KHALILI BAZAAR"   
            highlight="The Khan al Khalili souk (market) offers a swirl of food, Egyptian souvenirs, jewelry, house-wares, toys and textiles.

               After shopping you can take a rest at the market's famous 200-year-old Fishway Coffee House or eat at Naguib Mahfouz restaurant."/>
         <Card src={pic14}    
            tour="THE NILOMETER ON RHODA ISLAND"   
            highlight="The Nilometer in Cairo, on the southern tip of Roda Island, is a unique historical site which is often overlooked by visitors. It is one of the oldest existent structures which dates back to the period just after the Arab conquest of Egypt. Nilometers, were used to measure the levels of the Nile River. These water measurement structures continued to be useful up until the modern era when the Nile's natural flows were disrupted by large water storage reservoirs."/>
         <Card src={pic15}    
            tour="THE MANIAL PALACE"   
            highlight="The Palace was built to commemorate and eternalize Islamic Art. It represents a crucial period in modern Egyptian history and portrays in detail the life of the Royal Family.

               The palace's architecture, interior decorations and furniture are all modeled on the Arabesque style. The palace garden is a rare plant museum, where the Prince collected a lot of plants unknown in Egypt and was able to adapt them to the soil and environment."/>
         <Card src={pic16}    
            tour="CITY OF THE DEAD"   
            highlight="drive to Cairo necropolis “city of the dead” dating from Mamluk times and is still in use today where a lot of people live and work (tassels making / glass blowing….etc) among their dead and ancestors.
            There are many cemeteries in the city of the dead, but we will focus on:
            Northern and southern cemeteries as they are home to some of the most impressive monuments. The tour will involve driving around as well as visiting some of the mausoleums and tombs.
            At the Northern cemetery you will visit the tomb and mausoleum of “farag ibn barkouk” and then you will see from outside (unless if open) the 2 mausoleums & complex of Qaitbey and Ashraf Barsbay.
            At the southern cemetery, you will pass by the tomb of el imam al shafaii & you will visit the family cemetery of Mohamed Aly at “Howsh al Pasha”.
            "/>
         <Card src={pic17}    
            tour="FELUCCA RIDE ON THE NILE"   
            highlight=": Feluccas are the traditional sailboats of Egypt's Nile. Egyptians and foreigners alike enjoy a relaxing felucca ride, as they are perfect for catching the breeze on a hot summer night, for brisker sails the rest of the year and watching the sunset anytime."/>
         <Card src={pic18}    
            tour="SOUND AND LIGHT SHOW AT GIZA PYRAMIDS"   
            highlight="Pay a visit to Sound and Light spectacular Show of the Giza Pyramids of Cheops,Chefren and Mykerinus and enjoy the history of the ancient Egyptians. The show begins with the story of the Sphinx who has been the vigilant guardian of the city of the dead for five thousand years."/>
         <Card src={pic19}    
            tour="DINNER CRUISE ON THE NILE WITH SHOW"   
            highlight="It is a fabulous way to enjoy a night on the Nile while you are in Cairo. So, you are invited to dinner on a cruise boat for two hours sailing trip on the Nile with belly dancer, folklore show, western music and dinner."/>
         <Card src={pic20}    
            tour="PHARAONIC VILLAGE"   
            highlight="You will be taken, on a fantastic journey, to the days of the Pharaohs, a time brought to life by an incredible group of actors and actresses, faithful and exact reproductions of buildings, clothing, and lifestyles.
            Pharaonic Village offers hour-long narrated tours of Egyptian history on a pontoon boat that travels past miniature versions of ancient temples you'd otherwise have to travel hundreds of miles to see.
            ** The Pyramids museum, The Mummification museum and King Tut Tomb are included in the visit"/>
         <Card src={pic21}    
            tour="FAGNOON ART VILLAGE"   
            highlight="The Fagnoon Art School is situated on Sakkara Road. A place where both parents and children can take a break and spend unforgettable hours. Fagnoon Art School is a unique place where you can freely express yourself and develop both artistic and creative talents.

            Children are free to choose whatever they want from the various workshops available at Fagnoon. Painting is available everywhere, on walls, ground, and even on clothes. They can paint on walls, play with clay, or enjoy the freedom of the vast playgrounds giving them the chance to mess around without getting into trouble.
            
            You can also enjoy the spirit of adventure by climbing the palm by the net and even play freely on those nets while enjoying a view of Abusir pyramid. The village is considered as a small model of the Egyptian village and the old village house, where you can make pies and bread by yourself."/>
         <Card src={pic22}    
            tour="MILITARY MUSEUM AND ABDEEN PALACE"   
            highlight="Abdeen Palace Museum is one of the cultural and historical museums in Egypt. Built in the age of Mohamed Ali Pasha. According to its importance, the palace was the center of the government for 80 years.
            If you are interested in modern Egyptian history as well as the period of the Crusade, the Military museum at the Citadel contains some if the oldest weapons used at the beginning of the Islamic period and during the 2nd World War."/>
         <Card src={pic23}    
            tour="CAMEL MARKET “Souq al-Gamaal”"   
            highlight="It's considered the biggest of its kind in Egypt, holding hundreds of camels that had been driven across the shifting sands from Libya, Sudan, Somalia, and Aswan.

            People from every social standard and also traders went there to get relatively cheap and guaranteed healthy meat. Also, foreign tourists from all over the world come to this famous market, because they want to see the largest gathering of camels (the ship of the desert)."/>        
         <Card src={pic24}    
            tour="WHIRLING DARWISH SHOW"   
            highlight="The performance of 'El Tanoura' consists of 3 parts: The introduction which is a demonstration of the various musicians and their instruments. The Tanoura presentation dance, which is a warm-up of sorts introducing the dancers, and finally the Sufie Tanoura dance.

            EL GHOURY PALACE: Every Saturday / Monday / Wednesday night."/>
         <Card src={pic25}    
            tour="CAFFELUCCA WITH LUNCH / DINNER ON THE NILE (PRIVATE)"   
            highlight="Enjoy 2 hour's ride on the Nile in this private motorboat while you are served lunch/dinner (Egyptian / Italian food)
            We can arrange transportation to and from the place."/>
        </div>
        </div>
    );
}