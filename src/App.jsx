import { Box, ThemeProvider } from "@mui/material";
import "./App.css";
import Aside from "./components/Aside/Aside.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Recommendations from "./components/Recommendations/Recommendations.jsx";
import WhoToFollow from "./components/WhoToFollow/WhoToFollow.jsx";
import theme from "./Theme/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="bg-black text-white">
        <Box className="flex xl:w-[65%] lg:w-[78%] md:w-[90%] sm:w-[100%] mx-auto">
          <Aside />
          <Box className="profile placeholder:min-w-[490px] border-x border-[#333333] text-sm h-screen overflow-auto">
            <Profile />
            <WhoToFollow />
          </Box>
          <Recommendations />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
