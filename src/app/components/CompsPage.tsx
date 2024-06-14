import React from "react";
import ListComponent1 from "./base-components/ListComponent1";
import GameStyle from "./modules/GameStyle";

const CompsPage: React.FC = () => {
  return (
    <div className="">
      <ListComponent1 />
      <GameStyle />
    </div>
  );
};

export default CompsPage;
