import Figma from "../assets/image 1.png";
import Adobexd from "../assets/image 2.png";
import Adobe from "../assets/image 6.png";

const Skilldetails = () => {
  return (
    <section className="w-[100%] border-b-[0.1rem] border-[ #E7E7E7] flex items-center h-[11rem]  pl-[0.6rem]">
      <div className="flex w-[70%] font-poppins  justify-evenly">
        <div className="flex flex-col gap-[0.4rem]">
          <p>Skills Required</p>
          <div className="flex items-center bg-[#FFFFFF] p-[0.3rem] rounded-lg shadow-inner  border-[#D0D5DD] gap-1 border-[0.1rem]">
            <img className="h-[1rem] w-[1rem]" src={Figma} alt="logo" />
            <p>Figma</p>
          </div>

          <div className="flex items-center p-[0.3rem]  bg-[#FFFFFF] rounded-lg shadow-inner border-[0.1rem] border-[#D0D5DD] gap-1">
            <img  className="h-[1rem] w-[1rem]" src={Adobexd} alt="logo" />
            <p>Adobe illustrator</p>
          </div>

          <div className="flex items-center p-[0.3rem] shadow-inner rounded-lg border-[0.1rem] bg-[#FFFFFF] border-[#D0D5DD] gap-1">
            <img className="h-[1rem] w-[1rem]" src={Adobe} alt="logo" />
            <p>Adobe XD</p>
          </div>
        </div>
        <div>
          <p>Preferred Language</p>
          <p>Engish</p>
        </div>
        <div>
          <p>Type</p>
          <p>Full time</p>
        </div>
        <div>
          <p>Years of Experience</p>
          <p>3+ Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default Skilldetails;
