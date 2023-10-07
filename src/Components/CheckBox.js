import React from 'react'

const CheckBox = ({country,updateCountry}) => {
    const checkboxClickHandle = (e)=>{
        updateCountry(e.target.value)
        
    }
  return (
    <div className='country-card'>
        <input type='checkbox'  checked={country.checked?true:false} id={country.name} value={country.code}   onChange={checkboxClickHandle}/>
        <img src={`https://flagsapi.com/${country.code}/flat/32.png`} alt='country flag' className='country-flag'/>
        <label className='country-label' htmlFor={country.name}>{country.name}</label>

    </div>
  )
}

export default CheckBox