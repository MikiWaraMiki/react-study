import React, { VFC } from 'react';
import './App.css';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import EnhancedTodoList from './containers/oragnisms/TodoList';

const App: VFC = () => (
  <ChakraProvider>
    <Container maxW="xl">
      <div className="App">
        <Heading size="lg" fontSize="50px">
          Todos
        </Heading>
        <EnhancedTodoList />
      </div>
    </Container>
  </ChakraProvider>
);

export default App;
