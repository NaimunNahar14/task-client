import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import AddedTask from "../Home/Task/AddedTask";
import Tasklist from "../Home/Task/Tasklist/Tasklist";
import TasklistUpdate from "../Home/Task/Tasklist/TasklistUpdate";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/addtask',
            element: <AddedTask></AddedTask>
        },
        {
            path:'/tasklist',
            element:<Tasklist></Tasklist>
        },
        {
            path:'/task/:id',
            element: <TasklistUpdate></TasklistUpdate>,
            loader:({params}) => fetch(`http://localhost:5000/task/${params._id}`)

        }
    
      ]
    }
  ]);
  export default router;