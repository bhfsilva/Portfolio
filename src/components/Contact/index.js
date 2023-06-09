import { useState } from 'react';
import styles from './Contact.module.css';
import SocialMedias from 'src/commons/SocialMedias';
export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //Fiz uma requisição para a API do Next.JS porque a API do Notion não suporta o CORS
  //Caso a requisição para a API do Notion seja feita diretamente pelo componente, um erro de CORS será gerado

  async function enviar(){
    fetch('/api',
      {headers:{'Content-Type':'application/json'},
      method:'POST',
      body:JSON.stringify({author:name,contact:email,comment:message})}
    );
  }

  function submitForm(event){
    event.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }

  const formItems = [
    {tagName:"input", type:"text", holder:"Insira seu nome", varValue:name, setFunction:setName},
    {tagName:"input", type:"email", holder:"Insira seu email", varValue:email, setFunction:setEmail},
    {tagName:"textarea", holder:"Deixe um comentário", varValue:message, setFunction:setMessage}
  ]

  return (
    <div className={`${styles.contactBox} defaultMargin`} id="Contato">
      <fieldset >
        <legend className='contentTitle'>Entre em contato!</legend>
        <div className={styles.infoBox}>
          <SocialMedias contactSize/>
        </div>
        <hr/>
        <form className={styles.formBox} onSubmit={(event) => submitForm(event)}>
          <h1>Deixe um comentário!</h1>
          {formItems.map((item,index) => (
            <item.tagName
              key={index}
              type={item.type}
              placeholder={item.holder}
              value={item.varValue}
              onChange={(event) => item.setFunction(event.target.value)}
              />
            ))}
          <button type="submit" onClick={enviar}>Enviar</button>
        </form>
      </fieldset>
    </div>
  )
}
