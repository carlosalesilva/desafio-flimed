import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Link, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AtualizaNota, CriarNotas, GetNota } from '../../../service/Notas';


import { AuthContext } from '../../../App';
import Header from '../../../components/Header';

import history from "../../../history";


const FormTask = () => {

  const { id } = useParams();

  useEffect(() => {
    GetNota(context.token.token, id).then(
      (response) => {
        if (response.data.note != null) {
          setModel({
            ...model,
            title: response.data.note.title,
            content: response.data.note.content,
            description: response.data.note.description
          })
        }

      }
    ).catch(
      (error => {
        console.log(error);
      })
    )
  }, [id])

  const context = useContext(AuthContext)


  const [model, setModel] = useState({
    title: ' ',
    content: ' ',
    description: ' '
  })


  function updatedModel(e) {

    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e) {
    e.preventDefault()

    if (id == null) {
      CriarNotas(context.token.token, model).then(
        (response) => {
          console.log("Cadastrado")
          console.log(response.data)
          alert("Nota Criada");
          history.push("/");
        }
      ).catch(
        (error => {
          console.log(error);
        })
      )
    } else {
      AtualizaNota(context.token.token, id, model).then(
        (response) => {
          alert("Nota Editada");
          history.push("/");
        }
      ).catch(
        (error => {
          console.log(error);
        })
      )
    }

  }

  return (
    <div>
      <Header />
      <div className='container'>
        <br />
        <div className='task-header'>
          {
            id != null ? <h1>Atualizar Nota</h1> : <h1>Nova Nota</h1>
          }
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
                value={model.title}
                onChange={(e) => updatedModel(e)}
                placeholder="Digite o título..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                type="text"
                value={model.description}
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
                value={model.content}
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
    </div>

  );
}

export default FormTask;