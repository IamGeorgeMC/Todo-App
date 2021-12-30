import React from 'react';
import { TodoContext, TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/*const defaultTodos = [
   {text: 'Cortar cebolla', completed:true},
   {text: 'Tomar Curso de intro a react', completed:false},
   {text: 'Llorar con la Llorona', completed:false}
]*/




function App() {

  //React Hook
  // console.log('Render');
  // React.useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos]);
  // console.log('Render luego del use effect');

  return (
    <TodoProvider >
      <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
