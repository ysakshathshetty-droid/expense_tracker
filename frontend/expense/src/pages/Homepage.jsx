import React from 'react'
import { Link } from "react-router-dom";
import { FaChartPie, FaWallet, FaBullseye, FaTags } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
      <nav className="shadow-sm ">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-400 flex">
           <img className='me-3' src="./expense_symbol.png" alt="" style={{width:"40px",height:"40px"}}/> Expense Tracker
          </h1>

          <div className="flex gap-3">
            <Link
              to="/login"
              className="px-4 py-2 border border-white text-white  rounded-lg hover:bg-slate-100 hover:text-black"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Track Every Expense,
              <span className="text-blue-600"> Save More Money</span>
            </h1>

            <p className="mt-6 text-lg text-gray-400">
              Manage your expenses, analyze spending habits, monitor budgets,
              and achieve your financial goals with ease.
            </p>
          </div>
           <img className='mx-auto w-full max-w-sm md:max-w-md lg:w-[400px] h-[330px]' src="./homepagepic.svg" alt=""  />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-2">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className=" p-6 rounded-2xl shadow-md bg-indigo-900">
            <FaWallet className="text-4xl text-blue-600 mb-4" />
            <h3 className="font-bold text-xl">Expense Tracking</h3>
            <p className="text-gray-400 mt-2">
              Add and manage expenses efficiently.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md bg-indigo-900">
            <FaChartPie className="text-4xl text-green-600 mb-4" />
            <h3 className="font-bold text-xl">Analytics</h3>
            <p className=" text-gray-400 mt-2">
              Visualize spending patterns using charts.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md bg-indigo-900">
            <FaBullseye className="text-4xl text-red-600 mb-4" />
            <h3 className="font-bold text-xl">Budget Goals</h3>
            <p className=" text-gray-400 mt-2">
              Set monthly limits and stay on track.
            </p>
          </div>

          <div className=" p-6 rounded-2xl shadow-md bg-indigo-900">
            <FaTags className="text-4xl text-purple-600 mb-4" />
            <h3 className="font-bold text-xl">Categories</h3>
            <p className=" text-gray-400 mt-2">
              Organize expenses into categories.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Take Control of Your Finances?
        </h2>

        <p className=" text-gray-300 mt-4">
          Start tracking your expenses today.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
        >
          Create Free Account
        </Link>
      </section>
    </div>
  )
}
