import Swiper2 from "@/Swiper/Swiper";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="PricingCont">
      <div className="backPricing"></div>
      <div className="mainPricing">
        <div className="head">
          <div>
            PLANS & PRICING
            <br />
            <svg
              style={{ width: "300px", height: "50px" }}
              width="53"
              height="25"
              viewBox="0 0 723 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.939256 11.0853C0.387991 11.1189 -0.0317016 11.5929 0.00184667 12.1442C0.0353948 12.6955 0.50948 13.1152 1.06074 13.0816L0.939256 11.0853ZM722.771 12.3509L717.271 6.31616L711.236 11.8161L716.736 17.8508L722.771 12.3509ZM1.06074 13.0816C257.575 -2.52899 416.81 -0.834732 716.957 13.0824L717.05 11.0845C416.858 -2.83466 257.547 -4.53099 0.939256 11.0853L1.06074 13.0816Z"
                fill="#FF27F6"
              />
              <path
                d="M0.944138 13.0817C0.392874 13.0481 -0.0268188 12.574 0.00672948 12.0228C0.0402777 11.4715 0.514362 11.0518 1.06563 11.0854L0.944138 13.0817ZM722.775 11.8161L717.276 17.8508L711.241 12.3509L716.741 6.31622L722.775 11.8161ZM1.06563 11.0854C257.579 26.696 416.815 25.0017 716.962 11.0846L717.054 13.0825C416.863 27.0017 257.552 28.698 0.944138 13.0817L1.06563 11.0854Z"
                fill="#FF27F6"
              />
            </svg>
            {/* <div className='pricingLine'></div> */}
          </div>
          <div style={{overflow:'visible'}}>
          <div style={{overflow:'visible'}} className="btnDiv">
          <div className="btnImgCont" n>
          <img className="btnImg" src="/btn.png" alt="btn-img" />
          </div> 
          <div className="btnText"> Build your Metaverse</div>
          </div>
          </div>
          <div style={{margin:'auto', width:'100vw', fontSize:'45px',color:'white'}}>
            incomplete part <br/>
            Partially complete<br/>
            Removed

          </div>
          {/* <div className=''>
             <Swiper2/>
            </div> */}
        </div>
      </div>
    </div>
  );
}
