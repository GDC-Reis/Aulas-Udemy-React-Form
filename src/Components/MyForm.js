import './MyForm.css';
import { useState } from 'react';

const MyFrom = ( {user}) => {

    // 6 - Controlled Inputs

    // 3 - GERENCIAMENTO DE DADOS
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    
    
    const[bio, setBio] = useState(user ? user.bio : '');

    const[role, setRole] = useState(user ? user.role : '');


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); {/*FAZ COM QUE A PAGINA NÃO RECARREGUE APOS O USUARIO CLIAR NO BOTÃO ENVIAR*/}
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)

        //validacao
        //envio

        // 7 - Limpar Form 
        setName("");
        setEmail("");
        setBio("");
        setRole("");
    }

    return ( 
        <div>
            { /* 5 - ENVIO DE FORM */ }
            {/*CRIAÇÃO DE FORM*/}
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor='name'>Nome: </label>
                    <input type='text' name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
                </div>
                
                {/* 2 - Label Envolvendo input */}
                <label>
                    <span>E-mail</span> {/* USO SUGERIDO PELO REACT */}
                    {/*MANIPULAÇÃO DE STATE*/}
                    <input type='email' name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/> {/*Forma não recomendada para o tratamento forma da função em line*/}
                </label> 
                
                {/* 8 - TEXT AREA*/}
                <label>
                    <sapn>Bio:</sapn>
                    <textarea  name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label> 

                {/* 9 - Select */}
                <label>
                    <sapn>Função Select</sapn>
                    <select name='role' onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value='user'>Usuario</option>
                        <option value='editor'>Editor</option>
                        <option value='admin'>Administrador</option>
                    </select>
                </label>             
                
                <input type='submit' value="Enviar" /> 
            </form>
        </div>
     );
}
 
export default MyFrom;