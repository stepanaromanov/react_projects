export type ExpenseType = {
    date: string;
    expense: string; 
    amount: number;
    id: string;
};

export type ExpensesItemProps = {
    expenseObj: ExpenseType;
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
};

export type ExpensesFormProps = {
    edit: boolean;
    handleSubmit: React.FormEventHandler<HTMLFormElement>;
    date: string;
    handleDate: React.ChangeEventHandler<HTMLInputElement>;
    expense: string;
    handleExpense: React.ChangeEventHandler<HTMLInputElement>;
    amount: number;
    handleAmount: React.ChangeEventHandler<HTMLInputElement>;
};

export type ExpensesListProps = {
    expenses: Array<ExpenseType>; 
    clearAllExpenses: React.MouseEventHandler<HTMLButtonElement>;
    handleDelete: (id: string) => void;
    handleEdit: (id: string) => void;
};

/*

//uuid additional checking

// use a brand to create a tagged type
export type UUID = string & { __uuid: void };

//uuid type regex
const UUID_REGEX = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

// type guard to assert a string is a valid uuid
export function isUUID(uuid: string): uuid is UUID {
  return UUID_REGEX.test(uuid);
}

*/