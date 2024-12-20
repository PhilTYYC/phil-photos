import React, {useEffect, useState} from 'react';
import BackendConnector from '../../connectors/backendConnector'

export default function ImageList() {
    const [imageList, setImageList] = useState();
    const [selectedImageName, setSelectedImageName] = useState();
    const [image, setImage] = useState();

    const connector = new BackendConnector();

    const getImageList = async () => {      
        const images = await connector.getImageList();
        setImageList(images);
    }

    const getImage = async (imageName: string) => {        
        const image = await connector.getImage(imageName);
        setImage(image);
        setSelectedImageName(imageName);
    }

    const displayImageList = () => {
        if (imageList && imageList.length) {
            return imageList.map(image => <div key={image} onClick={() => getImage(image)}>{image}</div>)
        }
    };
    
    useEffect(() => {
        getImageList();
    },[]);

    return (
        <div className="Image-list-layout">
            <div className="left-menu">
                <div>Image List</div>
                <div className="text-orange-700">{displayImageList()}</div>
            </div>
            <div className="right-menu">
                <div>{image && image.length && (<img src={`${connector.getBaseURL()}/images/${selectedImageName}`} alt={selectedImageName} height="400px" />)}</div>
            </div>
        </div>
    );
};

