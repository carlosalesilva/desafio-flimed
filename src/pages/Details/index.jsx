import React from 'react';
import Header from '../../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
    return (
        <div >
            <Header />
            <div fluid>
                <Card className='sm text-center'>
                    <Card.Header as="h5">Vizualização</Card.Header>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Subtitle>Descrição</Card.Subtitle>
                        <Card.Text>
                            Conteúdo.
                        </Card.Text>
                        <Button variant="primary">Voltar</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Details;