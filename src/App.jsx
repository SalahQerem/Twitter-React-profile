import "./App.css";
import Aside from "./components/Aside/Aside.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Recommendations from "./components/Recommendations/Recommendations.jsx";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow.jsx";

function App() {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex items-center w-[60%] mx-auto h-full">
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
