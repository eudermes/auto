
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function Home() {


  const [anoCarroNovo, setAnoCarroNovo] = useState(2023);
  const [valorCarroNovo, setValorCarroNovo] = useState("");
  const [valorCarroVelho, setValorCarroVelho] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [agil, setAgil] = useState("");
  const [quotaMax, setQuotaMax] = useState<number>(0);
  const [prazoMax, setPrazoMax] = useState<number>(0);
  const [txJuros, setTxJuros] = useState<number>(0);
  const [produto, setProduto] = useState<number>(0);


  const idadeCarro = (2023 - parseInt(anoCarroNovo));
  
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

  useEffect(() => {
    if(idadeCarro <=2){setQuotaMax(0.8), setPrazoMax(60), setTxJuros(2.92)}
  
    if(idadeCarro >=3 && idadeCarro <=5){setQuotaMax(0.6), setPrazoMax(60), setTxJuros(4.26)}

    if(idadeCarro >=6 && idadeCarro <=8){setQuotaMax(0.5),setPrazoMax(48), setTxJuros(2.34)}

    if(idadeCarro ==9){setQuotaMax(0.5),setPrazoMax(36), setTxJuros(2.34)}

    if(idadeCarro ==10){setQuotaMax(0.5),setPrazoMax(24), setTxJuros(2.34)}

    if(idadeCarro > 10){setQuotaMax(0), setPrazoMax(0), setTxJuros(0) }
  
  }, [idadeCarro]);


  const handleCalcularProduto = () => {
     const valorCarroNovoFloat = parseFloat(valorCarroNovo);
     const produtoCalculado = valorCarroNovoFloat * quotaMax;
    setProduto(produtoCalculado);
      };
    
      
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
      {idadeCarro >= 0 && <p className='p-1 pt-1 mt-0 m-3 text-white'>{`idade do carro: ${idadeCarro} anos`}</p>}
      

      {quotaMax >= 0 && <p className='p-1 pt-1 mt-0 m-3 text-white'>{`a cota máxima de financiamento é ${quotaMax}`}</p>}
      
      {prazoMax >= 0 && <p className='p-1 pt-1 mt-0 m-3 text-white'>{`o prazo máximo de financiamento é ${prazoMax} meses`}</p>}
      
      {txJuros >= 0 && <p className='p-1 pt-1 mt-0 m-3 text-white'>{`a taxa de juros mensal é ${txJuros}%`}</p>}
      
      {idadeCarro > 10 && <p className='p-1 pt-1 mt-0 m-3 text-white'>Lamentamos Muito, mas infelizmente não financiamos veículos com mais de 10 anos. Gostaríamos de lhe oferecer nossas opções de consorcio: <a href='http://www.caixaconsorcio.com.br/consorcio'className='text-blue-900'>caixaconsorcio</a></p>}
      


      {idadeCarro > 10 && <p className='p-1 pt-1 mt-0 m-3 text-red-600'>Aqui deveria aparecer o produto das variáveis valorCarroNovo * quotaMax, mas não estou conseguindo</p>}
      
      <button onClick={handleCalcularProduto} className='text-white'>Calcular</button>

      <p>{produto}</p>
    
      </div>


      </div>

      
    </div>
  );
}
