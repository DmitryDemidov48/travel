import React, {useEffect} from 'react';
import './footer-module.scss';
import video2 from "../../Assets/DJImp4.mp4";
import {FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiOutlineFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import {FiChevronRight} from "react-icons/fi";
import Aos from "aos";
import 'aos/dist/aos.css';
export const Footer = () => {

    useEffect(()=> {
        Aos.init({duration:2000})
    },[])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video className="video_item" src={video2} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us </h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" className="input_item" type="text" placeholder="Enter Email Address"/>
                        <button data-aos="fade-up" className="btn_item flex" type="submit">SEND
                            <FiSend className="icon_item"/>
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon_footer"/>Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos earum, esse possimus quis repellat unde? Ab accusamus ex facere,
                            fugiat minus perferendis quos rem sint voluptatibus? Inventore repellat rerum sed?
                        </div>
                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineFacebook className="icon_footer"/>
                            <AiFillYoutube className="icon_footer"/>
                            <AiOutlineTwitter className="icon_footer"/>
                            <AiOutlineInstagram className="icon_footer"/>
                            <FaTripadvisor className="icon_footer"/>
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        <div data-aos="fade-up"  data-aos-duration="3000"className="linkGroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Insurance
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Payment
                            </li>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Bookings
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>TripAdvisor
                            </li>
                        </div>
                        <div data-aos="fade-up"  data-aos-duration="5000"className="linkGroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Europe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Indonesia
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight className="icon_flex"/>Oceania
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small className="small_footer">BEST TRAVEL WEBSITE</small>
                            <small className="small_footer">COPYRIGHTS RESERVED - ISRATECH 2023 </small>
                    </div>
                </div>
            </div>
        </section>
    );
};

