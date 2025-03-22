'use client'

import { useState } from "react";

export default function login(){

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    };

    return (
        <>
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <form onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg  w-100 text-white"
        >
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 border"
                required 
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-400">Password</label>
            <input 
                type="password" 
                name="password"
                value={formData.password} 
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 border"
                required 
            />
            </div>
            <button 
            type="submit" 
            className="w-full bg-blue-500 p-2 rounded"
            >
            Login
            </button>
        </form>
    </div>

    </>
    )
}