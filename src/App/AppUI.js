import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";
import { TodoFormulario } from "../TodoFormulario";
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { Container, Row, Col } from 'react-grid-system';

function AppUI() {
  //React Hook
  const {error, loading, searchedTodos ,completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext)
  return(
  <React.Fragment>
    <Container>
      <Row>
      <Col sm={6}>
        <TodoFormulario/>
      </Col>
      <Col sm={6}>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <TodosError />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}

            {searchedTodos.map(todo =>(
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                date={todo.date}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        

        {openModal && (
          <Modal>
          <TodoForm/>
          </Modal>
        )}

        <CreateTodoButton 
        setOpenModal={setOpenModal}
        />
      </Col>
      </Row>
    </Container>
  </React.Fragment>
  );
}

export { AppUI }