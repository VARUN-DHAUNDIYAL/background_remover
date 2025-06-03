import { useState } from "react";
import { assets, categories } from "../assets/assets";

const BgSlider = () => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [activeCategory, setActiveCategory] = useState("People");

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };

    const originalImage = assets[`${activeCategory.toLowerCase()}_org`];
    const removedBgImage = assets[activeCategory.toLowerCase()];

    return (
        <div className="mb-20 px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                Stunning quality
            </h2>

            {/* Category selection buttons */}
            <div className="flex justify-center mb-10 flex-wrap">
                <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                activeCategory === category
                                    ? "bg-white text-gray-800 shadow-md"
                                    : "text-gray-600 hover:bg-gray-200"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Image Comparison Slider */}
            <div className="relative max-w-5xl w-full aspect-video mx-auto overflow-hidden rounded-xl shadow-xl">
                {/* Original image with background */}
                <img
                    src={originalImage}
                    alt="Original"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                />

                {/* Removed background image (white background) */}
                <img
                    src={removedBgImage}
                    alt="Removed background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                        clipPath: `inset(0 0 0 ${sliderPosition}%)`,
                    }}
                />

                {/* Slider Input */}
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full z-30 h-1 bg-transparent appearance-none cursor-pointer"
                    style={{ WebkitAppearance: 'none' }}
                />


                {/* Visual slider handle (center line) */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                >
                    <div className="w-6 h-6 bg-white border border-gray-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 shadow" />
                </div>
            </div>
        </div>
    );
};

export default BgSlider;
