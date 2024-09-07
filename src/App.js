import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "";  // Remplacez "" par votre prénom si vous voulez l'afficher

const App = () => {
  return (
    <Container className="my-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <p>
        {firstName ? `Bonjour, ${firstName}!` : "Bonjour !"}
      </p>
      
      {firstName && (
        <img src="https://via.placeholder.com/150" alt="Profile" />
      )}
    </Container>
  );
};

export default App;
