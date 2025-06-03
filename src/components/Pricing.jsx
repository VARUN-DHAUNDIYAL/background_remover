import React from 'react';
import { plans } from '../assets/assets'; // Adjust path based on your project structure

const Pricing = () => {
    return (
        <div className="py-10 px-4 md:px-20 lg:px-20">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className="relative p-6 pb-16 bg-gray-900 backdrop-blur-lg border border-gray-800 rounded-2xl hover:translate-y-1 transform transition duration-300"
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-xl bg-purple-600 px-3 py-1 text-white text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center pb-6">
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <p className="text-4xl text-violet-400 font-bold">
                                    ₹{plan.price}
                                </p>
                            </div>
                            <div className="space-y-2 text-white">
                                <div className="flex items-center">{plan.credits}</div>
                                <div className="flex items-center">{plan.description}</div>
                            </div>
                            <button
                                className="w-full mt-8 py-3 px-6 text-center text-white font-semibold rounded-full
                                    bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg
                                    hover:from-purple-600 hover:to-indigo-700
                                    transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
                            >
                                Choose plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
