import { useState } from "react";
import "./App.scss";
import { arrow} from "./Assets/index";
import { Data } from "./data/data";
function App() {

  const handleOnClik = (id, e) => {    
    const p = document.querySelectorAll(".p");
    const img = document.querySelectorAll("img");
    Data.map((ele) => {
      if (ele.id == id) {
        p.forEach((p) => {
          if (p.getAttribute("data-id") == id) {
            p.classList.contains("no")
              ? p.classList.replace("no", "height")
              : p.classList.replace("height", "no");

          }
        });
      }
      img.forEach((img=>{
        if(img.getAttribute("data-id")== id ){
          img.classList.contains("down")
          ? img.classList.replace("down", "up")
          : img.classList.replace("up", "down");
        }
      }))
    });
  };

  return (
    <div className="App">
      <div className="img"></div>
      <div className="info">
        <h1>FAQ</h1>
        {Data.map((data) => (
          <div
            key={data.title}
            className="row"
            onClick={(e) => handleOnClik(data.id, e)}
          >
            <p>{data.title} <img className="down" data-id={data.id} src={arrow} /> </p>
            <p data-id={data.id} className={`p no`}>
              {data.description}
              <span>jj</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
