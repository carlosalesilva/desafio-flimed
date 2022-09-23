import React, {useContext, useEffect, useState} from 'react';

import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { GetNota } from '../../service/Notas';

import { AuthContext } from '../../App';

import history from '../../history';

const Details = () => {
    const { id } = useParams();

    const [nota, setNota] = useState({})

    
    const  context = useContext(AuthContext)

    useEffect(() => {
        GetNota(context.token.token, id).then(
            (response) => {
                setNota(response.data.note);
                console.log(response.data.note)
            }
          ).catch(
              (error => {
                  console.log(error);
              })
          )
    },[])

    return (
        <div >
            <Header />
            <div fluid>
                <Card className='sm text-center'>
                    <Card.Header as="h5">Vizualização</Card.Header>
                    <Card.Body>
                        <Card.Title>{nota.title}</Card.Title>
                        <Card.Subtitle>{nota.description}</Card.Subtitle>
                        <Card.Text>
                            {nota.content}
                        </Card.Text>
                        <Link to={"/"}>
                            <Button to={"/"} variant="primary">Voltar</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Details;