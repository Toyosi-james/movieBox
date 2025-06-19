async function popularMovies(){
    const IMAGE_BASE ="https://image.tmdb.org/t/p/original"
    const movies = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2594b313a8dd028dd39fd6439a4b84a7")
    const moviesResult = await movies.json()
    console.log(moviesResult)

    const allMovie =moviesResult.results
    const generateMovie = allMovie[Math.floor(Math.random() * allMovie.length)];
    document.getElementById('hero').style.backgroundImage =` linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),  url(${IMAGE_BASE}${generateMovie.backdrop_path})`;

    
    


    document.getElementById('hero-text').innerText= generateMovie.title;
   document.getElementById("hero-date").innerText =generateMovie.release_date;
    document.getElementById('hero-info').textContent =generateMovie.overview.substring(0,150) + "...";

    const container =document.getElementById('movie-wrapper');
    allMovie.forEach(movie =>{
        const slide =document.createElement('div')
        slide.classList.add('swiper-slide');
        slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        container.appendChild(slide)
    })

   new Swiper(".mySwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
popularMovies()

async function upcomingMovie() {
    const coming = await fetch ('https://api.themoviedb.org/3/movie/upcoming?api_key=2594b313a8dd028dd39fd6439a4b84a7')
    const comingResult = await coming.json()
    const upMovies =comingResult.results;
    console.log(comingResult)

    const upcoming =document.getElementById("upcoming-wrapper")

    upMovies.forEach(movie =>{
    const slide = document.createElement("div");
    slide.classList.add('swiper-slide')
     slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        upcoming.appendChild(slide)
    });
 new Swiper(".myUpcomingSwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
upcomingMovie()

async function topRatedMovies(){

    const top = await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=2594b313a8dd028dd39fd6439a4b84a7')
    const topResult = await top.json()
    const topMost =topResult.results;
    console.log(topResult)

    const topMostRated =document.getElementById("top-wrapper")

    topMost.forEach(movie =>{
    const slide = document.createElement("div");
    slide.classList.add('swiper-slide')
     slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        topMostRated.appendChild(slide)
    });
 new Swiper(".myTopSwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
topRatedMovies()

async function nowPlayingMovies(){

    const now = await fetch ('https://api.themoviedb.org/3/movie/now_playing?api_key=2594b313a8dd028dd39fd6439a4b84a7')
    const nowResult = await now.json()
    const nowMost =nowResult.results;
    console.log(nowResult)

    const nowMostRated =document.getElementById("Now-wrapper")

    nowMost.forEach(movie =>{
    const slide = document.createElement("div");
    slide.classList.add('swiper-slide')
     slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        nowMostRated.appendChild(slide)
    });
 new Swiper(".myNowSwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
nowPlayingMovies()

async function trendingMovies(){

    const trending = await fetch ('https://api.themoviedb.org/3/trending/movie/day?api_key=2594b313a8dd028dd39fd6439a4b84a7')
    const trendResult = await trending.json()
    const trendMost =trendResult.results;
    console.log(trendResult)

    const trendMostRated =document.getElementById("trend-wrapper")

    trendMost.forEach(movie =>{
    const slide = document.createElement("div");
    slide.classList.add('swiper-slide')
     slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        trendMostRated.appendChild(slide)
    });
 new Swiper(".myTrendSwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
trendingMovies()

async function trendingWeeklyMovies(){

    const trendingWeek = await fetch ('https://api.themoviedb.org/3/trending/movie/week?api_key=2594b313a8dd028dd39fd6439a4b84a7')
    const trendWeekResult = await trendingWeek.json()
    const trendMostWeek =trendWeekResult.results;
    console.log(trendWeekResult)

    const trendMostRatedWeek =document.getElementById("trendWeek-wrapper")

    trendMostWeek.forEach(movie =>{
    const slide = document.createElement("div");
    slide.classList.add('swiper-slide')
     slide.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />`;
        trendMostRatedWeek.appendChild(slide)
    });
 new Swiper(".myTrendWeekSwiper", {
    slidePerview:4,
    spaceBetween: 15,
      loop: true,
      grabCursor: true,
      breakpoints: {
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 }
      }
   })

}
trendingWeeklyMovies()
