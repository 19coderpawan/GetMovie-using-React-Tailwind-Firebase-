import React from 'react'
import ReactStars from 'react-stars'
const DetailPage = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row md:items-start items-center w-full justify-center mt-4 p-3'>
        <img className='h-96 md:w-80  md:sticky top-4' src='https://static.displate.com/280x392/displate/2021-01-28/bce221eff0de2ed033e89311c45c805e_24f94cda8031146d198a8636239c55f5.jpg'/>
        <div className='ml-3 w-full  md:w-1/2'>
            <h1 className='text-3xl font-bold text-gray-400'>Captain America <span className='text-xl'>(2011)</span></h1>
            <ReactStars
            size={25}
            count={5}
            value={4}
            edit={false}
            half={true} />
            <p>Starring Matt Salinger as Steve Rogers, the film follows Captain America as he faces the villainous Red Skull (Scott Paulin) during the Second World War, becomes frozen in ice, and is revived decades later to face Red Skull again.
            Starring Matt Salinger as Steve Rogers, the film follows Captain America as he faces the villainous Red Skull (Scott Paulin) during the Second World War, becomes frozen in ice, and is revived decades later to face Red Skull again.
            </p>
            <p>Starring Matt Salinger as Steve Rogers, the film follows Captain America as he faces the villainous Red Skull (Scott Paulin) during the Second World War, becomes frozen in ice, and is revived decades later to face Red Skull again.
            Starring Matt Salinger as Steve Rogers, the film follows Captain America as he faces the villainous Red Skull (Scott Paulin) during the Second World War, becomes frozen in ice, and is revived decades later to face Red Skull again.
            </p>
            
        </div>
      </div>
    </>
  )
}

export default DetailPage
