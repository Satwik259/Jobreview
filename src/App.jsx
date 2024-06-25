import Aboutthejob from "./components/Aboutthejob";
import Attlasian from "./components/Attlasian";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import RightSection from "./components/RightSection";
import Selection from "./components/Selection";
import Skilldetails from "./components/Skilldetails";

function App() {
  return (
    <main className="flex w-screen" >
    <div className="w-[75%]">
      <Header/>
      <Selection/>
      <JobDetails/>
      <Skilldetails/>
      <Aboutthejob/>
      <Attlasian/>
    </div>
    <div className="w-[25%] pt-[10.5rem]">
      <RightSection/>
    </div>
    </main> 
  );
}

export default App;
