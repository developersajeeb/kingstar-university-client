import g1 from '../assets/Gallery/pexels-godisable-jacob-901964.jpg'
import g2 from '../assets/Gallery/pexels-goutinho-de-flávio-gf-3028514.jpg'
import g3 from '../assets/Gallery/pexels-joshua-mcknight-1139319.jpg'
import g4 from '../assets/Gallery/pexels-pixabay-267885.jpg'
import g5 from '../assets/Gallery/g5.jpg'
import g6 from '../assets/Gallery/g6.jpg'
// import g7 from '../assets/Gallery/g7.jpg'
// import g8 from '../assets/Gallery/g8.jpg'
// import g9 from '../assets/Gallery/g9.jpg'

const ImageGallery = () => {
    return (
        <div className="container mx-auto">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g1} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g2} />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g3} />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g4} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g5} />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src={g6} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;