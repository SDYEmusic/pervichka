import React from "react";
import './Home.css'
import { CARD } from "../src/card.js"
// import { Link } from "react-router-dom"
import Card from '../src/content-item/card.jsx'

function Home() {
    return (
        <div>
            <div className="content">
                {CARD.map((card) => (
                    
                    <Card
                    title={card.title}
                    post={card.post}
                    prince={card.prince}
                    key={card.id}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home