import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/esm/Table';
import './index.css';
import { Link, useParams } from 'react-router-dom';



const Task: React.FC = () => {

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
            /*dados.map(dados => (
              <tr key={dados.id}>
                <td>{dados.id}</td>
                <td>{dados.titulo}</td>
                <td>{dados.descricao}</td>
                <td>
                  <Link to={`/tarefas_cadastro/${dados.id}`}>
                    <Button size='sm'>Editar</Button>{' '}
                  </Link>
                  <Button size='sm' variant="info">Visualizar</Button>{' '}
                  <Button size='sm' variant="danger">Remover</Button>{' '}
                </td>
              </tr>
            ))*/
          }
        </tbody>
      </Table>
    </div>
  );
}

export default Task;