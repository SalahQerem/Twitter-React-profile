import {
  Bell,
  Bookmark,
  CircleEllipsis,
  ClipboardList,
  Home,
  Mail,
  Search,
  User,
  Users,
} from "lucide-react";
import React from "react";

export const asideItems = [
  {
    icon: React.createElement(Home, null),
    name: "Home",
  },
  {
    icon: React.createElement(Search, null),
    name: "Explore",
  },
  {
    icon: React.createElement(Bell, null),
    name: "Notifications",
  },
  {
    icon: React.createElement(Mail, null),
    name: "Messages",
  },
  {
    icon: React.createElement(ClipboardList, null),
    name: "Lists",
  },
  {
    icon: React.createElement(Bookmark, null),
    name: "Bookmarks",
  },
  {
    icon: React.createElement(Users, null),
    name: "Communities",
  },
  {
    icon: React.createElement(User, null),
    name: "Profile",
  },
  {
    icon: React.createElement(CircleEllipsis, null),
    name: "More",
  },
];
