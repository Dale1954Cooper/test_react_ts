import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

const AboutPage: FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi dignissimos ducimus eos facere
                ipsum labore laudantium nulla obcaecati praesentium.</p>
            <button className='btn' onClick={() => navigate('/')}>Обратно к списку дел</button>
        </>
    );
};

export default AboutPage;