import React from 'react';
import '../projectPagesStyles.css'

const PerformanceMeasurements = () => {
    return (
        <div className='project-detail'>
            <h3>Project Goal:</h3>
            <p align='left'>
                Simulate an application where multiple threads emulate costumers and relay on a shared collection of
                data.
                Threads only read and write data into the collection. One solution uses an already existing/implemented
                data structure and/or locking and another solution with a data structure and locking of my own
                implementation.
                Compare the through put of both solutions using JMH and display the through put results as graphs on a
                web page.
            </p>

            <h3>Learning points: </h3>
            <li>Implementation of own data structure and blocking scheme.</li>
            <li>Use and implementation of benchmarks to measure performance based on through put.</li>

            <h3>Source Code:</h3>
            <a href='https://github.com/cuceta/Ticketing-System-Parallel-Perfomance'>Github repository</a>
        </div>
    );
};

export default PerformanceMeasurements;