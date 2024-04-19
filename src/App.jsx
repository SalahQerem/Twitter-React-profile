import "./App.css";
import Aside from "./components/Aside/Aside.jsx";
import Card from "./components/Card/Card.jsx";
import Profile from "./components/Profile/Profile.jsx";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow.jsx";

function App() {
  return (
    <div className="flex items-center h-screen bg-black text-white">
      <Aside />
      <div className="h-full max-w-[490px] border-e border-[#333333] text-xs">
        <Profile />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default App;
