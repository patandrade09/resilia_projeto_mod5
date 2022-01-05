import React from 'react'
import styles from './Suporte.module.css'

function Suporte() {
    return (
        <div className={styles.container}>
            <img src="https://i.pinimg.com/originals/1f/3c/c2/1f3cc216d3bcd5584f87c7b7f5b978a2.jpg" className={styles.item3} alt="" />
            <h1 className={styles.item4}>Suporte rápido</h1>
            <form className={styles.item1}>
                <label htmlFor="Nome">Digite seu nome:</label>
                <input type="text" name="Nome" placeholder="Nome" required />
                <label htmlFor="Email">Digite seu email:</label>
                <input type="email" name="Email" placeholder="Email" required />
                <label htmlFor="Telefone">Telefone para contato:</label>
                <input type="tel" name="Telefone" placeholder="(xx)xxxxx-xxxx" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required />
                <label htmlFor="mensagem">Descreva seu problema:</label>
                <textarea name="Mensagem" id="" cols="30" rows="8" placeholder="Digite sua mensagem..."></textarea>
                <button type="submit">Enviar</button>
            </form>
            <div className={styles.item2}>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                    <h3 >Endereço</h3>
                    <p >Rua resilia n:08 bairro coruja</p>
                </div>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                    <h3>Telefone</h3>
                    <p>(11)8888-88888</p>
                </div>
                <div>
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                    <h3>Email</h3>
                    <p>suporte@coruja.com</p>
                </div>
            </div>
        </div>
    )
}

export default Suporte