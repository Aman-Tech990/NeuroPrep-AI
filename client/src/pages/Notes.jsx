import React, { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import TopicForm from "../components/TopicForm";
import Sidebar from "../components/Sidebar";
import FinalResult from "../components/FinalResult";

const Notes = () => {
    const navigate = useNavigate();

    const { userData } = useSelector((state) => state.user);
    const credits = userData?.user?.credits ?? 0;

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    console.log("Generated Result :", result);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8">

            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                        NeuroPrep AI
                    </h2>

                    <p className="text-sm text-white mt-1">
                        AI-powered exam-oriented notes & revision
                    </p>
                </div>

                <div className="flex items-center gap-4 flex-wrap">

                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white">
                        <span className="text-xl">💎</span>

                        <span className="font-semibold">
                            {credits}
                        </span>

                        <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/pricing")}
                            className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center cursor-pointer"
                        >
                            +
                        </motion.span>
                    </button>

                    <button
                        onClick={() => navigate("/history")}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white/20 transition"
                    >
                        📚 My Notes
                    </button>

                </div>
            </motion.header>

            <TopicForm
                loading={loading}
                setLoading={setLoading}
                setResult={setResult}
                setError={setError}
            />

            {loading && (
                <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-center mt-6 font-semibold text-gray-700"
                >
                    Generating exam-focused notes...
                </motion.div>
            )}

            {error && (
                <div className="mt-5 text-center text-red-600 font-semibold">
                    {error}
                </div>
            )}

            {!result && !loading && (
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="mt-10 h-72 rounded-2xl border border-dashed border-gray-300 bg-white/60 shadow-inner flex flex-col items-center justify-center"
                >
                    <span className="text-5xl">📘</span>

                    <p className="text-gray-500 mt-3">
                        Generated notes will appear here
                    </p>
                </motion.div>
            )}

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10"
                >
                    <div className="lg:col-span-1">
                        <Sidebar result={result} />
                    </div>

                    <div className="lg:col-span-3 rounded-2xl bg-white shadow-xl p-6">
                        <FinalResult result={result} />
                    </div>
                </motion.div>
            )}

        </div>
    );
};

export default Notes;