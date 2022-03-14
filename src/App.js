import React, {useEffect, useState} from 'react'
import './App.scss';
import Tmdb from './services/Tmdb';
import {Movies} from './components/Movies';
import {FeaturedMovie} from './components/FeaturedMovie'
import { Header } from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list)

   
      let originals = list.filter(i=> i.slug === 'originals')

      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getSerieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo)
      console.log(chosenInfo)
    }

    loadAll();
  },[])

  // Fazer efeito scroll header
  useEffect(()=>{
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  },[])

  return (
    <div className="App">

      <Header black={blackHeader}/>
      
      {featuredData &&
        <FeaturedMovie item={featuredData}/>
      }

        <section className="lists">
            {movieList.map((item,key) => (
                <Movies key={key} title={item.title} items={item.items} />
            ))}
        </section>

        <footer>
          <p>Desenvolvido por <strong>CodeUniverse</strong></p>
          <p>Direitos de imagem para Netflix</p>
        </footer>
    </div>
  );
}

export default App;
