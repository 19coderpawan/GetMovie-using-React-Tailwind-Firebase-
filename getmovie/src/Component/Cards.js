import React, { useState } from 'react'
import ReactStars from 'react-stars'
const Cards = () => {
    const [data, Setdata] = useState([
        {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        },
        {
            name: "Captain America",
            Rating: 4.3,
            Year: "2011",
            img: "https://static.displate.com/280x392/displate/2021-01-28/bce221eff0de2ed033e89311c45c805e_24f94cda8031146d198a8636239c55f5.jpg"
        },
        {
            name: "Spider-Man No Way Home",
            Rating: 4.3,
            Year: "2021",
            img: "https://i.redd.it/qct0dn6wtfu71.jpg"
        },
        {
            name: "Venom",
            Rating: 4.3,
            Year: "2018",
            img: "https://rukminim2.flixcart.com/image/850/1000/jsyyufk0/poster/w/r/v/medium-venom8-venom-movies-jumbo-poster-for-room-office-24-inch-original-imafed3dwgsqb9tj.jpeg?q=90"
        },
        {
            name: "Captain-America Civil War",
            Rating: 4.3,
            Year: "2016",
            img: "https://4.bp.blogspot.com/-h7pyEJl52vE/VXMNQmEC13I/AAAAAAAAIEE/QmBxbHPn2gc/s1600/CivilWarFanArt2.png"
        }, {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        }, {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        }, {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        }, {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        }, {
            name: "Avengers Endgame",
            Rating: 4.3,
            Year: "2020",
            img: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/4/-/4-4127_avengers_endgame_movie_poster_web.jpg"
        }
    ])
    return (
        <>
            <div> <h1 className='text-center mt-3 font-bold font-serif'>Download all Movies for free Instantly!</h1> </div>
            <div className='flex flex-wrap justify-between p-3 mt-4    '>

                {data.map((e, i) => {
                    return (
                        <div key={i} className='bg-slate-900 font-bold p-3  transition-all duration-700 border-2
                rounded-xl  
                hover:-translate-y-4 mt-9'>
                            <img className='h-80 w-50  mt-1 cursor-pointer rounded-xl hover:border-2 
                    hover:border-white-200 ' src={e.img}
                                alt="img" />
                            <h1 >Name:- <span className='truncate text-sm'>{e.name}</span></h1>
                            <h1 className='flex flex-row items-center gap-1'>Rating:-
                                <ReactStars
                                    size={20}
                                    count={5}
                                    value={e.Rating}
                                    edit={true}
                                    half={true} />
                            </h1>
                            <h1>Year:- <span>{e.Year}</span></h1>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Cards
