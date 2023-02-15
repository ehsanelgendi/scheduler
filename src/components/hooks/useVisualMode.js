import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // copy history to manage states
  let newHistory = [...history];

  const transition = function (newMode,  replace = false) {
    if (replace) {
      newHistory.pop();
    }
    setMode(newMode);
    newHistory = [...newHistory, newMode];
    setHistory(newHistory);
  };

  const back = function () {
    if(newHistory.length <= 1) return;

    newHistory.pop();
    setMode(newHistory[newHistory.length - 1]);
    setHistory(newHistory);
  };


  return { mode, transition, back };
};