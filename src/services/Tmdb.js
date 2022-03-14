const api_key = 'd17c3eb71bf1156f76706a103c11db8d';
const base_url = 'https://api.themoviedb.org/3';

const funcFetch = async (endpoint) =>{
  const req = await fetch(`${base_url}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async ( )=>{
    return [ 
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await funcFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items:  await funcFetch(`/trending/all/week?language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'top-rated',
        title: 'Em alta',
        items: await funcFetch(`/movie/top_rated?language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await funcFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'adventure',
        title: 'Aventura',
        items:  await funcFetch(`/discover/movie?with_genres=12&language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'animation',
        title: 'Animação',
        items:  await funcFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${api_key}`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await funcFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${api_key}`)
      },
      
    ]
  },

  getSerieInfo :  async (movieId, type)=>{
    let info = [];

    if(movieId){
      switch(type){
        case 'movie':
          info = await funcFetch(`/movie/${movieId}?language=pt-BR&api_key=${api_key}`)
          break;

          case 'tv':
            info = await funcFetch(`/tv/${movieId}?language=pt-BR&api_key=${api_key}`);
            break;
            
            default:
              info = null;
              break;
      }
    }

    return info;
    

  }
}