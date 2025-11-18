"use client";

import { useState } from "react";
import { excuses } from "@/data/excuses";

export default function ExcuseCard() {
    const [excuse, setExcuse] = useState<string>("Tap the button!");

    const generateExcuse = () => {
        const random = Math.floor(Math.random() * excuses.length);
        setExcuse(excuses[random]);
    };

    return (
        <div className="flex flex-col items-center gap-6 mt-10 p-6 rounded-xl shadow-lg bg-white max-w-xl">
            <h1 className="text-3xl font-bold">CribBuddy 😤</h1>

            <p className="text-center text-lg text-gray-700">{excuse}</p>

            <button
                onClick={generateExcuse}
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
                Give me an excuse!
            </button>
        </div>
    );
}
