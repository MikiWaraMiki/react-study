import React, { VFC } from 'react';
import './App.css';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import EnhancedAllTodo from './containers/pages/AllTodo';

const App: VFC = () => (
  <ChakraProvider>
    <Container maxW="xl">
      <div className="App">
        <Heading size="lg" fontSize="50px">
          todos
        </Heading>
      </div>
      <EnhancedAllTodo />
    </Container>
  </ChakraProvider>
);

export default App;
