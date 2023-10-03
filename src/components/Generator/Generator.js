 import { useEffect, useState } from "react";
import Color from "./Color";
import "./Generator.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProviders.js";
import { useNavigate } from "react-router-dom";


const Generator = () => {
    const [state, setState] = useState({
        colorsNum: 5,
        colors: [],
    })
    for (let i = 0; i < state.colorsNum; i += 1) {
        state.colors.push({ hexCode: generateColor() });
    }

    function generateColor() {
        return "#" + Math.random().toString(16).slice(-6);
    }

    function updateColor(index) {
        let colors = state.colors.slice();
        const currentColor = generateColor();
        colors[index].hexCode = currentColor;
        setState({
            colors: colors,
        });
    }
    return (
        <div className="color-container">
            {state.colors.map((color, index) => (
                <Color
                    key={`color-${index}`}
                    index={index}
                    update={updateColor}
                    hexCode={color.hexCode}
                ></Color>
            ))}
        </div>
    );
};

export default Generator;
