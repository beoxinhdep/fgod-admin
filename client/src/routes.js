/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import TypeRoom from "views/TypeRoom.jsx";
import Customer from "views/Customer.jsx";
import Role from "views/Role.jsx";
import Bill from "views/Bill.jsx";
import Statistic from "views/Statistic.jsx";
import Employee from "views/Employee.jsx";
import RoomMap from "views/RoomMap";
import Booking from "views/Booking";
import Room from "views/Room";

var routes = [
  {
    path: "/roommap",
    name: "Sơ đồ phòng",
    icon: "	fas fa-building",
    component: RoomMap,
    layout: "/admin"
  },
  {
    path: "/booking",
    name: "Đặt phòng",
    icon: "fa fa-address-card",
    component: Booking,
    layout: "/admin"
  },
  {
    path: "/typeroom",
    name: "Loại phòng",
    icon: "	fas fa-bed",
    component: TypeRoom,
    layout: "/admin"
  },
  {
    path: "/everyroom",
    name: "Quản lí phòng",
    icon: "	fas fa-building",
    component: Room,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Khách hàng",
    icon: "	far fa-user-circle",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "Nhân viên",
    icon: "nc-icon nc-single-02",
    component: Employee,
    layout: "/admin"
  },
  {
    path: "/role",
    name: "Bộ phận",
    icon: "fas fa-users",
    component: Role,
    layout: "/admin"
  },
  {
    path: "/bill",
    name: "Hóa đơn",
    icon: "fas fa-clipboard-list",
    component: Bill,
    layout: "/admin"
  },
  {
    path: "/statistic",
    name: "Thống kê",
    icon: "fas fa-chart-bar",
    component: Statistic,
    layout: "/admin"
  },
];
export default routes;
