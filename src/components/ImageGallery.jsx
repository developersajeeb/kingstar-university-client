import LightGallery from 'lightgallery/react';
import g1 from '../assets/Gallery/pexels-godisable-jacob-901964.jpg'
import g2 from '../assets/Gallery/pexels-goutinho-de-flávio-gf-3028514.jpg'
import g3 from '../assets/Gallery/pexels-joshua-mcknight-1139319.jpg'
import g4 from '../assets/Gallery/pexels-pixabay-267885.jpg'
import g5 from '../assets/Gallery/g5.jpg'
import g6 from '../assets/Gallery/g6.jpg'
import g7 from '../assets/Gallery/g7.jpg'
import g8 from '../assets/Gallery/g8.jpg'
import g9 from '../assets/Gallery/g9.jpg'

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const ImageGallery = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <div className='grid md:grid-cols-4 gap-4'>
                    <a href={g1}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g1} />
                    </a>
                    <a className='md:col-span-2' href={g2}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g2} />
                    </a>
                    <a href={g3}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g3} />
                    </a>
                </div>
                <div className='grid md:grid-cols-4 gap-4 mt-4'>
                    <a href={g4}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g4} />
                    </a>
                    <a href={g5}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g5} />
                    </a>
                    <a className='md:col-span-2' href={g6}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g6} />
                    </a>
                </div>
                <div className='grid md:grid-cols-4 gap-4 mt-4'>
                    <a className='md:col-span-2' href={g7}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g7} />
                    </a>
                    <a href={g8}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g8} />
                    </a>
                    <a href={g9}>
                        <img className='w-full h-full object-cover rounded-md' alt="img1" src={g9} />
                    </a>
                </div>
            </LightGallery>
        </div>
    );
};

export default ImageGallery;