import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainRow from "./components/MainRow";
import React, { useEffect, useState } from "react";
import fetchGoals from "./components/partials/Fetch";
import Todo from "./components/Todo";
import Timeline from "./components/Timeline";
import Details from "./components/Details";
import "./App.sass";

function App() {
  const [goals, setGoals] = useState([
    {
      name: "Work",
      list: [],
    },
    {
      name: "Personal",
      list: [],
    },
  ]);
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
      //console.log(result[0].list, result[1].name);
      setWorkShort({
        description: result[0].name,
        items: countUncompleted(result[0].list),
      });
      //console.log("IN USEEFFECT OF APP", result);
    });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //console.log("Fires on goals update");
    setWorkShort({
      description: goals[0].name,
      items: countUncompleted(goals[0].list),
    });
    setPersonalCounter({
      description: goals[1].name,
      items: countUncompleted(goals[1].list),
    });
  }, [goals]);

  function countUncompleted(list) {
    const reducer = (accum, value) =>
      value.completed === false ? accum + 1 : accum;
    //console.log("IN FUN", list.reduce(reducer, 0), list, list[0].completed);
    return list.reduce(reducer, 0);
  }
  /* 
  console.log("IN APP ", WorkShort , PersonalCounter);
  console.log("IN APP TOTAL ", goals); */

  return (
    <div className="App flex justify-around flex-wrap">
      <div className="watch-face w-52 h-64 my-12 text-center subpixel-antialiased shadow-2xl rounded-3xl overflow-hidden">
        <BrowserRouter basename="/Watch-widget">
          <Switch>
            <Route exact path="/">
              <MainRow WorkList={WorkShort} PersonalList={PersonalCounter} />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route path="/details/:name">
              <Details />
            </Route>
            <Route path="/calendar">
              <Timeline list={goals} />
            </Route>
            <Route path="/todo">
              <Todo onTodoChange={setGoals} todos={goals} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
