import React from "react";
import Card from "./Card";

const contentCard = [
    {
        title: 'Title 1',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
        id: 1,
    },
    { 
        title: 'Title 2',
        description: 'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.',
        id: 2,
    },
    {  
        title: 'Title 3',
        description: 'Documentation and examples for Bootstraps powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.',
        id: 3,
    },
    {  
        title: 'Title 4',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.',
        id: 4,
    }
]

const DataCard = () =>{
    const insertCardContent = contentCard.map((content) => {
        return (
         <div key={content.id} className="col-md-6 col-lg-3 col-sm-6">
            <Card
                title={content.title}
                description={content.description} 
            />
         </div>
        );
    });

        return (
        <div className="container">
            <div className="row">{insertCardContent}</div>
        </div>
        );
};

export default DataCard;