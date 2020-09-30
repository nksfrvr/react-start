import React  from 'react';

const Ninjas = (props)=>{

  const {ninjas} = props;
  //const ninjaList = ninjas.map(ninja =>{
  //  return(
  //    <div className='ninja'>
  //      <p> Hello, my name is <span>{ninja.name}</span></p>
  //      <p> I have  {ninja.age} years</p>
  //      <p> And im a  {ninja.belt} belt ninja! Haa-Yaa!</p>
  //    </div>
  //  )
  //})

  const ninjaList = ninjas.map(ninja => {
    return ninja.age >25?(
      <div className='ninja' key= {ninja.id}>
         <p> Hello, my name is <span>{ninja.name}</span></p>
         <p> I have  {ninja.age} years</p>
         <p> And im a  {ninja.belt} belt ninja! Haa-Yaa!</p>
       </div>

    ):(
      <div className='ninja' key={ninja.id}>
        <p><span>{ninja.name} </span>is to young play the game</p>
      </div>
    )
  })

  return(

    <div className='ninja-list'>
      <h1 className='ninja-title'> The Ninja List</h1>
    {ninjaList}
    </div>
  )
}

export default Ninjas;
