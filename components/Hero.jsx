import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className='  bg-[url("/new-01.jpg")] bg-cover  bg-no-repeat bg-center  bg-fixed h-[calc(100vh)] font-Alexandria 
      flex items-center relative'
    >
      <div className=" absolute inset-0 bg-black/90 "></div>
      <div className=" relative flex flex-col gap-y-10 text-center container mx-auto px-4 z-10">
        <dir className=" items-end  text-white flex flex-col gap-[20px] md:gap-[40px]">
          <div>
            <h1 className=" text-3xl md:text-4xl lg:text-5xl ">
              جاري التطوير للاستفادة القصوي من الموقع
            </h1>
          </div>
          <div>
            <h1 className=" text-2xl md:text-4xl lg:text-5xl ">
               <span className=" text-mcolr-0"> شكراً </span> لتفهمك
            </h1>
          </div>
        </dir>
        <div className=" ">
          <p className=" lg:mx-[200px] md:mx-[100px] text-sm md:text-xl text-gray-300 tracking-widest">
            PARCEEL.COM
          </p>
        </div>
        

        
      </div>

      {/* <div className=" absolute -left-[300px] md:-left-[200px] lg:-left-[100px] top-0 md:top-[80px]  bg-mcolr-0 h-[2px] w-[1161px] rotate-[120deg] "></div> */}
      <div className=" absolute  top-[18px] md:top-[50px] lg:top-[42px] bg-mcolr-0 h-[2px] w-[100%]  "></div>
      <div className=" absolute  bottom-[50px]    bg-mcolr-0 h-[2px] w-[100%]  "></div>


     
    </div>
  );
};

export default Hero;
