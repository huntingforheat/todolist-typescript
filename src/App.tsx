import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { TodoProvider } from './TodoContext';
import TodoCreate from './components/TodoCrate';
import TodoHead from './components/TodoHead';
import TodoItem from './components/TodoItem';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <>
      <TodoTemplate>
          <TodoProvider>
              <TodoHead />
              <TodoList />
              <TodoCreate />
          </TodoProvider>
      </TodoTemplate>
    </>
  );
}

export default App;
