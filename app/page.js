/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from 'react'
import NewGame from './components/NewGame';
import Board from './components/Board';
import SelectNumber from './components/SelectNumber';

export default function page() {
  const arrays = [
    [1,5,2,4,8,9,3,7,6,7,3,9,2,5,6,8,4,1,4,6,8,3,7,1,2,9,5,3,8,7,1,2,4,6,5,9,5,9,1,7,6,3,4,2,8,2,4,6,8,9,5,7,1,3,9,1,4,6,3,7,5,8,2,6,2,5,9,4,8,1,3,7,8,7,3,5,1,2,9,6,4],
    [4,5,3,8,2,6,1,9,7,8,9,2,5,7,1,6,3,4,1,6,7,4,9,3,5,2,8,7,1,4,9,5,2,8,6,3,5,8,6,1,3,7,2,4,9,3,2,9,6,8,4,7,5,1,9,3,5,2,1,8,4,7,6,6,7,1,3,4,5,9,8,2,2,4,8,7,6,9,3,1,5],
    [9,5,7,6,1,3,2,8,4,4,8,3,2,5,7,1,9,6,6,1,2,8,4,9,5,3,7,1,7,8,3,6,4,9,5,2,5,2,4,9,7,1,3,6,8,3,6,9,5,2,8,7,4,1,8,4,5,7,9,2,6,1,3,2,9,1,4,3,6,8,7,5,7,3,6,1,8,5,4,2,9],
    [1,2,6,4,3,7,9,5,8,8,9,5,6,2,1,4,7,3,3,7,4,9,8,5,1,2,6,4,5,7,1,9,3,8,6,2,9,8,3,2,4,6,5,1,7,6,1,2,5,7,8,3,9,4,2,6,9,3,1,4,7,8,5,5,4,8,7,6,9,2,3,1,7,3,1,8,5,2,6,4,9],
  ];
  const [dataArray, setDataArray] = useState([]);
  const [selectArray, setSelectArray] = useState([1,2,3,4,5,6,7,8,9])
  const [copyDataArray, setCopyDataArray] = useState([]);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [level, setLevel] = useState(false);

  

  useEffect(()=>{
    
    const randomNum = Math.floor(Math.random()*arrays.length);
    const chosenArray = arrays[randomNum];
    setCopyDataArray(chosenArray);

    let sortedDataArray = [...arrays[randomNum]];
    for (let i = 0; i < 90; i++) {
      const randomIndex = Math.floor(Math.random() * sortedDataArray.length);
      if(sortedDataArray[randomIndex] !== ''){
        sortedDataArray[randomIndex] = ''; 
      }
      
    }
    setDataArray(sortedDataArray);
  },[])

  const handleSelectNumber = (clickedNumber) => {
    setSelectedNumber(clickedNumber);
  }

  const handleMainNumbers = (i) => {
    if(!selectedNumber) return;
    const copyArray = [...dataArray];
    copyArray[i] = selectedNumber;
    setDataArray(copyArray);
    setSelectedNumber(null);
  }
  
  const handleNewGame = (level) => {
    let CopyDataArray = [...copyDataArray];
    for (let i = 0; i < level; i++) {
      const randomIndex = Math.floor(Math.random() * CopyDataArray.length);
      if(CopyDataArray !== ''){
        CopyDataArray[randomIndex] = ''; 
      }
    }
    setDataArray(CopyDataArray)
  }
  return (
    <main className='w-screen min-h-screen bg-blue-900 flex flex-col justify-evenly items-center'>
      <h1 className='font-mono text-white text-[2rem]'>Choose Defficulties</h1>
      <NewGame handleNewGame={handleNewGame}/>
      <Board dataArray={dataArray} handleMainNumbers={handleMainNumbers} copyDataArray={copyDataArray}/>
      <SelectNumber selectArray={selectArray} handleSelectNumber={handleSelectNumber} selectedNumber={selectedNumber}/>
    </main>
  )
}
