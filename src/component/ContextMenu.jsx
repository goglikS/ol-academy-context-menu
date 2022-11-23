import { useEffect, useState, useRef } from "react";

const ContextMenu = () => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);
  const popupRef = useRef(null);
  const [contextText, setContentText] = useState("");

  const selectedLi = (option) => {
    console.log(option, contextText);
    setShowMenu(false);
  };

  const Options = () => (
    <ul className="menu-options">
      <p>{contextText}</p>
      <li onClick={() => selectedLi("edit")} className="menu-edit">
        Edit
      </li>
      <li onClick={() => selectedLi("remove")} className="menu-remove">
        Remove
      </li>
    </ul>
  );

  useEffect(() => {
    const handleClick = ({ target }) => {
      if (!popupRef.current?.contains(target)) {
        setShowMenu(false);
        setContentText("");
      }
    };

    const handleContextMenu = (e) => {
      if (popupRef.current !== null && popupRef.current?.contains(e.target)) {
        e.preventDefault();
        setContentText(e.target.innerText);
        setXPos(`${e.pageX}px`);
        setYPos(`${e.pageY}px`);
        setShowMenu(true);
      }
    };

    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    return function cleanUp() {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("click", handleContextMenu);
    };
  }, []);

  return { xPos, yPos, showMenu, popupRef, Options };
};

export default ContextMenu;
