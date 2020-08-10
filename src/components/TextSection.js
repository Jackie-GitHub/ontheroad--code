import React from 'react';
import './TextSection.scss';

const TextSection = (props) => {
    const titles = props.titles.map((title)=>{
        return(
            <div className = 'Title-TextSection'>
                <div>
                    {title}
                </div>   
            </div>
        )
    })
    const quotes = props.quotes.map((quote)=>{
        return(<div className = 'Quote-TextSection'>{quote}</div>)
    })

    function mergeLists () {
        const n = arguments[0].length;
        const result = [];
        for (let i = 0; i < n; i++){
            result.push([arguments[0][i]]);
          for (let j = 1; j<arguments.length; j++){
            result[i].push(arguments[j][i]);
          }
         }
        return result;
    }
    const merges = mergeLists(props.books,props.authors,props.booklinks).map((merge)=>{
        return (
            <div className = 'Merge-TextSection'>
                <div className = 'Author-TextSection'>
                    {merge[1]}
                </div>
                <a className = 'Book-TextSection' href={merge[2]} target="_blank">
                    <img src = {merge[0]} />
                </a>                
            </div>
        )
    });

    return(
        <div className = 'TextSectionWrap'>
            <div className = 'TextSection' style = {{gridTemplateColumns: 'repeat('+props.itemNumber+',auto)'}}>
                {titles}
                {quotes}
                {merges}
            </div>
        </div>
        
    )
}

export default TextSection; 