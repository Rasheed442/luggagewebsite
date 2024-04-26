import React from "react";
import "@arco-design/web-react/dist/css/arco.css";

import { Carousel } from "@arco-design/web-react";
function playground() {
  const imageSrc = ["rasheed", "Eniola", "Dhaniel"];
  return (
    <div style={{ backgroundColor: "red" }}>
      <Carousel style={{ width: "100%", height: "100%" }}>
        {imageSrc.map((s) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "40px",
              }}
            >
              <p>{s}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default playground;
