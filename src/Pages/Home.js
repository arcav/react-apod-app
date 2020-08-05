
//React and React-Router-Dom
import React from 'react';
import { Link } from 'react-router-dom';

//CSS
import './Page.css';

//Images
import nasa from '../Assets/nasa.png';
import react from '../Assets/react1.png';


const Home = () => {
    return (
        <div className="container" >
            <h1 className="title" >
                WELCOME < br />
                TO MY REACT < br />
                NASA A.P.O.D < br />
                APP </h1>
            <Link to="/Apod" >
                <div style={{textAlign: "center"}} >
                    <img style={{width: "7rem", margin: "5px"}}
                        src={nasa}
                        alt="nasalogo" />
                    <img style={{width: "7rem", margin: "5px"}}
                        src={react}
                        alt="reactlogo" />
                </div>
            </Link>
        </div>
    );
};
export default Home;