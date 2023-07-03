
"use client";

import React, { useState, useEffect } from "react";


export default function Home() {


const AUDI80="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dvfW78JxXCzsx7ynA2rdy350qivt2eKZVA4t7mmz&s";
const AUDI100="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA5rDkpdAtx66Yet5zzgVlx9t4U_Iwh2fTfOdNKaSt-Q&s";
const AUDIA1="https://www.webmotors.com.br/carros/estoque/audi/a1";
const AUDIA1QU="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202304/20230420/audi-a1-1.4-tfsi-sport-16v-185cv-gasolina-2p-automatico-wmimagem17102309680.jpg?s=fill&w=249&h=186&q=70";
const AUDIA3="https://audimediacenter-a.akamaihd.net/system/production/media/90567/images/72391bd2d21a80a761f0df1bd5bff197d5804daa/A201895_blog.jpg?1583155437";
const AUDIA3SP="https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2021/11/23115438/Audi-A3-Sportback-S-Line-13-1160x653.jpg";
const AUDIA4SE="https://3.bp.blogspot.com/-l5fyrzofywY/XNtf7MumLpI/AAAAAAAAUgU/ojb-WB3NpVwokb890FVbMXVSFRCSSENMACLcBGAs/s1600/Novo-Audi-A4-2020%2B%25284%2529.jpg";
const AUDIA7="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202306/20230616/AUDI-A7-3.0-55-TFSI-GASOLINA-PERFORMANCE-QUATTRO-4P-STRONIC-wmimagem09022201735.jpg?s=fill&w=249&h=186&q=70";
const AUDIA8="https://cdn.motor1.com/images/mgl/W89egj/367:0:2188:1642/2023-audi-r8-v10-gt-rwd-exterior.webp";
const AUDIA8LW="https://motorshow.com.br/wp-content/uploads/sites/2/2015/08/img-365237-audi-a8-l-w12.jpg";
const AUDIQ3="https://quatrorodas.abril.com.br/wp-content/uploads/2022/01/02__DSC5619-Bearbeitet-e1643936180573.jpg?quality=70&strip=info&w=1280&h=720&crop=1";
const AUDIQ5="https://cdn.motor1.com/images/mgl/0eJWgm/s3/audi-q5-sportback-tfsie-2023.jpg";
const AUDIQ7="https://cdn.motor1.com/images/mgl/wl2rNQ/s1/2024-audi-q7-facelift-rendering.jpg";
const AUDIR8="https://cdn.motor1.com/images/mgl/xqZoAk/s3/2023-audi-r8-v10-gt-rwd.jpg";
const AUDIR8GT="https://s.glbimg.com/jo/g1/f/original/2011/06/03/audi-2-620.jpg";
const AUDIRS3="https://www.revistafullpower.com.br/wp-content/uploads/2021/07/rs01.jpg";
const AUDIRS4A="https://image1.mobiauto.com.br/images/api/images/v1.0/62686222/transform/fl_progressive,f_webp,q_70";
const AUDIRS5="https://rodasdeligaleve.com.br/media/mageplaza/blog/post/r/o/rodas-raw-a23-modelo-audi-rs5.jpg";
const AUDIRS6="https://motorshow.com.br/wp-content/uploads/sites/2/2021/07/audi-rs-6-avant-2021-1.jpg";
const AUDIS3="https://www.automaistv.com.br/wp-content/uploads/2022/07/Audi-S3-1_edited-990x594.jpg";
const AUDIS4SE="https://1.bp.blogspot.com/-8SLT0tfBJ7s/XQz1ADy7gFI/AAAAAAACwBc/Yfgz7VM6a_8iv_6KLz2Y_L7Or8v9XUy8wCLcBGAs/s1600/novo-audi-s4-2020%2B%25284%2529.jpg";
const AUDIS6AV="https://www.automaistv.com.br/wp-content/uploads/2022/03/audi_a6_avant_e-tron_concept_89_edited-990x593.jpg";
const AUDIS7="https://www.motortrend.com/uploads/2022/07/2023-Audi-S7-02-front-three-quarter-view.jpg";
const AUDIS8="https://cdn.motor1.com/images/mgl/8QMwo/s3/2022-audi-a8-l.jpg";
const AUDITT="https://revistacarro.com.br/wp-content/uploads/2020/12/Audi-TT-RS_4.jpg";
const AUDITTRO="https://quatrorodas.abril.com.br/wp-content/uploads/2016/11/5658c582de40d64c2037ecccaudi-tts-roadster-2015.jpeg?quality=70&strip=all";
const AUDITTS="https://quatrorodas.abril.com.br/wp-content/uploads/2023/02/1109060-e1676667092474.jpg?quality=70&strip=info&w=1280&h=720&crop=1";
const BMWRX="https://quatrorodas.abril.com.br/wp-content/uploads/2023/02/1109060-e1676667092474.jpg?quality=70&strip=info&w=1280&h=720&crop=1";
const BMW118="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_BMW_118i_SE_Automatic_1.5.jpg/1024px-2018_BMW_118i_SE_Automatic_1.5.jpg";
const BMW130="https://www.mazettoseguros.com.br/blog/wp-content/uploads/2018/04/seguro-bmw-130i.jpg";
const BMW318="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2022/202208/20220808/bmw-318i-2.0-sport-16v-gasolina-4p-automatico-WMIMAGEM12581722871.jpg?s=fill&w=249&h=186&q=70";
const BMW520="https://www.razaoautomovel.com/wp-content/uploads/2019/09/BMW-520d-1_925x520_acf_cropped.jpeg";
const BMW530="https://bocamafrapremium.com.br/wp-content/uploads/2022/12/e1085437ea654060ae7b9e6a7fd9ce3c_1657630837337.jpg";

const arrayDeVariaveis = [AUDI80, AUDI100, AUDIA1, AUDIA1QU, AUDIA3, AUDIA3SP, AUDIA4SE, AUDIA7, AUDIA8, AUDIA8LW, AUDIQ3, AUDIQ5, AUDIQ7, AUDIR8, AUDIR8GT, AUDIRS3, AUDIRS4A, AUDIRS5, AUDIRS6, AUDIS3, AUDIS4SE, AUDIS6AV, AUDIS7, AUDIS8, AUDITT, AUDITTRO, AUDITTS, BMWRX, BMW118, BMW130, BMW318, BMW520, BMW530

]

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
  
 
  

  const marcaModeloCarro = BMW130;

  {/*const fotoCarroFiltrada = arrayDeVariaveis.filter(variavel => variavel === marcaModeloCarro);*/}

  
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

{/*--------------------------------------------------------------------------------------------------*/}

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

      
      
      
      {/*<p>{fotoCarroFiltrada}</p>*/}     
     
      <img src={marcaModeloCarro} alt="Imagem" className="w-36 h-auto" />

    </div>
  
)}
