import { useEffect, useState, useRef } from "react";

const ContextMenu = () => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const popupRef = useRef(null);

  const selectedLi = (valueOfLi) => {
    console.log(valueOfLi);
    setShowMenu(false);
  };

  const Menu = () => (
    <ul className="menu-options">
      <p className="center">choose option</p>
      <li onClick={() => selectedLi("edit")} className="menu-edit">
        Edit
      </li>
      <li onClick={() => selectedLi("remove")} className="menu-remove">
        Remove
      </li>
    </ul>
  );

  const handleContextMenu = (e) => {
    e.preventDefault();
    setXPos(`${e.pageX}px`);
    setYPos(`${e.pageY}px`);
    setShowMenu(true);
  };
  useEffect(() => {
    const handleClick = (e) => {
      if (popupRef.current !== null) {
      }
      if (!popupRef.current?.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu, popupRef, Menu };
};

export default ContextMenu;
