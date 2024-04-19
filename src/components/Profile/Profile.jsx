import {
  ArrowLeft,
  ArrowUpFromLine,
  BarChart2,
  BellPlus,
  Calendar,
  Ellipsis,
  Heart,
  Link,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import React from "react";
import NameWithSub from "../NameWithSub/NameWithSub.jsx";
import profileCover from "../../assets/profile-cover.jpeg";
import profilePhoto from "../../assets/profile-photo.png";
import Image from "../Image/Image.jsx";
import Button from "../Button/Button.jsx";
import userImage1 from "../../assets/user-photo-1.jpg";
import userImage2 from "../../assets/user-photo-2.jpg";
import userImage3 from "../../assets/user-photo-3.jpg";
import userImage4 from "../../assets/user-photo-4.jpg";

function Profile() {
  return (
    <div className="h-full max-w-[500px] border-e border-[#333333] text-xs">
      <div className="flex items-center justify-start gap-6 py-1 px-3">
        <ArrowLeft size="20px" />
        <NameWithSub
          name="React"
          sub="2,611 posts"
          nameStyle="font-semibold text-base"
        />
      </div>
      <img src={profileCover} alt="profile cover photo" />
      <div className="flex justify-end items-center relative p-2">
        <div className="rounded-full p-1 bg-black w-fit absolute top-0 translate-y-[-50%] left-3">
          <Image src={profilePhoto} alt="profile personal photo" style="w-24" />
        </div>
        <div className="flex items-center gap-2">
          <Button
            content={<Ellipsis size={"15px"} />}
            style="border border-[#5e5e5e]"
          />
          <Button
            content={<BellPlus size={"15px"} />}
            style="border border-[#5e5e5e]"
          />
          <Button content="Following" style="border border-[#5e5e5e] px-3" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-3 p-2">
        <NameWithSub
          name="React"
          sub="@reactjs"
          nameStyle="font-semibold text-base"
        />
        <p className="">The library for web and native user interfaces</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Link color="#666" size="15px" />
            <a href="https://react.dev/" className="text-[#1D9BF0]">
              react.dev
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Calendar color="#666" size="15px" />
            <p className="text-secondary">Joined July 2013</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <NameWithSub
            name="267"
            sub="Following"
            containerStyle="flex items-center gap-1"
            nameStyle="text-[0.7rem]"
          />
          <NameWithSub
            name="708.1K"
            sub="Followers"
            containerStyle="flex items-center gap-1"
            nameStyle="text-[0.7rem]"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center w-[40px]">
            <Image src={userImage1} alt="user image 1" style="w-5 z-20" />
            <Image
              src={userImage2}
              alt="user image 2"
              style="w-5 translate-x-[-10px] z-10"
            />
            <Image
              src={userImage3}
              alt="user image 3"
              style="w-5 translate-x-[-20px]"
            />
          </div>
          <p className="text-secondary">
            Followed by Mohammad Kukhun, Yazen Alsade 💫 and 14 others you
            follow
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ul className="decoration-0 flex items-center justify-around border-b border-[#333333]">
          <li className="pb-3 px-1 border-b-2 border-[#1d9bf0] rounded-sm">
            <p>Posts</p>
          </li>
          <li className="pb-3 px-1">
            <p className="text-secondary">Replies</p>
          </li>
          <li className="pb-3 px-1">
            <p className="text-secondary">Media</p>
          </li>
          <li className="pb-3 px-1">
            <p className="text-secondary">Likes</p>
          </li>
        </ul>
      </div>
      <div className=" py-1 flex flex-col gap-1">
        <div className="flex items-center gap-2 px-10">
          <Repeat2 color="#666" size="15px" />
          <p className="text-secondary">React reposted</p>
        </div>
        <div className="flex items-center gap-2 px-4">
          <Image src={userImage4} alt="user image 4" style="w-9" />
          <div>
            <p className="font-bold">
              danabramov.bsky.social{" "}
              <span className="text-secondary font-normal">
                @dan_abramov - May29
              </span>
            </p>
            <p className="font-light">
              happy 10th birthday to{" "}
              <a href="#" className="text-[#1D9BF0]">
                @reactjs
              </a>
              !
            </p>
          </div>
        </div>
        <div>
          <ul className="decoration-0 flex items-center justify-around border-b border-[#333333] pt-2">
            <li className="pb-3 px-1">
              <button className="flex items-center gap-2">
                <MessageCircle color="#666" size="15px" />
                <p className="text-secondary">46</p>
              </button>
            </li>
            <li className="pb-3 px-1">
              <button className="flex items-center gap-2">
                <Repeat2 color="#666" size="15px" />
                <p className="text-secondary">675</p>
              </button>
            </li>
            <li className="pb-3 px-1">
              <button className="flex items-center gap-2">
                <Heart color="#666" size="15px" />
                <p className="text-secondary">3701</p>
              </button>
            </li>
            <li className="pb-3 px-1">
              <div className="flex items-center gap-2">
                <BarChart2 color="#666" size="15px" />
                <p className="text-secondary">1.1M</p>
              </div>
            </li>
            <li className="pb-3 px-1">
              <button>
                <ArrowUpFromLine color="#666" size="15px" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;