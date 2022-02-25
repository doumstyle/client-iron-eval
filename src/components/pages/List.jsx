import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import apiHandler from './../../api/handler';

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-jury.herokuapp.com/api/heroes")
      .then((response) => {
        console.log("Response >>>", response.data);
        setList(response.data);
      })
      .catch((err) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>Let's list, shall we ?</h1>
      <p>This component should display resources you must fetch.</p>
      <ul>
        {list &&
          list.map((hero) => {
            return (
              <li key={hero._id}>
                {hero.name} - {hero.powerstats.intelligence} smarts
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default List;
