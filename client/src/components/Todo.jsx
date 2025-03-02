import React from 'react';
import toast from 'react-hot-toast'
import DeleteIcon from "../components/icons/DeleteIcons";  
import EditIcons from "../components/icons/EditIcons";
import TickIcons from '../components/icons/TickIcons';
import useSWR from "swr";


const Todo = () => {
  return (
    <div>
      <button onClick={ () => toast.success("Button Clicked")}>Click</button>
    </div>
   
  );
}

export default Todo