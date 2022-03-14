import React from 'react';
import './styles.scss';

export function FeaturedMovie({item}){

  let firstDate = new Date(item.first_air_date)
  let genres = [];
  for(let i in item.genres){
    genres.push(item.genres[i].name);
  }

  return (
    <section className="featured" style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
       backgroundSize: 'cover',
       bacgkroundPosition: 'center'
      
    }}>

      <div className="vertical">
          <div className="horizontal">
            <div className="featuredName">{item.original_name}</div>

            <div className="featuredInfo">
                <div className="featuredPoints">{item.vote_average} Pontos</div>
                <div className="featuredYear">{firstDate.getFullYear()}</div>
                <div className="featuredSeasons">{item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
                <div className="featuredDescription">{item.overview}</div>
                <div className="featuredButtons">
                  <a href="#">► Assistir</a>
                  <a href="#">+ Minha lista</a>
                </div>
                <div className="featuredGenres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
            </div>
          </div>
      </div>
    </section>
  )
}