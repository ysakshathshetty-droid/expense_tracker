import React,{useContext,useState} from 'react'
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from "recharts";
import { ExpenseContext } from '../context/ExpenseContext';

export default function Graph() {
       const {filteredExpenses}=useContext(ExpenseContext)
       const dayMap = {};

filteredExpenses.forEach((expense) => {
  const day = new Date(expense.date).getDate();

  dayMap[day] =
    (dayMap[day] || 0) + Number(expense.amount);
});

const chartData = Object.entries(dayMap).map(
  ([day, amount]) => ({
    day,
    amount,
  })
).sort((a,b)=>a.day-b.day);
  return (
    <div className="bg-white rounded-xl shadow p-3 w-full">
      <h2 className="text-xl font-semibold mb-4">
        Expense Trend
      </h2>

      <div className=" h-[250px] sm:h-[280px] lg:h-[205px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tick={{ fontSize: 12 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
