import ExpenseItem from './ExpenseItem';
import { MdDelete } from "react-icons/md";
import { ExpensesListProps } from "./types";

const ExpensesList = ({ expenses, 
                        clearAllExpenses, 
                        handleDelete, 
                        handleEdit }: ExpensesListProps): JSX.Element => {
    return (
        <>
            <ul>
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} 
                                        expenseObj={expense} 
                                        handleDelete={handleDelete}
                                        handleEdit={handleEdit} />;
                })}
            </ul>
            {expenses.length > 0 ?
                (<button className="flex 
                                    justify-center 
                                    items-center 
                                    text-white
                                    bg-rose-500	 
                                    hover:bg-rose-700	
                                    focus:ring-4 
                                    focus:outline-none 
                                    focus:ring-rose-300 
                                    font-medium 
                                    rounded-lg 
                                    text-sm 
                                    w-full
                                    px-5 
                                    p-2.5 
                                    text-center" 
                            onClick={clearAllExpenses}>
                <MdDelete size={16} /> Clear all expenses
            </button>) : null }
        </>
    );
};

export default ExpensesList;