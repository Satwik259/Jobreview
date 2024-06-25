// import Attlassian from "../assets/Rectangle 43.png"
// const Attlasian = () => {
//   return (
//     <section className="w-[60%] h-[14rem]  flex flex-col pl-[5rem]">
//     <section className="flex">
//    <div className="flex">
//     <img src={Attlassian} className="h-[2rem] w-[2rem]" alt="logo"/>
//     <h1>Atlassian</h1>
//     <button>Follow</button>
//    </div>
//    <div>
//     <p>Company size</p>
//     <p>1K-2K Employees</p>
//    </div>
//    <div>
//     <p>Sector</p>
//    <p>Information Technology, Infrastructure</p>
//    </div>
//    <div>
//    <p>Founded In</p>
//    <p>2019</p>
//    </div>
// </section>
//    <section className="flex"> 
//    <div>
//    <p>Type</p>
//    <p>Private</p>
//    </div>
//    <div>
//    <p>Funding</p>
//    <p>Bootstrapped</p>
//    </div>
//    <div>
//    <p>Founded By</p>
//    <p>Scott Farquhar, Mike Cannon - Brookes</p>
//    </div>
//    </section>
//     </section>
//   )
// }

// export default Attlasian
import AttlassianLogo from "../assets/Rectangle 43.png";

const Attlasian = () => {
  return (
    <section className="w-[90%] h-[14rem]  flex flex-col pl-[5rem]  mt-[2rem] space-y-4">
      <section className="flex items-center space-x-4 mb-4">
        <img src={AttlassianLogo} className="h-[2rem] w-[2rem]" alt="logo" />
        <h1 className="text-xl font-semibold font-poppins">Atlassian</h1>
        <button className="bg-blue-200 font-poppins text-blue-800 px-3 py-1 rounded-[0.8rem]">Follow</button>
      </section>
      <section className="grid grid-cols-3 gap-4">
        <div>
          <p className=" text-[#6E6D6D] font-poppins font-semibold">Company size</p>
          <p className="font-poppins">1K-2K Employees</p>
        </div>
        <div>
          <p className=" text-[#6E6D6D] font-poppins font-semibold">Sector</p>
          <p className="font-poppins">Information Technology, Infrastructure</p>
        </div>
        <div>
          <p className="font-poppins text-[#6E6D6D] font-semibold">Founded In</p>
          <p className="font-poppins">2019</p>
        </div>
        <div>
          <p className="font-poppins text-[#6E6D6D] font-semibold">Type</p>
          <p className="font-poppins">Private</p>
        </div>
        <div>
          <p className=" text-[#6E6D6D] font-poppins font-semibold">Funding</p>
          <p className="font-poppins">Bootstrapped</p>
        </div>
        <div>
          <p className=" text-[#6E6D6D] font-poppins font-semibold">Founded By</p>
          <p className="font-poppins">Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </section>
    </section>
  );
};

export default Attlasian;

