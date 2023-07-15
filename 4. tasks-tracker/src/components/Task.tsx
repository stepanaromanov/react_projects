type TaskProps = {
    date: string;
    setDate: React.ChangeEventHandler<HTMLInputElement>;
    type: string;
    setType: React.ChangeEventHandler<HTMLInputElement>;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Task = ({ date, 
                setDate, 
                type, 
                setType, 
                onClick }: TaskProps) => {
  return (
    <div className='d-flex' style={{
        justifyContent: "space-between",
        borderBottom: "1px solid #666",
        marginBottom: "2rem",
    }}
    >
        <input 
            type="datetime-local" 
            value={date} 
            onChange={setDate} 
        />
        <input 
            type="text" 
            value={type} 
            onChange={setType}
            placeholder="Specify the task"
        />
        <button className="button-main" onClick={onClick}>{"+ Add"}</button>
    </div>
  );
};

export default Task;