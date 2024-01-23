import React from "react";
import "./header.css";

const linksData = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "blog",
    href: "/blog/",
  },
  {
    name: "about",
    href: "/about/",
  },
];

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="list" role="list">
        {linksData.map(({ name, href }, index) => {
          return (
            <li key={index} className="list__item">
              <a className="item__link" href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
