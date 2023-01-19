import React, { useState }  from "react";
import "./App.css";


function App () {

    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState('');

    function adicionar(){
        if(input !== ''){
            setTarefas([...tarefas, input]);
            setInput('')
        }
    }

    return(
        <div className="body">
            <div className="container">
                <div className="inputArea">
                    <h2>ToDo List</h2>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button type="button" onClick={adicionar}>Adicionar</button>
                </div>
                <div className="tarefasArea">
                    <ul>
                        {tarefas.map(tarefa => (
                            <li key={tarefa}>{tarefa}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;