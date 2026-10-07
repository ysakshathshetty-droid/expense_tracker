import React, { useContext } from "react";
import { PieChart,Pie,Cell,Tooltip,Legend, ResponsiveContainer,} from "recharts";
import { ExpenseContext } from "../context/ExpenseContext";

const COLORS = [
  "#14b8a6",
  "#3b82f6",
  "#f59e0b",
  "#8b5cf6",
  "#10b981",
  "#ef4444",
  "#f97316",
  "#6366f1",
];

export default function Expensepiechart() {
   const {filteredExpenses}=useContext(ExpenseContext)

       const categoryMap = {};

filteredExpenses.forEach((expense) => {
  categoryMap[expense.category] =
    (categoryMap[expense.category] || 0) +
    Number(expense.amount);
});

const categoryData = Object.entries(categoryMap).map(
  ([name, value]) => ({
    name,
    value,
  })
);
  return (
    <div className="bg-white rounded-xl shadow p-4 h-[400px] lg:h-[320px]  ">
      <h2 className="text-xl font-semibold text-center mb-4">
        Category Breakdown
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={87}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend wrapperStyle={{fontSize:'15px'}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}