import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CriarNotas } from '../../../service/Notas';


import { AuthContext } from '../../../App';


const FormTask = () => {

  //const { id } = useParams();

  const  context = useContext(AuthContext)


  const [model, setModel] = useState({
    title: '',
    content: '',
    description: ''
  })

  /*useEffect(() => {
      console.log(id)
  }, [id])*/

  function updatedModel(e) {

    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit (e){
    e.preventDefault()

    CriarNotas(context.token.token, model).then(
      (response) => {
        console.log("Cadastrado")
        console.log(response.data)

      }
    ).catch(
        (error => {
            console.log(error);
        })
    )

  }

  return (
    <div className='container'>
      <br />
      <div className='task-header'>
        <h1>Nova Nota</h1>
        <Link to='/'>
          <Button variant='dark'>Voltar</Button>
        </Link>
      </div>
      <br />
      <div className='container'>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              name='title'
              onChange={(e) => updatedModel(e)}
              placeholder="Digite o título..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              name='description'
              onChange={(e) => updatedModel(e)}
              placeholder="Digite a descrição..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Conteúdo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name='content'
              onChange={(e) => updatedModel(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Salvar
          </Button>
        </Form>

      </div>
    </div>
  );
}

export default FormTask;