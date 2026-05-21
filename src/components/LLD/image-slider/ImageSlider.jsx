import { useEffect, useState } from "react";

const images = [
    'https://fastly.picsum.photos/id/1023/300/200.jpg?hmac=yqbis3mJN1Go0CYQeX0R9x5QW7fKISiOd2eEOT5FBYg',
    'https://dummyimage.com/600x400/000/fff.png&text=Sample?utm_source=chatgpt.com',
    'https://fastly.picsum.photos/id/366/300/200.jpg?hmac=J6yNuSMKlHnBrbkL9LDX7rXeppiCosUGFQE1rsDL228',
    'https://fastly.picsum.photos/id/1059/1280/720.jpg?hmac=3aJpkBtku_zoPSq04QDo4zx56F7J3J_ESI0AQhxGaD8',
    'https://randomuser.me/api/portraits/men/1.jpg?utm_source=chatgpt.com'
]

const ImageSlider = () => {
    const [active, setActive] = useState(0);

    const handleLeft = () => {
        setActive((active) => (active - 1) < 0 ? images.length - 1 : active - 1);
    }
    const handleRight = () => {
        setActive((active) => (active + 1) % images.length);
    }

    useEffect(() => {
        const timer = setInterval(() => {
          handleRight();
        }, 2000);

        return () => {
            clearInterval(timer);
        }
    }, [active]);

    return (
        <div>
            <div className="m-2 p-2 flex justify-center items-center">
                <img onClick={handleLeft} className="w-20 h-20 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="left arrow"/>
                <img className="w-200 h-100" src={images[active]} alt="wallpaper" />
                <img onClick={handleRight} className="w-20 h-20 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="right arrow"/>
            </div>
        </div>
    )
}

export default ImageSlider;