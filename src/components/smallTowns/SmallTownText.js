import React from 'react';
import './SmallTownText.scss';

import TextCard from '../TextCard';

import bookSmalltown1 from '../../resources/img/nature/books/EatPrayLove.jpg';
import bookSmalltown2 from '../../resources/img/nature/books/A_Year_in_Provence.jpg';

const SmallTownText = (props) => {
     const quoteSmalltown1 = ' But Bali is a fairly simple place to navigate. It’s not like I’ve landed in the middle of the Sudan with no idea of what to do next. This is an island approximately the size of Delaware and it’s a popular tourist destination. The whole place has arranged itself to help you, the Westerner with the credit cards, get around with ease. English is spoken here widely and happily.';
     const quoteSmalltown2 = 'Apart from the peace and emptiness of the landscape, there is a special smell about winter in Provence which is accentuated by the wind and the clean, dry air. Walking in the hills, I was often able to smell a house before I could see it, because of the scent of woodsmoke coming from an invisible chimney.';

    return (
        <div className = "SmallTownText">
            <TextCard title = 'Bali' quote = {quoteSmalltown1} author = 'Elizabeth Gilbert (Eat, Pray, Love)' book = {bookSmalltown1} link = 'https://en.wikipedia.org/wiki/Eat,_Pray,_Love' clickTitle = {props.searchTerm} term = 'Bali' weatherCity = 'Denpasar' />
            <TextCard title = 'Provence' quote = {quoteSmalltown2} author = 'Peter Mayle (A Year in Provence)' book = {bookSmalltown2} link = 'https://en.wikipedia.org/wiki/A_Year_in_Provence' clickTitle = {props.searchTerm} term = 'Provence' weatherCity = 'Aix-en-Provence' />
        </div>
    )
}

export default SmallTownText;