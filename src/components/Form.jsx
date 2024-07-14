import React, { useState } from 'react'
import style from "./Form.module.css"
const Form = () => {
    // states:
    const [weight ,setWeight] = useState(0)
    const [height ,setHeight] = useState(0)
    const [resultView, setResultView] = useState(false)

    const [imc, setImc] = useState ("")

    const clearInput = () =>{
        setHeight("")
        setWeight("")
    }
    // html:
  return (  
<>
<header className={style.header} >
    <h1>Calculo de IMC</h1>
</header>
 <div className='container'>
    <form className={style.form}>
        <label htmlFor="wheight">Insira o seu Peso:</label>
        <input type="text" placeholder='Peso' onChange={(e)=>setWeight(parseInt(e.target.value))}/>
        <label htmlFor="height">Insira o sua Altura:</label>
        <input type="text" placeholder='Altura' onChange={(e)=>setHeight(parseInt(e.target.value))}/>
        <button type='submit' onClick={(e) =>{
            e.preventDefault()
            setResultView(true)
            let imcCalculed = (height*height)/weight
            if (imcCalculed <= 16) {
                setImc("Magreza");
            } else if (imcCalculed <= 25) {
                setImc("Normal");
            } else if (imcCalculed <= 29) {
                setImc("SobrePeso");
            } else if (imcCalculed > 29) {
                setImc("Obesidade I");
            }
            
        }}>Calcular</button>
        <button type='submit'>Refazer</button>
    </form>
    <section>
        {resultView &&(
                   <table className={style.table}>
                   <caption>
                       Resultado IMC
                   </caption>
                 <thead>
                   <tr>
                       <th>PESO</th>
                       <th>ALTURA</th>
                       <th>RESULTADO</th>
                   </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>{weight}KG</td>
                           <td>{height}Metro</td>
                           <td>{imc}</td>
                       </tr>
                   </tbody>
           
                   </table>
        )}
    </section>
 </div>
</>
  )

}

export default Form
