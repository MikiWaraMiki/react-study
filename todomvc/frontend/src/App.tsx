import React, { VFC } from 'react';
import './App.css';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import EnhancedTodoList from './containers/oragnisms/TodoList';
import EnhancedNewTodoForm from './containers/molecules/NewTodoForm';

const App: VFC = () => (
  <ChakraProvider>
    <Container maxW="xl">
      <div className="App">
        <Heading size="lg" fontSize="50px">
          todos
        </Heading>
        <EnhancedNewTodoForm />
        <EnhancedTodoList />
      </div>
    </Container>
  </ChakraProvider>
);

export default App;
