import React, { useState, useCallback, useEffect } from 'react';

const TryNow = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    // Handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setError('');
            setImage(URL.createObjectURL(file));
        } else {
            setError('Please upload a valid image file.');
        }
    };

    // Handle drag & drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            setError('');
            setImage(URL.createObjectURL(file));
        } else {
            setError('Please drop a valid image file.');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    // Handle paste event (from clipboard)
    const handlePaste = useCallback((e) => {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.startsWith('image/')) {
                const blob = item.getAsFile();
                if (blob) {
                    setError('');
                    setImage(URL.createObjectURL(blob));
                    break;
                }
            }
        }
    }, []);

    useEffect(() => {
        window.addEventListener('paste', handlePaste);
        return () => window.removeEventListener('paste', handlePaste);
    }, [handlePaste]);

    // Clear preview on component unmount
    useEffect(() => {
        return () => {
            if (image) URL.revokeObjectURL(image);
        };
    }, [image]);

    return (
        <div className="flex flex-col items-center justify-center bg-white px-4 py-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Remove Image Background.
            </h2>

            <p className="text-gray-600 mb-4 text-center max-w-md">
                Get a transparent background for any image.
            </p>

            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="w-full max-w-md bg-gray-50 rounded-2xl shadow-lg p-10 flex flex-col items-center space-y-6 border-2 border-dashed border-gray-300 cursor-pointer hover:border-indigo-500 transition-colors"
                aria-label="Upload area. Drag and drop an image, paste it, or upload using button."
            >
                <input
                    type="file"
                    id="upload2"
                    hidden
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor="upload2"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full text-lg font-semibold select-none"
                >
                    Upload Image
                </label>

                <p className="text-gray-500 text-sm text-center">
                    or drag & drop a file, paste image from clipboard, or{' '}
                    <label htmlFor="upload2" className="text-indigo-600 underline cursor-pointer">
                        browse
                    </label>
                </p>

                {error && <p className="text-red-600 font-medium">{error}</p>}

                {image && (
                    <div className="mt-3 w-full flex flex-col items-center">
                        <p className="mb-2 font-semibold text-gray-700">Preview:</p>
                        <img
                            src={image}
                            alt="Uploaded preview"
                            className="max-h-64 rounded-lg shadow-md object-contain"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TryNow;
