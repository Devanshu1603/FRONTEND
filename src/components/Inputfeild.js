import React from 'react'

export default function Inputfeild({
    type,placeholder,icon,pattern,title,value,onChange}) {
  return (
    <div className="input-wrapper">
            <input type={type} placeholder={placeholder} className="input-field"  value={value} onChange={onChange} pattern={pattern} title={title} required />
            <span id='loginup-symbols' class="material-symbols-outlined">{icon}</span>
        </div>
  )
}
