import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Search } from "lucide-react";
import Card from "../Card/Card.jsx";
import freeCodeCamp from "../../assets/freeCodeCamp.jpg";
import tailwindCSS from "../../assets/test.png";
import typescript from "../../assets/typescript.png";
import RecomendedPage from "../recomendedPage/RecomendedPage.jsx";

function Recommendations() {
  const SearchInput = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div className="w-full px-2 flex flex-col gap-3 h-full">
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
      <Card>
        <h3 className="font-bold text-sm">You might like</h3>
        <div className="flex flex-col gap-3 mt-2">
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
        <a href="#" className="text-[#1D9BF0] block mt-2 mb-1 text-xs">
          Show more
        </a>
      </Card>
    </div>
  );
}

export default Recommendations;
