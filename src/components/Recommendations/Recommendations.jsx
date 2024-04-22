import { Search } from "lucide-react";
import React from "react";
import freeCodeCamp from "../../assets/freeCodeCamp.jpg";
import tailwindCSS from "../../assets/test.png";
import typescript from "../../assets/typescript.png";
import Trend from "../Trend/Trend.jsx";
import RecomendedPage from "../recomendedPage/RecomendedPage.jsx";
import { SearchIconWrapper, SearchInput, StyledInputBase } from "./styls.js";
import { trends } from "./trends.js";

function Recommendations() {
  const renderTrends = trends.map((trend) => (
    <Trend
      key={trend.name}
      name={trend.name}
      posts={trend?.posts}
      type={trend?.type}
      isArabic={trend.isArabic}
    />
  ));

  return (
    <div className="w-[600px] ps-4 pe-2 flex flex-col gap-3 h-full pt-2">
      <SearchInput
        sx={{
          borderRadius: "9999px",
          width: "100%",
          backgroundColor: "rgba(255,255,255,0.1)",
          margin: "0 !important",
        }}
      >
        <SearchIconWrapper>
          <Search color="#666" size="15px" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          sx={{ fontSize: "14px" }}
        />
      </SearchInput>
      <div className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2">
        <h3 className="font-bold text-sm">You might like</h3>
        <div className="flex flex-col gap-3 mt-3">
          <RecomendedPage
            accountImg={tailwindCSS}
            name="Tailwind CSS"
            sub="@tailwindcss"
          />
          <RecomendedPage
            accountImg={typescript}
            name="TypeScript"
            sub="@typescript"
          />
          <RecomendedPage
            accountImg={freeCodeCamp}
            name="freeCodeCamp.org"
            sub="@freeCodeCamp"
          />
        </div>
        <a href="#" className="text-[#1D9BF0] block mt-4 mb-1 text-xs">
          Show more
        </a>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] rounded-xl px-3 py-2">
        <h3 className="font-bold text-sm">Trends for you</h3>
        <div className="flex flex-col gap-4 mt-3">{renderTrends}</div>
        <a href="#" className="text-[#1D9BF0] block mt-4 mb-1 text-xs">
          Show more
        </a>
      </div>
      <div className="ps-3">
        <p className="text-secondary text-[0.6rem] flex flex-wrap gap-x-2">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
          <a href="#" className="hover:underline">
            Accessibility
          </a>
          <a href="#" className="hover:underline">
            Ads info
          </a>
          <a href="#" className="hover:underline">
            More...
          </a>
          © 2024 X Corp.
        </p>
      </div>
    </div>
  );
}

export default Recommendations;
