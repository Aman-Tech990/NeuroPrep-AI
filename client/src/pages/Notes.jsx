import React, { useState } from 'react';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import TopicForm from '../components/TopicForm';

const Notes = () => {

    const navigate = useNavigate();
    const { userData } = useSelector((state) => state.user);
    const credits = userData?.user?.credits;

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 py-8">

            <motion.header
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-10 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 px-8 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.7)] items-start flex md:items-center justify-between gap-4 flex-col md:flex-row"
            >
                <div
                    onClick={() => navigate("/")}
                    className="cursor-pointer"
                >
                    <h3
                        className='text-2xl font-bold bg-linear-to-r from-white via-gray-400 to-white bg-clip-text text-transparent'
                    >
                        NeuroPrep AI
                    </h3>

                    <p
                        className='text-sm text-white mt-1'
                    >
                        AI-powered exam-oriented notes & revision
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm cursor-pointer">
                        <span className='text-2xl'>💎</span>
                        <span className='text-white font-semibold'>{credits}</span>
                        <motion.span
                            onClick={() => navigate("/pricing")}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className='ml-2 h-5 w-5 flex items-center justify-center rounded-full bg-white text-xs font-bold'
                        >
                            ➕
                        </motion.span>
                    </button>

                    <button
                        onClick={() => navigate("/history")}
                        className="px-4 py-3 rounded-full text-sm font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20 transition flex items-center gap-2 cursor-pointer"
                    >
                        📚 My Notes
                    </button>

                </div>

            </motion.header>


            <motion.div
                className="mb-12"
            >
                <TopicForm loading={loading} setResult={setResult} setLoading={setLoading} setError={setError} />
            </motion.div>


        </div>
    )
}

export default Notes;