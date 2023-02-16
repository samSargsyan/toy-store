import React from "react";
import "./footer.scss";
import fb from '../../assets/images/icons/facebook.png';
import ig from '../../assets/images/icons/Instagram-Icon.png';
import tt from '../../assets/images/icons/twitter.png';

const Footer = () => {
return(
    <div className="footer">
        <div className="footerContact">Contact:+987564132</div>
        <div className="footerMedia">
            <span>Social Medias</span>
            <div className="socialMedia">
                <img src={fb} width="30px"/>
                <img src={ig} width="30px"/>
                <img src={tt} width="30px"/>
            </div>
        </div>
        <div className="footerAdress">Address: Sevak str. apt. 31</div>
    </div>
)
}



export default Footer;