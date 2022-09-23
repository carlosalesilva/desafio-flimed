import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link} from "react-router-dom";
import {CadastroUser} from "../../service/api";

import history from "../../history";

export default () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email | !nome | !senha) {
      setError("Preencha todos os campos");
      return;
    } 

    const user = {
      "name": nome,
      "email": email,
      "password": senha
    }

  const res = CadastroUser(user);
    CadastroUser(user).then((response)=>{
      console.log("Deu certo")
      history.push("/login");
    }).catch((error)=>{
        alert("Usuário não cadastrado");
    })
    
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => [setNome(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Inscrever-se" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/login">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

