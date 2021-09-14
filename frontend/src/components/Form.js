import React, { useState } from "react";

import { BsFilePlus } from "react-icons/bs";

function Form() {
  const [title, setTitle ]  = useState("");
  const [text, setText ]  = useState("");

  function criarnota() {
    setTitle(document.getElementById['title']);
    setText(document.getElementById['text']);
  }
  
  return (
    <>
    <form className="caixa-form" onSubmit={criarnota}>
      <label className="label">
        <BsFilePlus size={20} color="blueviolet" /> Nova Nota
      </label>
      <input type="text" className="titulo-texto" id="title" placeholder="Título da sua nota..." />

      <textarea className="descricao-texto" id="text" placeholder="Escreva aqui sua nota..." />

      <button type="submit" className="butao">+ Criar Nota</button>
    </form>
    {text}
    </>
  )
}

export default Form;