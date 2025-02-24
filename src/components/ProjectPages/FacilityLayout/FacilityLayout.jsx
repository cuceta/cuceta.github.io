import React from 'react';
import '../projectPagesStyles.css'

const FacilityLayout = () => {
    return (
        <div className='project-detail'>
            <h3>Project Goal:</h3>
            <p align='left'>
                Creating a parallel genetic algorithm program with the purpose of finding the layout of stations in a
                facility that produces the highest affinity. Where there are at least 48
                stations, of at least 4 different kinds/sizes and spots to place them. As in any facility, some stations
                would benefit from being close to each other. For example: the closer a printing station is to a
                stapling
                station, the better. This is what would raise our layout affinity. On the opposite side of things, some
                stations might not benefit from being places near each other. For example: having a quiet station right
                next to a music practice station. This is the type of scenario that lowers our layout affinity.
            </p>

            <h3>Functionality:</h3>
            <p align='left'>
                The program specifies the number of stations being used and the how much each type of stations likes (or
                does not like) to be near each kind of stations (including its own kind). Then, using threads create individual
                layouts and find the total affinity of the layout. Then have all the threads communicate and compare
                affinity values and display they layout with the highest affinity.
            </p>

            <h3>Source Code:</h3>
            <a href='https://github.com/cuceta/CSC375P1-FacilitiesLayout'>Github repository</a>
        </div>
    );
};

export default FacilityLayout;