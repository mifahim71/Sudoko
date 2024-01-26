import React from 'react'

export default function Board({copyDataArray, dataArray, handleMainNumbers}) {
  return (
    <div className='w-[460px] h-[460px] grid grid-cols-9 border-2 border-white'>
        {dataArray.map((singleBox, i) => <div 
                                            key={i} 
                                            className='font-mono text-[1.2rem] w-[50px] h-[50px] border-[1px] border-white text-white flex justify-center items-center cursor-pointer'
                                            onClick={()=>handleMainNumbers(i)}
                                            style={{color: `${singleBox !== copyDataArray[i]? 'red':'white'}`,
                                            borderLeft:`${i===3 || i===6 || i==12 || i==15 || i==21 || i==24 || i==30 || i==33 || i==39 || i==42 || i==48 || i==51 || i==57 || i==60 || i==66 || i==69 || i==75 || i==78?'4':'0'}px solid white`,
                                            borderTop: `${i===27 || i===28 || i==29 || i==30 || i==31 || i==32 || i==33 || i==34 || i==35 || i==54 || i==55 || i==56 || i==57 || i==58 || i==59 || i==60 || i==61 || i==62?'4':'0'}px solid white`}}
                                        >{singleBox}</div>)}
    </div>
  )
}
