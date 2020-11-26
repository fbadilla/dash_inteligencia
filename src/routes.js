/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import DashboardAraya from "views/DashboardAraya.jsx";
import DashboardMatta from "views/DashboardMatta.jsx";
import DashboardUCentral from "views/DashboardUCentral.jsx";
import DashboardUbo from "views/DashboardUbo.jsx";
import DashboardZanartu from "views/DashboardZanartu.jsx";
//import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
//import Maps from "views/Maps.jsx";
//import Notifications from "views/Notifications.jsx";
//import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard General",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  //NO SE UTILIZARA EN 1 ESTAPA
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/araya",
    name: "R. ARAYA",
    icon: "pe-7s-headphones",
    component: DashboardAraya,
    layout: "/admin"
  },
  {
    path: "/matta",
    name: "MATTA",
    icon: "pe-7s-headphones",
    component: DashboardMatta,
    layout: "/admin"
  },
  {
    path: "/ucentral",
    name: "UCENTRAL",
    icon: "pe-7s-headphones",
    component: DashboardUCentral,
    layout: "/admin"
  },
  {
    path: "/ubo",
    name: "UBO",
    icon: "pe-7s-headphones",
    component: DashboardUbo,
    layout: "/admin"
  },
  {
    path: "/zanartu",
    name: "ZAÑARTU",
    icon: "pe-7s-headphones",
    component: DashboardZanartu,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
   {
     path: "/typography",
     name: "Typography",
     icon: "pe-7s-news-paper",
     component: Typography,
     layout: "/admin"
   },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  //NO UTILIZAREMOS EN 1 ESTAPA
  /*{
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
