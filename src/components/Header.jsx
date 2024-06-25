import { PiSuitcase } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import  Bell from "../assets/Rectangle 5.png"
import { PiHandCoins } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { GoPeople } from "react-icons/go";
function Header() {
  return (
    <nav className="flex w-screen  justify-between items-center border-[ #E7E7E7] border-[0.1rem] h-[6rem] pr-8 pl-8">
        <button className="h-[3rem] w-[4rem] font-poppins text-[#DC4A2D]  bg-[#E7E7E7]">LOGO</button>
        <div className="flex w-[32%] h-[70%]  p-[1rem] rounded-[2rem] items-center  justify-between">
            <div className="h-[3rem] gap-1 mr-4 rounded-[2rem] pl-1 w-[8rem] bg-[#DC4A2D] border-[2px] border-[#FCB4A5] flex items-center ">
            <PiSuitcase  className="h-[1.4rem] text-white  w-[1.4rem]"/>
                <div>
                <h1 className="text-[1.3rem] p-1 font-poppins  text-white ">Jobs</h1>
                </div>
             </div>
           
        <div className="shadow-custom-inset flex items-center border-customGray border-0.5 p-2 rounded-[2rem] gap-6 ">
            <div className="flex gap-1 items-center">
            <FiMessageSquare className="h-[1.4rem] text-[#B0B0B0]  w-[1.4rem]"  />
                <h1 className="text-[1.3rem] text-[#B0B0B0] font-poppins ">Messages</h1>
            </div>
            <div className="flex gap-1 items-center">
            <PiHandCoins  className="h-[1.4rem] text-[#B0B0B0]  w-[1.4rem]"/>
            <h1 className="text-[1.3rem] text-[#B0B0B0]  font-poppins"> Payments</h1>
            </div>
            <div className="flex gap-1 items-center">
            <GoPeople  className="h-[1.4rem] text-[#B0B0B0]  w-[1.4rem]"/>
            <h1 className="text-[1.3rem] text-[#B0B0B0] font-poppins"> Applications </h1>
            </div>
           </div>
        </div>
        <div className="flex items-center gap-2">
        <IoMdNotificationsOutline className="h-[1.8rem] w-[1.8rem]" />
                <img src={Bell}/>
                <IoIosArrowDown className="h-[1rem] w-[1rem]" />
            </div>
    </nav>
  );
}

export default Header;
