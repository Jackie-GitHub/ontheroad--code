import React from 'react';
import './BigCitiesText.scss';
import BigCitiesTextChild from './BigCitiesTextChild';
import aynRand from '../../resources/img/AynRand.jpg';
import hemingway from '../../resources/img/ErnestHemingway.jpg';
import linyutang from '../../resources/img/LinYutang.jfif';

const BigCitiesText = (props) => {
    const cityname1='New York';
    const citydescription1="I would give the greatest sunset in the world for one sight of New York’s skyline. Particularly when one can’t see the details. Just the shapes. The shapes and the thought that made them. The sky over New York and the will of man made visible. What other religion do we need?";
    const author1='Ayn Rand(1905-1982)';
    const book1='The Fountainhead';
    const booklink1='https://en.wikipedia.org/wiki/The_Fountainhead';

    const cityname2='Beijing';
    const citydescription2='Peking is a city clearly marked by the seasons,each perfect in its own way and each different from the others. In that city, man lives in civilization and yet in nature, where the maximum comforts of the city and the beauties of rural life are perfectly blended and preserves, where, as in the ideal city, man finds both stimulation for his mind and repose for his soul.'
    // What great spirit organized this pattern of life so that here at last the ideal of human living should be realized? True,Peking is naturally beautiful, with its lakes and parks inside the city and its girdle of the transparent blue Jade River and its skirt of the purple Western Hills outside.'
    const author2='Lin Yutang(1895-1976)';
    const book2='Moment in Peking';
    const booklink2='https://en.wikipedia.org/wiki/Moment_in_Peking';

    const cityname3='Paris';
    const citydescription3='If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life, it stays with you, for Paris is a moveable feast.'
    const author3='Ernest Hemingway(1899-1961)';
    const book3='A Moveable Feast';
    const booklink3='https://en.wikipedia.org/wiki/A_Moveable_Feast';
    return (
        <div className="BigCitiesText">
            <BigCitiesTextChild 
                cityname={cityname1} 
                description={citydescription1}
                author={author1}
                book={book1}
                img={aynRand}
                booklink={booklink1}
                onclick={props.searchTerm}
            />
            <BigCitiesTextChild 
                cityname={cityname2} 
                description={citydescription2}
                author={author2}
                book={book2}
                img={linyutang}
                booklink={booklink2}
                onclick={props.searchTerm}
            />
            <BigCitiesTextChild 
                cityname={cityname3} 
                description={citydescription3}
                author={author3}
                book={book3}
                img={hemingway}
                booklink={booklink3}
                onclick={props.searchTerm}
            />
        </div>
    );
};

export default BigCitiesText;