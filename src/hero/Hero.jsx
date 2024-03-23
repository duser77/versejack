import "./Hero.css";
 import { BsFilter } from "react-icons/bs";
 import { FaStar } from "react-icons/fa";
const Hero = () => {
  return (
    <div>
      <div className="HContainer">
          
        <div>
          <div className="flex Navbar">
            <div className="logoh1">
              Verse<span className="logoh2">Jack</span>
            </div>
            <div className='svg'>
                 <BsFilter style={{color:'black',width:'60px',height:'55px'}}/>
</div>
          </div>
            {/* <div className="gradint1">
          <svg width="70" height="74" viewBox="0 0 530 274" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_20_112)">
<ellipse cx="230.198" cy="14.9363" rx="88.1977" ry="48.0637" fill="#9933FF"/>
</g>
<defs>
<filter id="filter0_f_20_112" x="-68.8139" y="-243.941" width="598.023" height="517.755" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="105.407" result="effect1_foregroundBlur_20_112"/>
</filter>
</defs>
</svg>

          </div>
           */}
          <div className="textJack">verse of jack</div>
            
          <div className="textMeta">
          <div className="earth1 earth"></div>
            <svg
              className="metaSvg"
              viewBox="0 0 1251 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M149.71 3.30839L169.237 140H141.573L130.182 50.4995L94.3823 140H81.3641L45.5639 50.4995L34.1729 140H6.50912L26.0365 3.30839H52.073L87.8732 91.1816L123.673 3.30839H149.71ZM293.777 29.3449H235.195V58.6359H284.013V84.6724H235.195V113.964H293.777V140H209.158V3.30839H293.777V29.3449ZM330.456 3.30839H428.093V29.3449H392.292V140H366.256V29.3449H330.456V3.30839ZM546.043 140L535.873 113.964H478.104L467.934 140H438.643L495.191 3.30839H518.786L575.334 140H546.043ZM488.071 87.927H525.906L506.989 39.1086L488.071 87.927ZM634.689 140L579.361 3.30839H608.652L644.453 94.4361L680.253 3.30839H709.544L654.216 140H634.689ZM827.45 29.3449H768.868V58.6359H817.686V84.6724H768.868V113.964H827.45V140H742.832V3.30839H827.45V29.3449ZM974.784 140H943.052L912.337 94.4361H896.675V140H870.638V3.30839H919.457C955.053 3.30839 971.53 22.4289 971.53 48.8723C971.53 67.9928 960.342 86.2997 940.205 92.402L974.784 140ZM896.675 29.3449V68.3996H922.711C935.323 68.3996 945.493 60.2632 945.493 48.8723C945.493 36.0574 935.323 29.3449 922.711 29.3449H896.675ZM1063.63 57.0087C1093.53 61.8905 1115.7 70.0269 1115.7 99.318C1115.7 123.727 1096.99 143.255 1060.78 143.255C1025.79 143.255 1007.49 122.914 1005.05 120.473L1018.06 97.6907C1030.07 111.319 1048.17 117.218 1061.19 117.218C1079.29 117.218 1089.66 110.506 1089.66 100.945C1089.66 91.385 1079.9 86.5031 1062 83.8588C1023.15 77.9599 1009.93 63.5178 1009.93 42.77C1009.93 19.988 1028.44 0.0538287 1062.41 0.0538287C1068.51 0.0538287 1089.26 0.460644 1109.19 16.7335L1098.21 39.1086C1095.16 36.4642 1081.73 26.0903 1062 26.0903C1048.17 26.0903 1035.96 29.9551 1035.96 40.9393C1035.96 50.2961 1043.9 53.7541 1063.63 57.0087ZM1240.27 29.3449H1181.69V58.6359H1230.51V84.6724H1181.69V113.964H1240.27V140H1155.65V3.30839H1240.27V29.3449Z"
                fill="#413E3E"
              />
            </svg>
            <div className="earthX earth"></div>
          </div>
          <div className="btnDiv">
          <div className="btnImgCont" >
          <img className="btnImg" src="/btn.png" alt="btn-img" />
          </div> 
          <div className="btnText"> Build your Metaverse</div>
          </div>
          <div className="starSym">
            {/* <div className="starLogo">
             <FaStar style={{Color:'#E971FF'}} className="star" />

            </div> */}
            <div>
              <svg
                width="44"
                height="44"
                viewBox="0 0 88 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_20_153)">
                  <path
                    d="M27.715 71.4262L29.2292 64.6195C31.7528 53.2745 28.5725 41.4124 20.712 32.8515L15.9958 27.7151L22.3265 29.2066C33.8391 31.9188 45.9468 28.7286 54.6281 20.6955L59.7069 15.9959L58.2034 22.2732C55.4012 33.9725 58.705 46.2955 66.9841 55.0238L71.4261 59.707L64.6193 58.1928C53.2744 55.6692 41.4123 58.8496 32.8514 66.71L27.715 71.4262Z"
                    // fill="#E971FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_20_153">
                    <rect
                      width="64"
                      height="64"
                      fill="white"
                      transform="translate(55.4302 87.4222) rotate(-150.008)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="imageHeroC">
            <img className="imageHero" src="/h1.png" alt="h1" />
            <img className="imageHero" src="/h2.png" alt="h1" />
            <img className="imageHero" src="/h3.png" alt="h1" />
            <img className="imageHero" src="/h4.png" alt="h1" />
            <img className="imageHero" src="/h5.png" alt="h1" />
            <img className="imageHero" src="/h6.png" alt="h1" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
