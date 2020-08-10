import React from 'react';
import './NatureText.scss';
import TextCard from '../TextCard';

import bookNature1 from '../../resources/img/nature/books/TheHiddenLifeOfTrees.jpg';
import bookNature2 from '../../resources/img/nature/books/20,000LUS.jpg';
import bookNature3 from '../../resources/img/nature/books/Walden.jpg';

const NatureText = (props) => {
     const quoteNature1 = "Under the canopy of the trees, daily dramas and moving love stories are played out. Here is the last remaining piece of Nature, right on our doorstep, where adventures are to be experienced and secrets discovered. And who knows, perhaps one day the language of trees will eventually be deciphered, giving us the raw material for further amazing stories. Until then, when you take your next walk in the forest, give free rein to your imagination-in many cases, what you imagine is not so far removed from reality, after all!";
     const quoteNature2 = 'The sea is everything. It covers seven tenths of the terrestrial globe. Its breath is pure and healthy. It is an immense desert, where man is never lonely, for he feels life stirring on all sides. The sea is only the embodiment of a supernatural and wonderful existence. It is nothing but love and emotion; it is the Living Infinite.';
     const quoteNature3 = 'I have a great deal of company in my house; especially in the morning, when nobody calls. Let me suggest a few comparisons, that some one may convey an idea of my situation. I am no more lonely than the loon in the pond that laughs so loud, or than Walden Pond itself. What company has that lonely lake, I pray? And yet it has not the blue devils, but the blue angels in it, in the azure tint of its waters. The sun is alone, except in thick weather, when there sometimes appear to be two, but one is a mock sun.';

    return(
        <div className = "NatureText">
            <TextCard title = 'Forest' quote = {quoteNature1} author = 'Peter Wohlleben (The Hidden Life of Trees:)' book = {bookNature1} link = 'https://www.amazon.com/Hidden-Life-Trees-Communicate_Discoveries-Secret/dp/1771642483/ref=sr_1_1?dchild=1&keywords=The+Hidden+Life+of+Trees&qid=1593654172&sr=8-1' clickTitle = {props.searchTerm} term = 'Forest' weatherCity = '' />
            <TextCard title = 'Sea' quote = {quoteNature2} author = 'Jules Verne (20,000 Leagues Under the Sea)' book = {bookNature2} link = 'https://www.amazon.com/Twenty-Thousand-Leagues-Under-Illustrated/dp/1950435067/ref=sr_1_2?dchild=1&keywords=20%2C000+Leagues+Under+the+Sea+book&qid=1593654487&sr=8-2' clickTitle = {props.searchTerm} term = 'Sea' weatherCity = '' />
            <TextCard title = 'Walden Pond' quote = {quoteNature3} author = 'Henry David Thoreau (Walden)' book = {bookNature3} link = 'https://www.amazon.com/Walden-Henry-David-Thoreau/dp/1949982475/ref=sr_1_1_sspa?dchild=1&keywords=walden+book&qid=1593654608&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUEtLUlFBSkRDMVBSJmVuY3J5cHRlZElkPUEwNjA2MDA1MlZST0U5WEdSRzZXTSZlbmNyeXB0ZWRBZElkPUEwNjE0NjU3TU9ZUEs3WkRaVUpCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==' clickTitle = {props.searchTerm} term = 'Walden Pond' weatherCity = 'Concord, Massachusetts' />
        </div>
    )
}

export default NatureText;