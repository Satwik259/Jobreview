import { BsDot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import Jobpreview from "../assets/Icon.png"


function JobDetails() {
  return (
    <section className="w-[100%] gap-4 flex flex-col justify-center h-[10rem]  border-[ #E7E7E7] border-[0.1rem] ">
   <div className="flex  pl-[2rem] w-[60%] justify-evenly items-center">
    <h1 className="text-3xl font-bold font-poppins">Senior Product Designer</h1>
    <p className="font-poppins">posted 2 days ago</p>
    <div className="flex items-center border-[0.1rem] border-black rounded-[1rem] pl-2 pr-4">
    <BsDot />
    <p className="font-poppins text-[0.8rem]  "> 
   Open </p>
   </div>
    </div>
  
   <div className="flex w-[30%] pl-[1.8rem] justify-evenly items-center">
    <div className="flex items-center gap-1">
      <CiLocationOn/>
    <h3 className="font-poppins">Delware, USA</h3> 
    </div>
    <div className="flex items-center gap-1">
    <img src={Jobpreview} alt=""/>
    <h3 className="font-poppins">$300k-$400k</h3>
    </div>
   </div>
   </section>
  );
}

export default JobDetails;
