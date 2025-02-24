import React from 'react';
import '../projectPagesStyles.css'
import formula from './formula.png'

const HeatPropagation = () => {
    return (
        <div className='project-detail'>
            <h3>Project Goal:</h3>
            <p align='left'>
                Simulate heat propagating through a piece of alloy as the top left and bottom left corners are heated up.
                The alloy is divided into cells where each cell is composed of three types of metals with different
                thermal constants. The temperature of neighbors affects the temperature of each cell, assuming that the
                edges of the alloy are insulated from outside temperatures. This simulating is graphically displayed with
                cells of different color for the different temperature ranges.
            </p>
            <p> The current temperature of each cell is calculated using the formula:</p>
            <img src={formula} alt='Formula'/>


            <h3>Source Code:</h3>
            <a href='https://github.com/cuceta/TemperaturePropagationSimulator'>Github repository</a>
        </div>
    );
};

export default HeatPropagation;