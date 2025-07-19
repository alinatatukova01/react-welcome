import React from "react";
import Togler from "./Togler";
import "./scene.css";
import Indicator from "./Indicator.js";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: true,
    };
  }

  toggleScene() {
    this.setState({
      scene: !this.state.scene,
    });
  }

  render() {
    const { scene } = this.state;
    return (
      <>
        <div className={scene ? "scene-on" : "scene-off"}>
          <Togler
            changeParentState={() => {
              this.toggleScene();
            }}
            btnText={scene ? "On" : "Off"}
          />
        </div>
        <Indicator text="I am child of Scene" />
      </>
    );
  }
}

export default Scene;
