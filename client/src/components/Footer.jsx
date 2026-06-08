import React from 'react';
import { motion } from "motion/react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';

const Footer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            await axios.get(serverUrl + "/api/auth/logOut", { withCredentials: true });
            dispatch(setUserData(null));
            navigate("/auth");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="z-10 mx-6 mb-6 mt-24 rounded-2xl bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-2xl border border-white/10 px-8 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
        >

            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
            >
                <motion.div
                    whileHover={{ rotateX: 6, rotateY: -6 }}
                    className="flex flex-col gap-4 transform-gpu"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        style={{ transform: "translateZ(20px) " }}
                    >
                        <img src="/NeuroPrep-AI.png" alt="logo" className='w-10 h-10' />
                        <span
                            className="text-lg font-semibold bg-gradient-to-br from-white via-gray-300 to-white bg-clip-text text-transparent"
                            style={{ textShadow: "0 6px 18px rgba(0,0,0,0.4" }}
                        >
                            NeuroPrep <span className='text-gray-500'>AI</span>
                        </span>
                    </div>

                    <p
                        className='text-sm text-gray-100 max-w-sm'
                    >
                        NeuroPrep AI helps students generate exam-focused notes, revision material, diagrams, and printable PDFs using AI.
                    </p>
                </motion.div>

                <div
                    className="text-center"
                >
                    <h1 className="text-sm font-semibold text-white mb-4">Quick Links</h1>
                    <ul className="space-y-2 text-sm">
                        <li
                            onClick={() => navigate("/notes")}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Notes
                        </li>
                        <li
                            onClick={() => navigate("/history")}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            History
                        </li>
                        <li
                            onClick={() => navigate("/pricing")}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Add Credits
                        </li>
                    </ul>
                </div>

                <div>
                    <div
                        className="text-center"
                    >
                        <h1 className="text-sm font-semibold text-white mb-4">Support & Account</h1>
                        <ul className="space-y-2 text-sm">
                            <li
                                onClick={() => navigate("/auth")}
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                Sign-in
                            </li>
                            <li
                                onClick={handleSignOut}
                                className="text-red-400 hover:text-red-300 transition-colors cursor-pointer"
                            >
                                Sign-out
                            </li>
                            <li
                                className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                            >
                                support@neuroprepai.com
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}

export default Footer;