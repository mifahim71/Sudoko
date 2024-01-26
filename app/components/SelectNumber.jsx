import React from 'react'

export default function SelectNumber({selectArray, handleSelectNumber, selectedNumber}) {
  return (
    <div className='w-[450px] h-[50px] grid grid-cols-9 border-2 border-white'>
        {selectArray.map((clickedNumber, i) => <div 
                                                    key={i}
                                                    className='font-mono text-[1.2rem] border-[1px] border-white text-white flex justify-center items-center cursor-pointer'
                                                    clickedNumber={clickedNumber}
                                                    onClick={()=>handleSelectNumber(clickedNumber)}
                                                    style={{backgroundColor: `${clickedNumber === selectedNumber? 'white':'transparent'}`,
                                                            color: `${clickedNumber === selectedNumber? 'rgb(30 58 138)':'white'}`}}
                                                >{clickedNumber}</div>)}
    </div>
  )
}
