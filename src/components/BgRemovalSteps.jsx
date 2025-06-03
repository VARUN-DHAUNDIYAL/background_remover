import React from "react";
import { steps } from "../assets/assets.js";

const BgRemovalSteps = () => {
    return (
        <div className="text-center mb-24 px-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-16">
                How to remove a background in seconds?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:bg-indigo-50 hover:shadow-xl border border-gray-200"
                    >
                        <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow">
                            {item.step}
                        </span>

                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BgRemovalSteps;
