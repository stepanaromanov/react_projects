import React, { useState, useEffect } from 'react';
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';
import {v4 as uuidV4} from "uuid";
import { ExpenseType } from "./types";

const ExpensesCalcApp = () => {
    const existingLocalData = localStorage.getItem("expenses");
    const initialExpenses = existingLocalData ? JSON.parse(existingLocalData) as ExpenseType[] : [];
  
    //states
    const [expenses, setExpenses] = useState<ExpenseType[]>(initialExpenses);
    const [date, setDate] = useState<string>("");
    const [amount, setAmount] = useState<number>(0);
    const [expense, setExpense] = useState<string>("");
    const [budget, setBudget] = useState<number>(0);
    const [id, setId] = useState<string>("");
    const [edit, setEdit] = useState<boolean>(false);

    //handlers
    const changeBudget = (e: React.ChangeEvent<HTMLInputElement>) => {
      setBudget(parseInt(e.target.value, 10));
    };

    const handleExpense = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExpense(e.target.value);
    };

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
      setDate(e.target.value);
    };

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(parseInt(e.target.value, 10));
    };

    const clearAllExpenses = () => {
      setExpenses([]);
      localStorage.clear();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (date !=="" && expense !=="" && amount > 0) {
        if (edit) {
          const tempExpenses = expenses.map((item) => {
            return item.id === id ? {...item, date, expense, amount} : item;
          });
          setExpenses(tempExpenses);
          setEdit(false); 
        } else {
          const singleExpense = { id: uuidV4(), date, expense, amount };
          setExpenses([...expenses, singleExpense]);
        }
        setExpense("");
        setAmount(0);
      } 
    };

    const handleEdit = (id: string) => {
      setEdit(true);
      const editedExpense = expenses.find((expense) => expense.id === id);
      if (editedExpense) {
          const expense = editedExpense.expense;
          const amount = editedExpense.amount;
          setExpense(expense);
          setAmount(amount);
          setId(id);
      }
    };

    const handleDelete = (id: string) => {
      if (window.confirm("Delete expense?")) {
        const filteredExpenses = expenses.filter(
          (expense) => expense.id !== id);
        setExpenses(filteredExpenses);
      }
    };

    const totalExpenses = (expenses: Array<ExpenseType>) => {
      return expenses.length === 0 ? 0 : (
        expenses.reduce((total, ex) => {
          return total += ex.amount;
        }, 0)
      );
    };

    const calculateSavings = (budget: number) => {
        return expenses.length === 0 && budget === 0 ? 0 : (
            budget - expenses.reduce((total, ex) => {
              return total += ex.amount;
            }, 0)
        );
    };

    useEffect(() => {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    return (
        <main className='container'>
            <title className='subtitle d-flex text-emerald-950'>Expenses Calculator</title>
            <section style={{ display: "grid", 
                              gridTemplateColumns: "repeat(2, 1fr)",
                              gap: "25px", 
                              margin: "1rem",
                            }}>
                <aside>
                    <section>
                        <div className="max-w 
                                        p-6
                                        mb-1
                                        bg-teal-600
                                        border 
                                        border-gray-200 
                                        rounded-lg 
                                        shadow">
                            <ExpensesForm edit={edit}
                                          handleSubmit={handleSubmit}
                                          date={date}
                                          handleDate={handleDate}
                                          expense={expense}
                                          handleExpense={handleExpense}
                                          amount={amount}
                                          handleAmount={handleAmount}
                            />
                        </div>
                        <div className="max-w 
                                        p-6
                                        bg-teal-600
                                        border 
                                        border-gray-200 
                                        rounded-lg 
                                        shadow">
                            <div className="font-normal 
                                      text-white">
                                <h3>Budget: $</h3>
                                <input  type="number"
                                        value={budget}
                                        onChange={changeBudget}
                                        placeholder='Define the budget'
                                        className="bg-gray-50 
                                                    border 
                                                    border-gray-300 
                                                    text-gray-900 
                                                    text-sm 
                                                    rounded-lg 
                                                    focus:ring-blue-500
                                                    focus:border-blue-500
                                                    block 
                                                    p-1.5 
                                                    mb-1"
                                />
                                <h3 className="mb-1">Total expenses: ${totalExpenses(expenses)}</h3>
                                <h3>Savings: ${calculateSavings(budget)}</h3>
                            </div>
                            </div>
                    </section>
                </aside>
                <section>
                  <ExpensesList 
                      expenses={expenses}
                      clearAllExpenses={clearAllExpenses}
                      handleDelete={handleDelete}
                      handleEdit={handleEdit} />
                </section>
            </section>
        </main>
    );
};

export default ExpensesCalcApp;