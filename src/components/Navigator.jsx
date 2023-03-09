import React from "react";
import {
  IoBarChartOutline,
  IoBarChartSharp,
  IoCartSharp,
  IoCartOutline,
  IoLayersSharp,
  IoLayersOutline,
  IoDocumentTextSharp,
  IoDocumentTextOutline,
  IoListSharp,
  IoListOutline,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";

const options = [
  {
    title: "Dashboard",
    icon: <IoBarChartSharp />,
    phoneIcon: <IoBarChartOutline />,
    link: "/Dashboard",
  },
  {
    title: "Compras",
    icon: <IoCartSharp />,
    phoneIcon: <IoCartOutline />,
    link: "/Purchases",
  },
  {
    title: "Produtos",
    icon: <IoLayersSharp />,
    phoneIcon: <IoLayersOutline />,
    link: "/Products",
  },
  {
    title: "Relatórios",
    icon: <IoDocumentTextSharp />,
    phoneIcon: <IoDocumentTextOutline />,
    link: "/Reports",
  },
  {
    title: "Configurações",
    icon: <IoListSharp />,
    phoneIcon: <IoListOutline />,
    link: "/Settings",
  },
];

export const PhoneNavigator = () => {
  return (
    <>
      <div className="phone-navigator phone-only">
        {options.map((e) => {
          return (
            <NavLink to={e.link} className="navigator-option">
              <div>{e.phoneIcon}</div>
              <span>{e.title}</span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

const Navigator = () => {
  return (
    <>
      <div className="navigator phone-hide">
        <h3>Prototype</h3>
        <div>
          {options.map((e) => {
            return (
              <NavLink to={e.link} className="navigator-option">
                {e.icon}
                <span>{e.title}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navigator;
