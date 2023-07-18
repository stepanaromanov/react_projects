import { MdEdit, MdDelete } from "react-icons/md";
import { ExpenseItemStyle } from './styles/ExpenseItem.style';
import { ExpensesItemProps } from './types';

const ExpenseItem = ({ expenseObj,
                        handleDelete, 
                        handleEdit, 
                         }: ExpensesItemProps): JSX.Element => {
    const {id, date, amount, expense} = expenseObj;

    return (
        <ExpenseItemStyle>
            <div className="max-w
                            max-h-20
                            flex
                            flex-row
                            items-center
                            justify-between	
                            mb-1
                            p-1
                            bg-orange-200
                            text-emerald-950
                            border 
                            border-gray-200 
                            rounded-lg 
                            shadow">
                <div  className='items-start'>
                    <h3 className="text-emerald-950 font-bold">
                        {expense}
                    </h3>
                    <small className="text-emerald-950 italic">
                        {date}
                    </small>
                </div>
                <div className='text-emerald-950 flex flex-row'>
                    ${amount}
                </div>
                <div className="flex flex-row items-end">
                    <button className="flex 
                                        justify-center 
                                        text-white 
                                        bg-emerald-950	 
                                        hover:bg-emerald-500	
                                        focus:ring-4 
                                        focus:outline-none 
                                        focus:ring-emerald-300
                                        font-medium 
                                        rounded-lg 
                                        text-sm 
                                        px-1
                                        mt-1
                                        mb-1
                                        mr-1
                                        p-1 
                                        text-center"
                            onClick={() => handleEdit(id)}>
                        <MdEdit size={16}/>
                    </button>
                    <button className="flex 
                                        justify-center 
                                        text-white
                                        bg-rose-500	 
                                        hover:bg-rose-700	
                                        focus:ring-4 
                                        focus:outline-none 
                                        focus:ring-rose-300 
                                        font-medium 
                                        rounded-lg 
                                        text-sm 
                                        px-1
                                        mt-1 
                                        mb-1
                                        py-1 
                                        text-center"
                            onClick={() => handleDelete(id)}>
                        <MdDelete size={16}/>
                    </button>
                </div>
            </div>
        </ExpenseItemStyle>
    );
};

export default ExpenseItem;