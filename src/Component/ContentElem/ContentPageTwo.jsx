import { DndProvider } from "react-dnd";
import { useState, useReducer } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ElementsDrag } from "./ContentPageTwo/ElementsDrag";
import { DropElementArea } from "./ContentPageTwo/DropElementArea";
import "./PageTwoStyles.css";
import { DragElementArea } from "./ContentPageTwo/DragElementArea";
import { reducer, initialState } from "./ContentPageTwoReducer";

const ContentPageTwo = (props) => {
  const [chart, setChart] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="contents vh-100 vw-100 overflow-hidden">
      <div className="titleArea contentBg">
        <p className="text-center p-2">Инструменты создания</p>
      </div>
      <DndProvider backend={HTML5Backend}>
        <DragElementArea
          dispatch={dispatch}
          setChart={setChart}
          chart={chart}
        />
        <DropElementArea state={state} chart={chart} setChart={setChart} />
        <ElementsDrag state={state} />
      </DndProvider>
    </div>
  );
};

export default ContentPageTwo;
