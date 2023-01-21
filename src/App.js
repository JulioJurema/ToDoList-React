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
                <div className="titleArea">
                <h2>To<span>Do</span> List</h2>
                </div>
                
                <div className="tarefasArea">
                    <ul>
                        {tarefas.map(tarefa => (
                            <li key={tarefa}>{tarefa}</li>
                        ))}
                    </ul>
                </div>

                <div className="inputArea">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button type="button" onClick={adicionar}>Adicionar</button>
                </div>
            </div>
        </div>
    )
}

export default App;