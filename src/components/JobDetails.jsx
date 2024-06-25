import { BsDot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Jobpreview from "../assets/Icon.png"


function JobDetails() {
  return (
    <section className="w-[100%] gap-4 flex flex-col justify-center h-[8.4rem]  border-[ #E7E7E7] border-[0.1rem] ">
   <div className="flex  pl-[2rem] w-[60%] justify-evenly items-center">
    <h1 className="text-3xl font-bold font-poppins">Senior Product Designer</h1>
    <p className="font-poppins  text-[0.65rem]">posted 2 days ago</p>
    <div className="flex items-center border-[0.1rem] border-[#ABEFC6] bg-[#ECFDF3]  rounded-[1rem] pl-2 pr-4">
    <BsDot className="text-[#17B26A]" />
    <p className="font-poppins text-[0.7rem]  text-[#067647] "> 
   Open </p>
   </div>
    </div>
  
   <div className="flex w-[30%] pl-[3rem] justify-evenly items-center">
    <div className="flex items-center gap-1">
      <CiLocationOn/>
    <h3 className="font-poppins text-[1rem]">Delware, USA</h3> 
    </div>
    <div className="flex items-center gap-1">
    <img src={Jobpreview} alt=""/>
    <h3 className="font-poppins  text-[1rem]">$300k-$400k</h3>
    </div>
   </div>
   </section>
  );
}

export default JobDetails;
