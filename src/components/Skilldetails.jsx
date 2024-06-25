import Figma from "../assets/image 1.png";
import Adobexd from "../assets/image 2.png";
import Adobe from "../assets/image 6.png";

const Skilldetails = () => {
  return (
    <section className="w-[100%] border-b-[0.1rem] border-[ #E7E7E7] flex items-center h-[10.8rem]  pl-[0.6rem]">
      <div className="flex w-[70%] font-poppins  justify-evenly">
        <div className="flex flex-col gap-[0.4rem]">
          <p className="font-poppins text-[0.76rem] text-[#6E6D6D]">Skills Required</p>
          <div className="flex items-center bg-[#FFFFFF] p-[0.3rem] rounded-lg shadow-inner w-[5rem]  border-[#D0D5DD] gap-1 border-[0.1rem]">
            <img className="h-[1rem] w-[1rem]" src={Figma} alt="logo" />
            <p  className="font-poppins text-[0.76rem]">Figma</p>
          </div>

          <div className="flex items-center p-[0.3rem]  bg-[#FFFFFF] rounded-lg shadow-inner border-[0.1rem] border-[#D0D5DD] gap-1">
            <img  className="h-[1rem] w-[1rem]" src={Adobexd} alt="logo" />
            <p  className="font-poppins text-[0.76rem]">Adobe illustrator</p>
          </div>

          <div className="flex items-center p-[0.3rem] shadow-inner rounded-lg border-[0.1rem] w-[6rem] bg-[#FFFFFF] border-[#D0D5DD] gap-1">
            <img className="h-[1rem] w-[1rem]" src={Adobe} alt="logo" />
            <p  className="font-poppins text-[0.76rem]">Adobe XD</p>
          </div>
        </div>
        <div>
          <p className="font-poppins text-[#6E6D6D] text-[0.76rem]"> Preferred Language</p>
          <p  className="font-[400] font-poppins text-[0.76rem]" >Engish</p>
        </div>
        <div>
          <p  className="font-poppins text-[0.76rem] text-[#6E6D6D]">Type</p>
          <p  className=" font-[400] text-[0.76rem] font-poppins">Full time</p>
        </div>
        <div>
          <p  className="font-poppins text-[0.76rem] text-[#6E6D6D] ">Years of Experience</p>
          <p className="font-poppins  text-[0.76rem] font-[400]">3+ Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Skilldetails;
