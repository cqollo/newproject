import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return { money: state.money - 200 };
  if (action.type === "sell_a_doughnut") return { money: state.money + 5 };
  if (action.type === "sell_a_pancake") return { money: state.money + 10 };
  if (action.type === "sell_a_meatroll") return { money: state.money + 20 };
  if (action.type === "sell_a_glasswine") return { money: state.money + 40 };
  if (action.type === "sell_a_chapati") return { money: state.money + 12 };
  if (action.type === "sell_a_coke") return { money: state.money + 2 };
  if (action.type === "Host_a_celebrity") return { money: state.money + 5000 };
  return state;
};

function UpdateIncome() {
  const initialState = { money: 10000 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1> Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: "buy_ingredients" })}>
          Shopping for veggies
        </button>
        <button onClick={() => dispatch({ type: "sell_a_doughnut" })}>
          Serve a snack to the customers
        </button>
        <button onClick={() => dispatch({ type: "sell_a_pancake" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "sell_a_meatroll" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "sell_a_glasswine" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "sell_a_chapati" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "sell_a_coke" })}>
          Host a celeb
        </button>
        <button onClick={() => dispatch({ type: "Host_a_celebrity" })}>
          Host a celeb
        </button>
      </div>
    </div>
  );
}

export default UpdateIncome;
