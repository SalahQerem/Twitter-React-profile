import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import RecomendedPage from "../RecomendedPage/RecomendedPage.jsx";

const WhoToFollowItem = ({
  name,
  sub,
  description,
  otherFollowers,
  accountImg,
  descriptionLink,
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 ps-5">
        <FontAwesomeIcon icon={faUser} color="#666" fontSize="10px" />
        <p className="text-secondary text-[0.6rem] font-medium">
          {otherFollowers} others follow
        </p>
      </div>
      <RecomendedPage
        name={name}
        sub={sub}
        accountImg={accountImg}
        description={description}
        descriptionLink={descriptionLink}
      />
    </div>
  );
};

export default WhoToFollowItem;
