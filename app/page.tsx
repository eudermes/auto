
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function Home() {


  const [anoCarroNovo, setAnoCarroNovo] = useState("");
  const [valorCarroNovo, setValorCarroNovo] = useState("");
  const [valorCarroVelho, setValorCarroVelho] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [agil, setAgil] = useState("");
  const [quotaMax, setQuotaMax] = useState<number>(0);
  
  const idadeCarro = 2023 - parseInt(anoCarroNovo);
  

  const handleanoCarroNovoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnoCarroNovo(event.target.value);
  }

  const handlevalorCarroNovoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorCarroNovo(event.target.value);
  }

    const handlevalorCarroVelhoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorCarroVelho(event.target.value);
  }

const handlevalorEntradaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorEntrada(event.target.value);
  }

  const handleagilChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgil(event.target.value);
  }

  return (

    <div className=' bg-blue-400'>
    <h1 className='text-center text-white text-3xl font-bold p-5'>PARÂMETROS FINANCIAMENTO:</h1>
    
    <div className='w-full flex justify-center space-x-40'>
    <div className='w-60 h-screen'>
      
      
      <div>
      <label className='m-5 mb-0'>Ano do carro novo</label>
      <br></br>
      <input
        type="number"
        id="anoCarroNovo"
        name="anoCarroNovo"
        value={anoCarroNovo}
        onChange={handleanoCarroNovoChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3'>{anoCarroNovo}</p>
      </div>

      <div>
      <label className='m-5 mb-0'>Valor Carro Novo</label>
      <br></br>
      <input
        type="number"
        id="valorCarroNovo"
        name="valorCarroNovo"
        value={valorCarroNovo}
        onChange={handlevalorCarroNovoChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3'>{valorCarroNovo}</p>
      </div>

      <div>
      <label className='m-5 mb-0'>Valor Carro Velho</label>
      <br></br>
      <input
        type="number"
        id="valorCarroVelho"
        name="valorCarroVelho"
        value={valorCarroVelho}
        onChange={handlevalorCarroVelhoChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3'>{valorCarroVelho}</p>
      </div>

      <div>
      <label className='m-5 mb-0'>Valor da Entrada</label>
      <br></br>
      <input
        type="number"
        id="valorEntrada"
        name="valorEntrada"
        value={valorEntrada}
        onChange={handlevalorEntradaChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3'>{valorEntrada}</p>
      </div>

      <div>
      <label className='m-5 mb-0'>Percentual ágil/deságio</label>
      <br></br>
      <input
        type="number"
        id="agil"
        name="agil"
        value={agil}
        onChange={handleagilChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3'>{agil}</p>
      </div>
      </div>

      <div>
      {idadeCarro > 0 && <p className='p-1 pt-1 mt-0 m-3 text-white'>{`idade do carro: ${idadeCarro} anos`}</p>}
      
  
      </div>


      </div>

      
    </div>
  );
}
