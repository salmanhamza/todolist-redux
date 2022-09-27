import React from "react";
import { TABS } from "../redux/actions/constant";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";
const TodoTabs = ({ currentTab }) => {
  const dispatch = useDispatch();
  return TABS.map((tab) => (
    <button
      className={tab === currentTab ? "button selected" : "button"}
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
};

export default TodoTabs;
