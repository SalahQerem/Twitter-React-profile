import React from "react";
// import style from "./aside.module.css";
import AsideItem from "../AsideItem/AsideItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { asideItems } from "./asideItems.js";
import Button from "../Button/Button.jsx";
import Image from "../Image/Image.jsx";
import profileImage from "../../assets/profile-image.jpg";
import { Ellipsis } from "lucide-react";

export const mainColor = "#61DAFB";

function Aside() {
  const renderAsideItems = asideItems.map((item) => (
    <AsideItem key={item.name} icon={item.icon} name={item.name} />
  ));
  return (
    <div className="flex items-top justify-between h-full flex-col p-2 min-w-[210px] border border-[#333333]">
      <div>
        <div className="">
          <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />
        </div>
        <ul className="mt-5 decoration-0 flex flex-col gap-6">
          {renderAsideItems}
        </ul>
        <div className="mt-5">
          <Button style="bg-mainColor w-[180px] py-2" content="Post" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-3">
        <Image src={profileImage} alt="uset profile image" style="w-10" />
        <div className="text-[0.8rem]">
          <p className="font-bold">Mohammad Dwika...</p>
          <p className="text-[#666]">@MohammadDwika..</p>
        </div>
        <Ellipsis size={"20px"} />
      </div>
    </div>
  );
}

export default Aside;
