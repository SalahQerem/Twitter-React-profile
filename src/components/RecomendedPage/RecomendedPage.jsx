import React from "react";
import Button from "../Button/Button.jsx";
import Image from "../Image/Image.jsx";
import NameWithSub from "../NameWithSub/NameWithSub.jsx";

function RecomendedPage({
  name,
  sub,
  accountImg,
  description,
  descriptionLink,
}) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
        <Image src={accountImg} alt="account image" style="w-8 bg-white" />
        <div>
          <NameWithSub name={name} sub={sub} />
          {description && (
            <p className="font-normal text-[0.7rem]">
              {description}{" "}
              <a href="#" className="text-[#1D9BF0]">
                {descriptionLink}
              </a>
              .
            </p>
          )}
        </div>
      </div>
      <Button content="Follow" style="bg-white text-black px-3 text-[0.7rem]" />
    </div>
  );
}

export default RecomendedPage;
