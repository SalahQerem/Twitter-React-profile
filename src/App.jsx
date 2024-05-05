import "./App.css";
import Aside from "./components/Aside/Aside.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Recommendations from "./components/Recommendations/Recommendations.jsx";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow.jsx";

function App() {
  return (
    <div className="bg-black text-white">
      <div className="flex items-top xl:w-[60%] lg:w-[75%] md:w-[90%] sm:w-[100%] mx-auto h-full">
        <Aside />
        <div className="h-full min-w-[490px] border-e border-[#333333] text-xs">
          <Profile />
          <WhoToFollow />
        </div>
        <Recommendations />
      </div>
    </div>
  );
}

export default App;
