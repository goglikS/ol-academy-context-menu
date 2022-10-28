import ContextMenu from "./ContextMenu";
import "./App.css";

const App = () => {
  const { xPos, yPos, showMenu, popupRef, Menu } = ContextMenu();

  return (
    <div className="App">
      {showMenu ? (
        <div className="menu-overlay" ref={popupRef}>
          <h1 className="center">Context Menu</h1>
          <div
            className="menu"
            style={{
              top: yPos,
              left: xPos,
            }}
          >
            <Menu />
          </div>
        </div>
      ) : (
        <h1 className="center">Right Click to get Context Menu</h1>
      )}
    </div>
  );
};
export default App;
