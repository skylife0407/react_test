import React, {Component} from "react";
import MetisMenu from 'react-metismenu';
//import RouterLink from 'react-metismenu-router-link';
//import { adminRole } from "../../roles-sec";
//import hasPermission from "../../has-permission";

const menu = [
  {
    icon: "chart-pie",
    label: "Dashboard",
    to: "/"
  },
  {
    icon: "chart-bar",
    label: "Alerts",
    to: "#alerts",
  },
  {
    icon: "chart-bar",
    label: "Alerts_c",
    to: "#alerts_c",
  },
  {
    icon: "users",
    label: "Agents List",
    to: "#agentsList",
  },
  {
    icon: "cog",
    label: "Configurations",
    content: [
      {
        icon: "user-cog",
        label: "Users",
        to: "#users"
      },
      {
        icon: "cubes",
        label: "Objects",
        to: "#configurations/objects"
      },
      {
        icon: "file-alt",
        label: "Rules",
        to: "#rules"
      }
    ]
  }
];
class SideBar extends Component {
  constructor() {
    super();
    this.state = { };
  }
    render() {
    return(
        <div className="menu">
            <MetisMenu content={menu} activeLinkFromLocation />
        </div>
        
    );
  }
}

export default SideBar;
