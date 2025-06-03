import { assets } from "../assets/assets.js";
import { useState } from "react";

const Header = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <section className="px-6 md:px-16 py-16 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left: video */}
                <div className="order-2 md:order-1 flex justify-center">
                    <div className="shadow-xl rounded-3xl overflow-hidden max-w-[450px] transition-transform hover:scale-105 duration-300">
                        <video
                            src={assets.video_banner}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover"
                            controls={false}
                            disablePictureInPicture
                            controlsList="nodownload nofullscreen noremoteplayback"
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>
                </div>

                {/* Right: content + upload */}
                <div className="order-1 md:order-2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
                        The fastest <span className="text-indigo-700">background eraser</span>
                    </h1>
                    <p className="text-gray-600 mb-8 text-lg md:text-xl leading-relaxed">
                        Instantly transform your photos with our intelligent background removal tool.
                        Highlight your subject and remove distractions with precision—perfect for social media,
                        design projects, or product showcases. Start now and place your subject in any
                        environment you can imagine.
                    </p>

                    {/* Upload input */}
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <input
                            type="file"
                            id="upload1"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="upload1"
                            className="cursor-pointer px-6 py-3 bg-indigo-700 text-white text-lg rounded-full shadow-md hover:bg-indigo-800 transition duration-300"
                        >
                            Upload Your Image
                        </label>
                        {fileName && (
                            <span className="text-sm text-gray-500 mt-2 md:mt-0">
                Selected: <strong>{fileName}</strong>
              </span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
