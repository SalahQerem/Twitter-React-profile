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
import NameWithSub from "../NameWithSub/NameWithSub.jsx";

export const mainColor = "#61DAFB";

function Aside() {
  const renderAsideItems = asideItems.map((item) => (
    <li key={item.name}>
      <AsideItem icon={item.icon} name={item.name} />
    </li>
  ));
  return (
    <div className="flex items-top justify-between h-full flex-col p-2 min-w-[220px] border-e border-[#333333]">
      <div>
        <a href="" className="">
          <FontAwesomeIcon icon={faXTwitter} size="2x" color="white" />
        </a>
        <ul className="mt-5 decoration-0 flex flex-col gap-6">
          {renderAsideItems}
        </ul>
        <div className="mt-5">
          <Button style="bg-mainColor w-[180px] py-2" content="Post" />
        </div>
      </div>
      <a href="#" className="flex items-center justify-between gap-3">
        <Image src={profileImage} alt="uset profile image" style="w-10" />
        <NameWithSub name="Mohammad Dwika..." sub="@MohammadDwika..." />
        <Ellipsis size={"20px"} />
      </a>
    </div>
  );
}

export default Aside;
