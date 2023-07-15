import { useState } from "react";
import { TableStyle } from "./TableStyle";
import Task from "./Task";
import NewTask from "./NewTask";

type NewTaskProps = {
    date: string;
    type: string;
    completed: string;
};

type Task = {
    date: string;
    type: string;
};

const TasksTrackerApp = () => {
    const [newTask, setNewTask] = useState<NewTaskProps>({
        date: "",
        type: "",
        completed: "",
    });

    const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask({...newTask, date: event.target.value});
        console.log(event.target.value);
    };
    
    const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setNewTask({...newTask, type: event.target.value});
        console.log(event.target.value);
    };

    const tasks = [ {date: "2023-07-13T21:38", type: "first task"},
                    {date: "2023-07-13T21:54", type: "second task"}];

    const [taskList, setTaskList] = useState<Task[]>(tasks);

    const addNewTask = () => {
        setTaskList([...taskList, {date: newTask.date, type: newTask.type}]);
    };

    const handleCompleted = (event: React.MouseEvent<HTMLLIElement>): void => {
        (event.target as HTMLLIElement).classList.toggle("completed");
    };

    const handleDeleteTask = (event: React.MouseEvent<HTMLButtonElement>) : void => {
        window.confirm("Do you want to delete this task?") && (event.target as HTMLButtonElement).parentElement?.remove();
    };

    return (
        <>
            <div className="title d-flex">Tasks Tracker</div>
            <TableStyle>
                <ul className="table-head">
                    <li>Date</li>
                    <li>Task</li>
                </ul>
                <Task 
                    date={newTask.date}
                    setDate={handleChangeDate}
                    type={newTask.type}
                    setType={handleChangeType}
                    onClick={addNewTask}
                />
                <ul className="table-row">
                    {taskList.map((item, index) => {
                       return item.date !== "" && item.type !== "" ? 
                        <NewTask 
                            key={index}
                            date={item.date}
                            type={item.type}
                            onTaskClick={handleCompleted}
                            onDelete={handleDeleteTask}
                        /> : null;
                    })}
                </ul>
            </TableStyle>
        </>
    );
};

export default TasksTrackerApp;