import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';
import './index.css';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../App';
import { ListarNotas } from '../../service/Notas';


const Task = () => {

  const [notas, setNotas] = useState()
  const  context = useContext(AuthContext)

  useEffect(()=>{
    console.log(context.token.token)
    ListarNotas(context.token.token).then(
      (response) => {
        console.log("Deu certo")
          console.log(response.data);
          setNotas([
            response.data,
            response.data,
            response.data
          ])
          notas.map((nota)=>{
            console.log(nota.note.id)
          })
      }
    ).catch(
        (error => {
            console.log(error);
        })
    )
    

  },[context])

  return (
    <div className='container'>
      <br />
      <div className='task-header'>
        <h1>Notas</h1>
        <Link to='/tarefas_cadastro'>
          <Button variant='dark' size="sm">Nova Nota +</Button>
        </Link>
      </div>
      <br />
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            notas.map(nota => (
              <tr key={nota.note.id}>
                <td>{nota.note.id}</td>
                <td>{nota.note.title}</td>
                <td>{nota.note.description}</td>
                <td>
                  <Link to={`/tarefas_cadastro/${nota.note.id}`}>
                    <Button size='sm'>Editar</Button>{' '}
                  </Link>
                  <Button size='sm' variant="info">Visualizar</Button>{' '}
                  <Button size='sm' variant="danger">Remover</Button>{' '}
                </td>
              </tr>
            ))
          } 
        </tbody>
      </Table>
    </div>
  );
}

export default Task;