import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainRow from "./components/MainRow";
import React, { useEffect, useState } from "react";
import fetchGoals from "./components/partials/Fetch";
import Todo from "./components/Todo";
import Timeline from "./components/Timeline";
import Details from "./components/Details";
import "./App.sass";

function App() {
  const [goals, setGoals] = useState([]);
  const [WorkShort, setWorkShort] = useState({
    description: "Work",
    items: -1,
  });
  const [PersonalCounter, setPersonalCounter] = useState({
    description: "Personal",
    items: -1,
  });
  useEffect(() => {
    fetchGoals().then((result) => {
      setGoals(result);
      setWorkShort({ description: "Work", items: countUncompleted(goals, 1) });
      //console.log("IN USEEFFECT OF APP", WorkShort);
    });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //console.log("Fires on goals update");
    setWorkShort({ description: "Work", items: countUncompleted(goals, 1) });
    setPersonalCounter({
      description: "Personal",
      items: countUncompleted(goals, 2),
    });
  }, [goals]);

  function countUncompleted(list, num) {
    const reducer = (accum, value) =>
      value.userId === num && value.completed === false ? accum + 1 : accum;
    //console.log("IN FUN", num, list.reduce(reducer, 0));
    return list.reduce(reducer, 0);
  }
  /* 
  console.log("IN APP ", WorkShort , PersonalCounter);
  console.log("IN APP TOTAL ", goals); */

  return (
    <div className="App flex justify-around flex-wrap">
      <div className="watch-face w-52 h-64 my-12 text-center subpixel-antialiased shadow-2xl rounded-3xl overflow-hidden">
        <BrowserRouter>
          <Switch>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/todo">
              <Todo onTodoChange={setGoals} list={goals} />
            </Route>
            <Route path="/calendar">
              <Timeline list={goals} />
            </Route>
            <Route exact path="/">
              <MainRow WorkList={WorkShort} PersonalList={PersonalCounter} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
