import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [tarea1, setTarea1] = useState("");
  const [tareas, setTareas] = useState(["Limpiar la casa","hacer los codes del curso","Lavar la ropa"]);
  const [NumTareas, setNumTareas] = useState(0);


  return (
    <div classname="container-fluid">
      <div classname="row">
        <div classname="col-sm-4" />
        <div classname="col-sm-4">
          <input
            type="text"
            name="tarea1"
            id="tarea1"
            placeholder="Escribe aqui"
            classname="form-control"
            Value={tarea1}
            onChange={(e) => setTarea1(e.target.value)}

          />

          <small></small>
          <button id="boton" className="btn btn-primary" style={{ marginBottom: 5 }} onClick={() => setTareas(tareas.concat(tarea1))}>
            Agregar Tarea
          </button>

          <button id="boton" className="btn btn-danger" style={{ marginBottom: 5 }} onClick={() => setTareas(tareas.splice(0, 0))}>
            Eliminar Tarea
          </button>
          <>
            <br />

            <label id="label1">
              <h1>Lista de Tareas</h1> <small>Hay {tareas.length} Tareas por Realizar</small>
            </label>

            <ul>
              {

                tareas.filter((valor) => {
                  return valor.toLowerCase().includes(tarea1.toLowerCase())
                }).map((valor, indice) => {
                  return (
                    <li key={indice}>{valor}</li>

                  )
                })

              }
            </ul>
          </>
        </div>
        <div classname="col-sm-4" />
      </div>
    </div>





  );
}

export default App;
