import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
    { id: 1, src: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg', alt: 'Bild 1' },
    { id: 2, src: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/dc2b9450-28a0-4652-8b2c-3548b218ffc9/Derivates/63cf5870-9de5-4fa5-84b4-6d992a988329.jpg', alt: 'Bild 2' },
    { id: 3, src: 'https://www.sprachcaffe.de/fileadmin/_processed_/d/9/csm_Tomato_Italian_119b8ca381.png', alt: 'Bild 3' },
    { id: 4, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1AE4yGH1ZW8kETaxLQPldhInv5zu316DGOw&s', alt: 'Bild 4' },
    { id: 5, src: 'https://img.chefkoch-cdn.de/rezepte/1205621226313744/bilder/1508311/crop-960x720/amerikanische-pancakes.jpg', alt: 'Bild 5' },
];

export default function ActivityPage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();

    const handleImageClick = (id) => {
        setSelectedImage(id);

        // Klick-Trailing mit der Netlify Funktion
        fetch('/.netlify/functions/trackClick', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                element: `Bild ${id}`,
                timestamp: new Date().toISOString(),
            }),
        });
    };

    const handleConfirm = () => {
        if (selectedImage) {
            console.log(`Ausgewähltes Bild ID: ${selectedImage}`);
            navigate('/location');
        } else {
            console.log('Kein Bild ausgewählt');
        }
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Wo rauf hast du Lust ^^</h1>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => handleImageClick(image.id)}
                        style={{
                            width: '150px',
                            height: '150px',
                            cursor: 'pointer',
                            border: selectedImage === image.id ? '5px solid blue' : '2px solid gray',
                            borderRadius: '10px',
                        }}
                    />
                ))}
            </div>
            <button
                className="YesButton"
                onClick={handleConfirm}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                }}
            >
                Bestätigen
            </button>
        </div>
    );
}
