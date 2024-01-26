import React from 'react'

export default function NewGame({handleNewGame}) {
  return (
    <div className='font-mono text-white flex justify-between items-center w-[450px] text-[1.2rem]'>deficulties:  <button onClick={()=>handleNewGame(65)}>Easy</button> 
                                                                                                                    <button onClick={()=>handleNewGame(75)}>Intermideat</button>         
                                                                                                               <button onClick={()=>handleNewGame(80)}>Expert</button></div>
  )
}