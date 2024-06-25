import { PiSuitcase } from "react-icons/pi";
import { FiMessageSquare } from "react-icons/fi";
import  Bell from "../assets/Rectangle 5.png"
import { PiHandCoins } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
function Header() {
  return (
    <nav className="flex w-screen  justify-between items-center border-[ #E7E7E7] border-[0.1rem] h-[6rem] pr-8 pl-8">
        <button className="h-[3rem] w-[4rem]  bg-[#E7E7E7]">LOGO</button>
        <div className="flex w-[36%] h-[70%] border-[#E7E7E7] border-[0.1rem] p-[1rem] rounded-[2rem] items-center  justify-between">
            <div className="h-[3rem] gap-1 rounded-[2rem] pl-6 w-[7rem] bg-orange-500 flex items-center ">
            <PiSuitcase  className="h-[1.4rem] text-white  w-[1.4rem]"/>
                <div>
                <h1 className="text-[1.3rem] text-white ">Jobs</h1>
                </div>
             </div>
            <div className="flex gap-1 items-center">
            <FiMessageSquare className="h-[1.4rem]  w-[1.4rem]"  />
                <h1 className="text-[1.3rem] ">Messages</h1>
            </div>
            <div className="flex gap-1 items-center">
            <PiHandCoins  className="h-[1.4rem]  w-[1.4rem]"/>
            <h1 className="text-[1.3rem]"> Payments</h1>
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
