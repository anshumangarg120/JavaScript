import React, {useState} from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';




function App() {

  const data = [ 
  { image: "https://media.istockphoto.com/id/1085717468/photo/robotic-seminar-in-the-arena.jpg?s=612x612&w=is&k=20&c=AIDae7TGMWEVDQ1-L0xsQgGyrGiz51-bHFjmACheNOw=", name: "X-Dom", artist: "Anish", added: true },

  { image: "https://media.istockphoto.com/id/1170687104/photo/photo-of-charming-beautiful-wavy-curly-haired-girl-listening-to-music-wearing-yellow-pullover.jpg?s=612x612&w=is&k=20&c=s95_DILGHhZMKdKnmp__x9Jz8fFS4fYnIm6osH3quMI=", name: "X-Mod", artist: "Anisha", added: false },

  { image: "https://media.istockphoto.com/id/914202356/photo/young-woman-listening-music.jpg?s=1024x1024&w=is&k=20&c=FFj9VwuakeHQ198W9UIlwehSs5oFXcr-PJICZ-BydPY=", name: "One Love", artist: "Kumkum", added: false },

  { image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Z-xxx", artist: "Manisha", added: false },



 ];

 const [songData, setSongData] = useState(data);
 const handleClick = (index) => {
   setSongData((prev ) => {
    return prev.map((item, itemIndex) => {
      if (itemIndex === index) return {...item, added: !item.added };
      return item;
    })
   })
 }


  return (
    <>
    <div className='w-full h-screen bg-zinc-300  gap-4 items-center justify-center'> 
    <Navbar data={songData} />
    <div className='px-20 flex flex-wrap  gap-10 mt-10 '>  
       {songData.map((obj, index) => (
       <Card data={obj} handleClick={handleClick} index={index} key={index} />
       ))}
    </div>
    </div>
  
    </>
  );
}

export default App
