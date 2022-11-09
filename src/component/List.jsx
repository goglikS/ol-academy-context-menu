import ContextMenu from "./ContextMenu";

const List = () => {
  const { xPos, yPos, popupRef, showMenu, Options } = ContextMenu();

  const data = [
    { id: 1, title: "Header 1", color: "#00FFFF" },
    { id: 2, title: "Header 2", color: "#7FFFD4" },
    { id: 3, title: "Header 3", color: "#088F8F" },
    { id: 4, title: "Header 4", color: "#5F9EA0" },
    { id: 5, title: "Header 5 ", color: "#5F8575" },
  ];

  return (
    <>
      <ul className="context-wrapper" ref={popupRef}>
        {data.map((item) => (
          <li key={item.id} style={{ background: item.color }}>
            {item.title}
          </li>
        ))}
      </ul>
      {showMenu && (
        <div className="menu-overlay">
          <div
            className="menu"
            style={{
              top: yPos,
              left: xPos,
            }}
          >
            <Options />
          </div>
        </div>
      )}
    </>
  );
};

export default List;
