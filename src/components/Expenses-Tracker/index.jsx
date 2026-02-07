import { useState } from "react";
import "./style.css";

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const value = Number(amount);
    const newTransaction = {
      id: Date.now(),
      text,
      amount: value,
      type,
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setText("");
    setAmount("");
    setType("expense");
  };

  const handleDelete = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  const incomeTotal = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenseTotal = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = incomeTotal - expenseTotal;

  return (
    <div className="tracker-container">
      <h1>Expense Tracker</h1>

      <h2 className="balance">
        Balance: {balance >= 0 ? "+" : "-"}${Math.abs(balance).toFixed(2)}
      </h2>

      <div className="totals">
        <div>
          <h3>Income</h3>
          <p className="income">+${incomeTotal.toFixed(2)}</p>
        </div>
        <div>
          <h3>Expense</h3>
          <p className="expense">-${expenseTotal.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={handleAddTransaction} className="transaction-form">
        <h3>Add Transaction</h3>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Salary, Rent..."
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500"
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>

      <h3>History</h3>
      {transactions.length === 0 && <p>No transactions yet.</p>}

      <ul className="transaction-list">
        {transactions.map((t) => (
          <li key={t.id} className={`transaction-item ${t.type}`}>
            <span>{t.text}</span>
            <span>
              {t.type === "income" ? "+" : "-"} ${t.amount.toFixed(2)}
            </span>
            <button onClick={() => handleDelete(t.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
