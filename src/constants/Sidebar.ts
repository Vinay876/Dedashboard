import { GoProjectTemplate } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCampaign } from "react-icons/md";
import { MdOutlineAccountTree } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import Dashboard from "../pages/Dashboard";
import Logout from "../pages/Logout";
import MyAccount from "../pages/MyAccount";
import Clients from "../pages/Clients";
import Projects from "../pages/Projects";
import Designs from "../pages/Designs";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    shortPath: "/",
    Icon: IoHomeOutline,
    Element: Dashboard,
  },
  {
    title: "Clients",
    path: "/dashboard/clients",
    shortPath: "/clients",
    Icon: MdOutlineCampaign,
    Element: Clients,
  },

  {
    title: "Projects",
    path: "/dashboard/projects",
    shortPath: "/projects",
    Icon: MdOutlineAccountTree,
    Element:Projects,
  },
  {
    title: "Designs",
    path: "/dashboard/designs",
    shortPath: "/designs",
    Icon: GoProjectTemplate,
    Element: Designs,
  },
  {
    title: "MyAccount",
    path: "/dashboard/myaccount",
    shortPath: "/myaccount",
    Icon: IoIosNotifications,
    Element: MyAccount,
  },
  {
    title: "Logout",
    path: "/logout",
    shortPath: "/logout",
    Icon: CiLogout,
    Element: Logout,
  }
];

