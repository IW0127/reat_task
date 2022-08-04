import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Sidebar() {
  const SidebarLinks = [
    {
      title: "MAIN CONCEPTS",
    },
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Project1",
      to: "/project1",
    },
    {
      title: "Jsx",
      to: "/jsx",
    },
    {
      title: "Rendering Elements",
      to: "/rendering-elements",
    },
    {
      title: "Form",
      to: "/form",
    },
    {
      title: "Lifting State Up",
      to: "/Lifting-State-Up",
    },
    {
      title: "Composition vs Inheritance",
      to: "/Composition-inheritance",
    },
    {
      title: "ADVANCED GUIDES",
    },
    {
      title: "Accessibility",
      to: "/accessibility",
    },
    {
      title: "Code-Splitting",
      to: "/code-splitting",
    },
    {
      title: "Context",
      to: "/context",
    },
    {
      title: "Error Boundaries",
      to: "/error-boundaries",
    },
    {
      title: "Forwarding Refs",
      to: "/forwarding-refs",
    },
    {
      title: "Fragment",
      to: "/fragment",
    },

    {
      title: "Refs and the DOM",
      to: "/refs-and-the-DOM",
    },
    {
      title: "Hooks",
    },
    {
      title: "State Hooks",
      to: "/state-hook",
    },
    {
      title: "Effect Hooks",
      to: "/effect-hook",
    },
    {
      title: "Custom Hooks",
      to: "/custom-hook",
    },
    {
      title: "UseMemo and UseCallback",
      to: "/memo-callback",
    },
    {
      title: "useImperativeHandle",
      to: "/useImperativeHandle",
    },
    {
      title: "Redux Hooks",
      to: "/redux",
    },
    {
      title: "About",
      to: "/about",
    },
  ];
  const [activeSide, setActive] = useState(0);
  const activeClass = (event) => {
    const id = event.target.pathname;
    setActive(id);
  };
  return (
    <div className="p-3 border-end overflow-auto" style={{ height: "92vh" }}>
      <div className="list-group">
        {SidebarLinks.map((nameLink, id) => {
          const activeSplitPath = window.location.pathname.split("/");
          if (nameLink.to) {
            return (
              <Link
                className={`list-group-item list-group-item-action
              ${
                nameLink.to === window.location.pathname
                  ? "active"
                  : `/${activeSplitPath[1]}` === nameLink.to
                  ? "active"
                  : ""
              }
               ${nameLink.to === activeSide ? "active" : ""} `}
                data-id={id}
                to={nameLink.to}
                key={id}
                onClick={activeClass}
              >
                {nameLink.title}
              </Link>
            );
          } else {
            return (
              <Link
                className="list-group-item list-group-item-action"
                data-id={id}
                to="#"
                key={id}
                style={{ fontWeight: "bold" }}
              >
                {nameLink.title}
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
}

export default memo(Sidebar);
