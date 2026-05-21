import { useCallback, useEffect, useState } from "react";

import { ARROW_ICONS, IMAGES, SLIDE_INTERVAL } from './constants';

const ImageSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevious = useCallback(() => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? IMAGES.length - 1 : prevIndex - 1
        );
    }, []);

    const handleNext = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(handleNext, SLIDE_INTERVAL);

        return () => clearInterval(intervalId);
    }, [handleNext]);

    return (
        <div className="flex justify-center items-center gap-4 p-4">
            <button
                type="button"
                onClick={handlePrevious}
                className="cursor-pointer"
                aria-label="Previous slide"
            >
                <img
                    src={ARROW_ICONS.left}
                    alt="Previous"
                    className="w-10 h-10"
                />
            </button>
            <img
                src={IMAGES[activeIndex]}
                alt={`Slide ${activeIndex + 1}`}
                className="w-200 h-100 object-cover rounded-lg shadow-md"
            />
            <button
                type="button"
                onClick={handleNext}
                className="cursor-pointer"
                aria-label="Next slide"
            >
                <img
                    src={ARROW_ICONS.right}
                    alt="Next"
                    className="w-10 h-10"
                />
            </button>
        </div>
    );
};

export default ImageSlider;