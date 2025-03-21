import React from "react";
import './Home.css'
import { CARD } from "../src/card.js";
import Card from "../src/content-item/Card.jsx";

function Home() {
    return (
        <div>
            <div className="content">
                {CARD.map((card) => (
                    <Card
                    title={card.title}
                    prince={card.prince}
                    img={card.img}
                    key={card.id}
                    />
                ))}
            </div>
        </div>
    );
}
export default Home