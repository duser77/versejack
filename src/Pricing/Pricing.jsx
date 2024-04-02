import "./Pricing.css";
// import PricingBox from "./PricingBox";
// import PricingBox2 from "./PricingBox2";
// import PricingBox3 from "./pricingBox3";
import "./PricingBox3.css";
export default function Pricing() {
  return (
    <div className="PricingMainCont">
      {/* <div className="backPricing"></div> */}
      <div className="mainPricing">
        <div className="head flex flex-col uppercase ml-[50px] text-whites text-2xl sm:text-3xl lg:text-4xl mt-4 mb-[40px] sm:ml-[100px] md:ml-[150px] ">
          <div>
            PLANS & PRICING
          </div>
          <div>
            <img className="w-[220px] sm:w-[270px] lg:w-[340px] mt-2" src="/pricingLine.png" alt="pricing line" />
          </div>
          
        </div>

        {/* <PricingBox/> */}

        <div className="pricingBoxMain">
      <div className="pricingBoxSection ">
        <div className="price-box price-box1   ">
          <div className="flex w-full   h-[60px] font-mono justify-center items-center text-xl text-pricing font-bold ">
            Free
          </div>
          {/* <div className='price-box1p flex  h-[60px] font-mono '>
                <p className="price">$0 
                <span>/month</span>
                </p>
                </div> */}
          <div className="flex w-full h-[60px] font-mono justify-center   text-xl font-light text-grey">
            <img className="h-[30px] w-[50px] mr-[10px]" src="/p1.png" alt="p1" /> 
            /months
          </div>
          <div className="h-[130px] relative w-full bg-grey-box pt-[10px]">
            <div className="pricingText pricingText1  flex">
              <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick" className="w-[15px] h-[15px] " />
              </div>
              Per room 20 member
            </div>
            <div className="pricingBtn">Get started</div>
          </div>
        </div>
        <div style={{height:'320px'}} className="price-box price-box2  ">
          <div className="flex w-full   h-[60px] font-mono justify-center items-center text-xl text-pricing font-bold ">
            Basic
          </div>
          <div className="flex w-full h-[60px] font-mono justify-center   text-xl font-light text-grey"> 
            <img className="h-[30px] w-[80px] mr-[10px]" src="/p2.png" alt="p1" />
            /months
          </div>
          <div className="h-[200px] relative w-full bg-grey-box pt-[10px]">
            <div className="pricingText pricingText2   ">
              <div className="flex pb-[5px] pricingText2">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick" className="w-[15px] h-[15px] " />

                </div>
                1 room for debbug Local Scene and one on a subdomain
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick" className="w-[15px] h-[15px] " />

                </div>
                Limit of 20 member in a room
              </div>

              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick" className="w-[15px] h-[15px] " />
                </div>
                All features in custom mode
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick" className="w-[15px] h-[15px] " />

                </div>
                No custom verse branding  
              </div>
            </div>
             
            <div className="pricingBtn">Get started</div>
          </div>
        </div>
        <div style={{height:'410px'}} className="price-box price-box3  ">
          <div className="w-full h-[50px] text-whites bg-blue flex justify-center items-center pt-3 text-xl font-bold">
            Most Popular
          </div>
          <div className=" w-full   h-[60px] font-mono flex justify-center items-center text-xl text-pricing font-bold ">
            Personal
          </div>
          {/* <div className="flex   pricingPrice3 h-[60px] justify-center font-mono w-[250px] text-xl font-light">
           <span style={{  fontSize:'2.6rem',fontWeight:'900'}} className="w-[80px]  ">$12</span>
             <span className="w-[100px] text-xl font-light text-grey"  >/months</span>
            
          </div> */}
          <div className="flex w-full h-[70px] font-mono justify-center   text-xl font-light">
          <div className="w-auto flex items-center h-[40px]">

            <img  className="h-[40px] w-[70px] mr-[10px]" src="/p3.png"  alt="p1" /> 
            /months
          </div>
          </div>
          <div className="h-[230px] relative w-full bg-grey-box pt-[10px]">
              
          <div className="pricingText pricingText3  ">
              <div className="flex pb-[5px] pricingText3">
                <div className="w-[25px]  ">
                  <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />
                </div>
                1 room for local testing from us
                
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                custom logo
              </div>

              <div className="flex pb-[5px] pricingText3">
                <div className="w-[25px] mr-[10px] ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                custom domain 2 room on their own url
               with limit of 20 member in first
               room and 10 member in 2nd room
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                full body avatar
              </div>
            </div>

            
             
            <div className="pricingBtn">Get started</div>
          </div>
        </div>
        <div style={{height:'330px'}} className="price-box price-box4 ">
          <div className="flex w-full   h-[70px] font-mono justify-center items-center text-xl text-pricing font-bold ">
            Exhibition
          </div>
          <div className="flex w-full h-[70px] font-mono justify-center   text-xl font-light">
            <img  className="h-[30px] w-[50px] mr-[10px]" src="/p4.png"  alt="p1" /> 
            /months
          </div>
          <div className="h-[190px] relative w-full bg-grey-box">
          <div className="pricingText pricingText4  ">
              <div className="flex pb-[5px] pricingText4">
                <div className="w-[25px]  ">
                  <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />
                </div>
                All included in personal Plan
                
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                custom Theme
              </div>

              <div className="flex pb-[5px] pricingText4">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                Clickable Items , E-comemerce Support
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                full body avatar
              </div>
            </div>
            <div className="pricingBtn">Get started</div>
          </div>
        </div>
        <div style={{height:'270px'}} className="price-box price-box5 ">
          <div className="flex w-full   h-[60px] font-mono justify-center items-center text-xl text-pricing font-bold ">
          Exhibition
          </div>
          <div className="flex w-full h-[60px] font-mono justify-center   text-xl font-light">
            <img
              className="h-[30px] w-[50px] mr-[10px]"
              src="/p5.png"
              alt="p1"
            />{" "}
            /months
          </div>
          <div className="h-[150px] relative w-full bg-grey-box">
          <div className="pricingText pricingText5  ">
              <div className="flex pb-[5px] pricingText5">
                <div className="w-[25px]  ">
                  <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />
                </div>
                All included in personal Plan
                
              </div>
              <div className="flex pb-[5px]">
                <div className="w-[25px]  ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                custom Theme
              </div>

              <div className="flex pb-[5px] pricingText3">
                <div className="w-[25px] mr-[10px] ">
                <img src="/tick.png"  alt="tick"  className="w-[15px] h-[15px] " />

                </div>
                 
              </div>
               
            </div>
            <div className="pricingBtn">Get started</div>
          </div>
        </div>
      </div>
    </div>
        {/* <PricingBox3/> */}
        {/* <PricingBox2/> */}

          <div className="mt-[40px] md:mt-[80px]">
            <div className="w-full text-center text-whites text-xl sm:text-3xl md:text-4xl font-white capitalize">
              propose a  <span className=" text-pink">custom</span> Pricing ?
            </div>
            <div className="pricingBtnCont my-6 ">
                <div className="m-auto w-[330px] cursor-pointer">
                  <img src="/btnContact.Png" alt="contact btn" />
                </div>
            </div>
          </div>
      </div>
    </div>
  );
}
