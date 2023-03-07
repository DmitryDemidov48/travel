import React, {useEffect} from 'react';
import './main-module.scss';
import{HiOutlineLocationMarker} from "react-icons/hi";
import{HiOutlineClipboardCheck} from "react-icons/hi";
import img from "../../Assets/1.jpg";
import img2 from "../../Assets/2.jpg";
import img3 from "../../Assets/3.jpg";
import img4 from "../../Assets/4.jpg";
import img5 from "../../Assets/5.jpg";
import img6 from "../../Assets/6.jpg";
import img7 from "../../Assets/7.jpg";
import img8 from "../../Assets/8.jpg";
import img9 from "../../Assets/9.jpeg";
import img10 from "../../Assets/10.jpg";
import Aos from"aos";
import 'aos/dist/aos.css';

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel ' +
            'destination in the world. This place is known for its luxurious stay and' +
            'adventurous activities'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu,' +
            'the so-called Lost City of Incas. This place is popular among tourist as the' +
            'sunrise from the Sun Gate is simple spectacular'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great' +
            'Barrier Reef. The hallmark of this place is lavish and beauty. Always' +
            'interesting to be in this place'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great' +
            'Barrier Reef. The hallmark of this place is lavish and beauty. Always' +
            'interesting to be in this place'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: ' According to the World Tourism Ranking, 45 Million people' +
            'visit Turkey each year, and from that about 2 Million come to visit ' +
            'Cappadocia This place is know for its luxurious stays and adventurous' +
            'activities '
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: ' A city in central Mexico, Guanajuato is know for its history of' +
            'silver mining and colonial architecture. The houses in the city are very ' +
            'attractively painted with the most bright color available . Always welcome'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the ' +
            'beauty of this place. Also, if you are a foodie and love seafood, you will be' +
            'exhilarated with the choice you are about to get here. Happy exploring great food!'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'One of the most remarkable Australian natural gifts is the Great' +
            'Barrier Reef. The hallmark of this place is lavish and beauty. Always' +
            'interesting to be in this place'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'One of the most remarkable Australian natural gifts is the Great' +
            'Barrier Reef. The hallmark of this place is lavish and beauty. Always' +
            'interesting to be in this place'
    },
    {
        id: 10,
        imgSrc: img10,
        destTitle: 'Bali island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'One of the most remarkable Australian natural gifts is the Great' +
            'Barrier Reef. The hallmark of this place is lavish and beauty. Always' +
            'interesting to be in this place'
    },

]
export const Main = () => {

    useEffect(()=> {
        Aos.init({duration:2000})
    },[])

    return (
        <section className="main container section ">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="secContent_item grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description}
                    ) =>{
                        return(
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img className="img_item" src={imgSrc} alt={destTitle}/>
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon_footer"/>
                                        <span className="name">{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        DETAILS<HiOutlineClipboardCheck className="icon_item"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
};

