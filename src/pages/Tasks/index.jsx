import React, { useEffect, useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';
import './index.css';
import { Link, useParams } from 'react-router-dom';

import { AuthContext } from '../../App';
import { DeleteNotas, ListarNotas } from '../../service/Notas';
import history from '../../history';


const Task = () => {

  const [notas, setNotas] = useState([])
  const  context = useContext(AuthContext)

  useEffect(()=>{
    carregarNotas()
  },[])

  function carregarNotas(){
    ListarNotas(context.token.token).then(
      (response) => {
        if(response.data != null){
          setNotas(response.data.notes)
        }
      }
    ).catch(
        (error => {
            console.log(error);
        })
    )
  }

  function deletarNota(id) {
    DeleteNotas(context.token.token, id).then(
      (response) => {
        carregarNotas()
        alert("Nota Deletada");
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
            notas.length > 0 ?
            notas.map((nota) => 
              <tr key={nota.id}>
                <td>{nota.id}</td>
                <td>{nota.title}</td>
                <td>{nota.description}</td>
                <td>
                  <Link to={`/edit/${nota.id}`}>
                    <Button size='sm'>Editar</Button>{' '}
                  </Link>
                  <Link to={`/details/${nota.id}`}>
                  <Button size='sm' variant="info">Visualizar</Button>{' '}
                  </Link>
                  <Button size='sm' onClick={()=>{deletarNota(nota.id)}} variant="danger">Remover</Button>{' '}
                </td>
              </tr>
            ) : <tr>Lista vazia</tr>
            }
        </tbody>
      </Table>
    </div>
  );
}

export default Task;