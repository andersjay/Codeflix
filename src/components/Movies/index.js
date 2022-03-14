import React, {useState} from 'react';
import './styles.scss';
import {FiChevronLeft} from 'react-icons/fi';
import {FiChevronRight} from 'react-icons/fi';

export function Movies({title, items}){


  const [scrollX, setScrollX] = useState(0);

  // Função para animar a lista para esquerda e direita

  const handleLeftArrow = () =>{
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0){
      x = 0;
    }

    setScrollX(x)

  }

  const handleRightArrow = () =>{
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listW = items.results.length * 250;
    if((window.innerWidth - listW)> x){
     x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x)
    
  }

  return(
    <div className="movieRow">
        <h2>{title}</h2>

        <div className="left" onClick={handleLeftArrow}>
          <FiChevronLeft style={{fontSize:50}} />
        </div>

        <div className="right" onClick={handleRightArrow}>
        <FiChevronRight style={{fontSize:50}}/>
        </div>


        <div className="listArea">
            <div className="list" style={{
                marginLeft: scrollX,
                width: items.results.length * 250
              
            }} >
                  {items.results.length > 0 && items.results.map((item,key) => (
                    <div className="item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                  )) }
            </div>
        </div>
    </div>
  );
}