import React, { useEffect } from "react";
import "./CardUser.css";
import getUsers from "../../services/User";

function CardUser() {
  useEffect(() => {
    var divId = (document.getElementById("newDiv") as HTMLDivElement) || null;
    getUsers.getUsers(divId);
  }, []);

  return <div id="newDiv" className="renderDiv"></div>;
}

export default CardUser;
