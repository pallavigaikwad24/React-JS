import React, { useState } from "react";
import data from "./data.json";
import './style.css';

import React, { Component } from 'react'


function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currId) {
    setSelected(currId === selected ? null : currId);
  }

  return (
    <div className="acc-wrapper">
        <div className="accordian">

      {data &&
        data.length > 0 ? (
            data.map((dataItem) => (
                <div className="item" key={dataItem.id}>
                  <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id && <div className="acc-content ">{dataItem.answer}</div>}
                </div>
              ))
            ) : (
                <div>No data Found</div>
            )
        }
        </div>
    </div>
  );
}

export default Accordian;

