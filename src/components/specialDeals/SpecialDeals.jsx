import React from "react";
import "./specialDeals.scss";
import bear from "../../assets/images/bear.png";
import slinky from "../../assets/images/slinky.png";
import homeToy from "../../assets/images/homeToy.png";

const SpecialDeals = () => {
    return(
        <div className="specialDealsDiv">
            <div>
                <div className='specialDealsDescription'>
                    <div className='specialtoy toy1'>
                        <img src={bear} alt = 'special' />
                        <span className='specialprice'>14.99$</span>
                    </div>
                    <div className='specialtoy toy2'>
                        <img src={homeToy} alt = 'special' />
                        <span className='specialprice'>9.99$</span>
                    </div>
                    <div className='specialtoy toy3'>
                        <img src={slinky} alt = 'special' />
                        <span className='specialprice'>19.99$</span>
                    </div>
                </div>
            </div>
            <div className='specialbundle'>
                <s>44.99$</s>
                <p>39.99$</p>
            </div>                
        </div>
    )
}
export default SpecialDeals;