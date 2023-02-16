import React from "react";
import "./contacts.scss";
import Location from '../../assets/images/locationSymbol.png'
import Email from '../../assets/images/emailSymbol.png'
import Contact from '../../assets/images/contactSymbol.png';

const Contacts = () => {
    return(
        <>
        <div className="contactsDiv">
            <div className="contactsInfo">
                <img src={Location} width="100px" height=""/>
                <div>
                    <span>Location</span>
                    <p>Sevak str. apt. 31</p>
                </div>   
            </div>
            <div className="contactsInfo">
                <img src={Email} width="100px" height=""/>
                <div> 
                    <span>Email Us</span>
                    <p><a href = "mailto: abc@example.com">abc@example.com</a></p>
                </div>
            </div>
            <div className="contactsInfo">
                <img src={Contact} width="100px" height=""/>
                <div>    
                    <span>Contact Us</span>
                    <p><a href="tel: 260-563-6925">+913-287-1273</a></p>
                </div>
            </div>
        </div>
        <div className='contactsDescription'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52763.24052530132!2d-118.61969018846791!3d34.25613333732857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c29b9ef4dd4c89%3A0x273bd4e1fe4261f8!2sTarget!5e0!3m2!1sen!2sus!4v1674618988320!5m2!1sen!2sus" 
            width="80%" height="450" style={{border:0, borderRadius: '30px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}
export default Contacts;