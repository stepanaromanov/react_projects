import { NewTaskStyle } from './TableStyle';
import { RiDeleteBin6Fill } from "react-icons/ri";

type NewTaskProps = {
  type: string;
  date: string;
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onTaskClick: (event: React.MouseEvent<HTMLLIElement>) => void;
};

const NewTask = ({ type, date, onDelete, onTaskClick }: NewTaskProps) => {
  return (
    <NewTaskStyle onClick={onTaskClick}>
        <div>
            <h3>{type}</h3>
            <small className='text-danger'>{date}</small>
        </div>
        <button className='button-light button-small' onClick={onDelete}>
            {<RiDeleteBin6Fill style={{
                fontSize: "1.2rem", 
                color: "dc143c",
                userSelect: "none",
                pointerEvents: "none"}}
            />}
        </button>
    </NewTaskStyle>
  );
};

export default NewTask;