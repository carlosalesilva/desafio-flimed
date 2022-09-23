import React, { ChangeEvent, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



interface ITask {
  titulo: string;
  descricao: string;
  conteudo: string;
}

const FormTask: React.FC = () => {

  //const { id } = useParams();

  const [model, setModel] = useState<ITask>({
    titulo: '',
    descricao: '',
    conteudo: ''
  })

  /*useEffect(() => {
      console.log(id)
  }, [id])*/

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit (e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()

    console.log(model)
  }

  return (
    <div className='container'>
      <br />
      <div className='task-header'>
        <h1>Nova Nota</h1>
        <Link to='/tarefas'>
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
              name='titulo'
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              placeholder="Digite o título..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              name='descricao'
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              placeholder="Digite a descrição..."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Conteúdo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name='conteudo'
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
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