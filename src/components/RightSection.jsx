import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbUserCheck } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import Avatar from "../assets/Avatar.png"




const RightSection = () => {
  return (
    <aside className="w-[100%] pl-[2rem] pt-[2rem] flex flex-col gap-[1rem]  pr-[2rem]">
    <div className="flex  justify-between  "> 
        <div className="flex w-[8.5rem] justify-center rounded-[0.4rem] gap-[0.5rem] items-center ml-[-1rem] h-[2.4rem] border-[0.1rem]  border-orange-600  bg-orange-100">
        <RiDeleteBin6Line />
        <button >Delete job
         </button>
        </div> 
        <div className="flex w-[8.5rem] justify-center rounded-[0.4rem] gap-[0.5rem] items-center mr-[-1rem] h-[2.4rem] bg-orange-400">
        <MdOutlineModeEdit />
        <button >Edit job</button>
        </div>      
    </div>
    <div className="flex flex-col">

    <div className="flex  h-[3.7rem]  border-b-[0.1rem] border-[ #E7E7E7] pl-[1rem] pr-[1rem] items-center  justify-between">
        <div className=" gap-1 items-center flex"><GoPeople />
        <h2>Applicants</h2>
        </div>
        <div>
            400
        </div>
    </div>
    <div className="flex  h-[3.7rem]  border-b-[0.1rem] border-[ #E7E7E7] pl-[1rem] items-center pr-[1rem]  justify-between">
        <div className=" gap-1 items-center flex"><TbUserCheck />
        <h2>Matches</h2>
        </div>
        <div>
            147
        </div>
    </div>
    <div className="flex  h-[3.7rem]   border-b-[0.1rem] border-[ #E7E7E7] items-center pl-[1rem] pr-[1rem] justify-between" >
        <div className=" gap-1 flex items-center"><FiMessageSquare />
        <h2>Messages</h2>
        </div>
        <div>
            100
        </div>
    </div>
    <div className="flex  h-[3.7rem] items-center pl-[1rem] pr-[1rem]   justify-between">
        <div className="flex  gap-1 items-center"><GrView />
        <h2>Views</h2>
        </div>
        <div>
            800
        </div>
    </div>
    </div>

    <section className="h-[8rem] rounded-xl shadow-xl   flex flex-col gap-[2.456rem] ">
        <h3 className="text-center font-semibold">{`"A quote from a Atlassian"`}</h3>
        <div className="flex ml-[2rem] gap-[1rem]">
        <img src={Avatar} alt="logo"/>
        <div>
        <h2>Name</h2>
        <h2 className="text-gray-500">Description</h2>
        </div>
        </div>
    </section>
</aside>
  )
}

export default RightSection
