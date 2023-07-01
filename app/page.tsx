
"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";

export default function Home() {


  const [anoCarroNovo, setAnoCarroNovo] = useState<number>(2023);
  const [valorCarroNovo, setValorCarroNovo] = useState<number>(0);
  const [valorCarroVelho, setValorCarroVelho] = useState<number>(0);
  const [valorEntrada, setValorEntrada] = useState<number>(0);
  const [agil, setAgil] = useState<number>(0);
  const [quotaMax, setQuotaMax] = useState<number>(0);
  const [prazoMax, setPrazoMax] = useState<number>(0);
  const [txJuros, setTxJuros] = useState<number>(0);
  const [valorMax, setValorMax] = useState<number>(0);
  const [valorCarroVelhoAgil, setValorCarroVelhoAgil] = useState<number>(0);
  const [valorSolicitado, setValorSolicitado] = useState<number>(0);
  const [acrescimoEntrada, setAcressimoEntradda] = useState<number>(0);
  const [cpf, setCpf] = useState(" ");
  const [renda, setRenda] = useState<number>(0);
  const [comprometimento, setComprometimento] = useState<number>(0);
  const [valorDisponivelParcela, setValorDisponivelParcela] = useState<number>(0);
  const [percentualComprometimento, setPercentualComprometimento] = useState<number>(0);
  const [percentualComprometimentoX100, setPercentualComprometimentoX100] = useState<number>(0);

  const idadeCarro = (2023 - parseInt(anoCarroNovo));

  const handleComprometimentoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComprometimento(event.target.value);
  }

  const handleCpfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  }
  
  const handleRendaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRenda(event.target.value);
  }

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
  
         const handleValorMax = () => {
          const valorCarroNovoFloat = parseFloat(valorCarroNovo);
          const produtoCalculado = valorCarroNovoFloat * quotaMax;

          const valorCarroVelhoFloat = parseFloat(valorCarroVelho);
          const produtoValorCarroVelhoAgil = valorCarroVelhoFloat * agil;

          const valorSolicitadoFloat = parseFloat(valorSolicitado);
          const valorEntradaFloat = parseFloat(valorEntrada);
          const valorCarroVelhoAgilFloat = parseFloat(valorCarroVelhoAgil);
          const somaValorSolicitado =valorCarroNovoFloat - (valorEntradaFloat + valorCarroVelhoAgilFloat);

          const acressimoEntradaFloat = parseFloat(acrescimoEntrada);
          const valorMaxFloat = parseFloat(valorMax);
          const subAcressimoEntrada = valorSolicitadoFloat - valorMaxFloat

        


         setValorMax(produtoCalculado), setValorCarroVelhoAgil(produtoValorCarroVelhoAgil), setValorSolicitado(somaValorSolicitado), setAcressimoEntradda(subAcressimoEntrada);
           };
  
           const handleAvaliar = () => {

            const rendaFloat = parseFloat(renda);
            const comprometimentoFloat = parseFloat(comprometimento);
            const valorDisponivelParcelaFloat = parseFloat(setValorDisponivelParcela);
            const opvalorDisponivelParcela = (rendaFloat * 0.3) - comprometimentoFloat;

            const percentualComprometimentoFloat = parseFloat(percentualComprometimento);
            const opPercentualComprometimento = comprometimentoFloat / rendaFloat;

            const percentualComprometimentoX100Float = parseFloat(percentualComprometimentoX100);
            const opPercentualComprometimentoX100 = percentualComprometimentoFloat * 100;

           setValorDisponivelParcela(opvalorDisponivelParcela), setPercentualComprometimento(opPercentualComprometimento),setPercentualComprometimentoX100(opPercentualComprometimentoX100);
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
      
      <p className='text-white'>O valor máximo LIBERADO para financiamento deste veículo é {valorMax} reais</p>
      
      <p className='text-white'>A expectativa do valor de VENDA VEÍCULO ATUAL é {valorCarroVelhoAgil} reais</p>
      
      <p className='text-white'>o valor de financiamento NECESSÁRIO é {valorSolicitado} reais</p>
      
    
    <button onClick={handleValorMax} className='text-white w-20 h-auto bg-orange-500'>Calcular</button>

    {valorMax >= valorSolicitado && <p className='p-1 pt-1 mt-0 m-3 text-red-600'>O valor LIBERADO é suficiente</p>}
      
    {valorMax < valorSolicitado && <p className='p-1 pt-1 mt-0 m-3 text-red-600'>Você precisa aumentar {acrescimoEntrada} reais no valor de entrada</p>}
    

      </div>


      </div>

      <div>
            <h1 className='text-white text-3xl text-center' >Gostaria de analisar se o valor da parcela irá comprometer o seu orçamento financeiro?</h1>
          </div>

          <div className='flex justify-center m-7 mb-0'>
          


          <div>
      <label className='m-5 mb-0'>Digite seu CPF</label>
      <br></br>
      <input
        type="text"
        id="cpf"
        name="cpf"
        value={cpf}
        onChange={handleCpfChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3 mb-0'>{cpf}</p>
      </div>


          <div>
      <label className='m-5 mb-0'>Informe sua renda mensal</label>
      <br></br>
      <input
        type="number"
        id="renda"
        name="renda"
        value={renda}
        onChange={handleRendaChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3 mb-0'>{renda}</p>
      </div>

      <div>
      <label className='m-5 mb-0'>Empréstimos e financiamentos já contratados:</label>
      <br></br>
      <input
        type="number"
        id="comprometimento"
        name="comprometimento"
        value={comprometimento}
        onChange={handleComprometimentoChange}
        className='border-spacing-y-2 bg-white text-black p-1 pt-1 mt-0 m-3 rounded-lg hover:bg-blue-100'
      />
      <p className='p-1 pt-1 mt-0 m-3 mb-0'>{comprometimento}</p>
      </div>

      </div>{/* fim bloco analise de renda*/}

      {cpf && <p className='mt-0 text-red-600 text-center'>Parabéns seu CPF não possui nenhuma restrição</p>}
    
      <button onClick={handleAvaliar} className='text-white w-20 h-auto bg-orange-500'>Avaliar</button>
      
      {percentualComprometimento <= 0.3 && <p>O valor máximo da parcela para você a adicionar aos seus gastos mensais e não ultrapassar os 30% de comprometimento financeiro é {valorDisponivelParcela} reais.</p>}  

      {percentualComprometimento > 0.3 && <p>O seu percentual de Comprometimento com pagamento de financiamentos e empréstimo já encontra se acima dos 30%, ele está hoje com {percentualComprometimento}</p>}  

         

    </div>
  );
}
