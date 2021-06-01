import SkeletonIcon from "./components/SkeletonIcon";
import { AlgorithmIcon, TreeIcon } from "./Icons/Icons";
import ReactDOM from "react-dom";
import "./index.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <h1>SKELETON ICONS</h1>
      <div className="icons-wrapper">
        <SkeletonIcon
          icon={AlgorithmIcon}
          loading={true}
          width="100px"
          height="100px"
        />
        <SkeletonIcon
          icon={TreeIcon}
          loading={true}
          width="100px"
          height="100px"
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
