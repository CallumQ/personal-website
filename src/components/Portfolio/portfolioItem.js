import TechnologyItem from "../technologyItem/TechnologyItem";
import React from 'react';

const PortfolioItem = (state) => (
    <div className="post">
        <div className="post-image"><img src={state.properties.imageUrl}/></div>
        <div className="post-information">
            <div className="post-title">{state.properties.title}</div>
            <div className="post-content">{state.properties.description}</div>
            <div className="relative-container">
                <div className="post-date">
                    {state.properties.technology.map(tech => <TechnologyItem key={tech}item={tech} stringName={tech}/>)}
                </div>
                <div className="view-button-container">
                    <div className="relative-container">
                        <div className="view-button">
                            <a href="#" onClick={() => state.openModal(state.properties.id)}>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioItem;