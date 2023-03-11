import React from 'react'
import Card from './Card'
 const fakeData = [
   {
     albumId: 1,
     id: 1,
     title: "accusamus beatae ad facilis cum similique qui sunt",
     url: "https://via.placeholder.com/600/92c952",
     thumbnailUrl: "https://via.placeholder.com/150/92c952",
   },
   {
     albumId: 1,
     id: 2,
     title: "reprehenderit est deserunt velit ipsam",
     url: "https://via.placeholder.com/600/771796",
     thumbnailUrl: "https://via.placeholder.com/150/771796",
   },
   {
     albumId: 1,
     id: 3,
     title: "officia porro iure quia iusto qui ipsa ut modi",
     url: "https://via.placeholder.com/600/24f355",
     thumbnailUrl: "https://via.placeholder.com/150/24f355",
   },
   {
     albumId: 1,
     id: 4,
     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
     url: "https://via.placeholder.com/600/d32776",
     thumbnailUrl: "https://via.placeholder.com/150/d32776",
   },
 ];
 const fakeData1 = [
   {
     albumId: 1,
     id: 1,
     title: "natus nisi omnis corporis facere molestiae rerum in",
     url: "https://via.placeholder.com/600/f66b97",
     thumbnailUrl: "https://via.placeholder.com/150/f66b97",
   },
   {
     albumId: 1,
     id: 2,
     title: "accusamus ea aliquid et amet sequi nemo",
     url: "https://via.placeholder.com/600/56a8c2",
     thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
   },
   {
     albumId: 1,
     id: 3,
     title: "officia delectus consequatur vero aut veniam explicabo molestias",
     url: "https://via.placeholder.com/600/b0f7cc",
     thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
   },
   {
     albumId: 1,
     id: 4,
     title: "aut porro officiis laborum odit ea laudantium corporis",
     url: "https://via.placeholder.com/600/54176f",
     thumbnailUrl: "https://via.placeholder.com/150/54176f",
   },
 ];
const Main = () => {
   
  return (
      <div className='mt-[64px] flex flex-1 items-center justify-center mx-auto flex-col w-full overflow-x-auto'>
          <Card data={fakeData} />
          <Card data={fakeData1} reStyle='mt-4' />
    </div>
  )
}

export default Main