import { MdEdit, MdAddCircle } from "react-icons/md";
import { ExpensesFormProps } from "./types";

const ExpensesForm = ({ edit,
                        handleSubmit,
                        date,
                        handleDate,
                        expense,
                        handleExpense,
                        amount,
                        handleAmount }: ExpensesFormProps): JSX.Element => {
        return (
                <form onSubmit={handleSubmit} className=''>
                        <div className="mb-1">
                                <label htmlFor="date" className="mb-1 font-normal text-white">
                                        Date
                                </label>
                                <input type="date" 
                                        id="date" 
                                        className="bg-gray-50 
                                                border 
                                                border-gray-300 
                                                text-gray-900 
                                                text-sm rounded-lg 
                                                focus:ring-blue-500
                                                focus:border-blue-500
                                                block 
                                                w-full
                                                p-1.5 
                                                mb-1" 
                                        placeholder="Enter the date"
                                        value={date}
                                        onChange={handleDate}
                                        required />
                        </div>
                        <div className="mb-1">
                                <label htmlFor="expense" className="mb-1 font-normal text-white">
                                        Expense
                                </label>
                                <input type="text" 
                                        id="expense" 
                                        className="bg-gray-50 
                                                        border 
                                                        border-gray-300 
                                                        text-gray-900 
                                                        text-sm 
                                                        rounded-lg 
                                                        focus:ring-blue-500
                                                        focus:border-blue-500
                                                        block 
                                                        w-full
                                                        p-1.5 
                                                        mb-1" 
                                        placeholder="e.g. rent" 
                                        value={expense}
                                        onChange={handleExpense}
                                        required />
                        </div>
                        <div className="mb-1">
                                <label htmlFor="amount" className="mb-1 font-normal text-white">
                                        Amount
                                </label>
                                <input type="number" 
                                        id="amount" 
                                        className="bg-gray-50 
                                                        border 
                                                        border-gray-300 
                                                        text-gray-900 
                                                        text-sm 
                                                        rounded-lg 
                                                        focus:ring-blue-500
                                                        focus:border-blue-500
                                                        block 
                                                        w-full
                                                        p-1.5 
                                                        mb-1" 
                                        placeholder="e.g. 300"
                                        value={amount}
                                        onChange={handleAmount}
                                        required />
                        </div>
                        {edit ? 
                        (<button type="submit" className="flex 
                                                        justify-center 
                                                        items-center 
                                                        text-white 
                                                        bg-emerald-950	 
                                                        hover:bg-emerald-500	
                                                        focus:ring-4 
                                                        focus:outline-none 
                                                        focus:ring-emerald-300
                                                        font-medium 
                                                        rounded-lg 
                                                        text-sm 
                                                        w-full
                                                        mt-1
                                                        px-5 
                                                        p-2.5 
                                                        text-center">
                        {<MdEdit size={16} />} Edit 
                        </button>) : 
                        (<button type="submit" className="flex 
                                                        justify-center 
                                                        items-center 
                                                        text-emerald-950
                                                        bg-orange-200	 
                                                        hover:bg-orange-500	
                                                        focus:ring-4 
                                                        focus:outline-none 
                                                        focus:ring-orange-300
                                                        font-medium 
                                                        rounded-lg 
                                                        text-sm 
                                                        w-full
                                                        mt-1
                                                        px-5 
                                                        p-2.5 
                                                        text-center">
                        {<MdAddCircle size={16} />} Add 
                        </button>)}
                </form>
        );
};

export default ExpensesForm; 