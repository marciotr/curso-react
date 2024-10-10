import { useState, useEffect } from "react";
import "./style.css";
import Icone from "../../assets/react.svg";

function TodoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:5000/api/items";

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch items.");
      }
      const data = await response.json();
      setLista(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const adicionaItem = async (form) => {
    form.preventDefault();
    if (!novoItem.trim()) {
      return;
    }
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: novoItem }),
      });
      if (!response.ok) {
        throw new Error("Failed to add item.");
      }
      const addedItem = await response.json();
      setLista([addedItem, ...lista]);
      setNovoItem("");
      document.getElementById("input-entrada").focus();
    } catch (err) {
      setError(err.message);
    }
  };

  const clicou = async (item) => {
    try {
      const response = await fetch(`${API_URL}/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !item.isCompleted }),
      });
      if (!response.ok) {
        throw new Error("Failed to update item.");
      }
      const updatedItem = await response.json();
      setLista(
        lista.map((itm) => (itm._id === updatedItem._id ? updatedItem : itm))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const deleta = async (itemId) => {
    try {
      const response = await fetch(`${API_URL}/${itemId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item.");
      }
      setLista(lista.filter((item) => item._id !== itemId));
    } catch (err) {
      setError(err.message);
    }
  };

  const deletaTudo = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete all items.");
      }
      setLista([]);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionaItem}>
        <input
          id="input-entrada"
          type="text"
          value={novoItem}
          onChange={(e) => {
            setNovoItem(e.target.value);
          }}
          placeholder="Adicione uma tarefa"
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
      <div className="listaTarefas">
        <div style={{ textAlign: "center" }}>
          {lista.length < 1 ? (
            <img className="icone-central" src={Icone} alt="Ícone" />
          ) : (
            lista.map((item) => (
              <div
                key={item._id}
                className={item.isCompleted ? "item completo" : "item"}
              >
                <span onClick={() => clicou(item)}>
                  {item.text}
                </span>
                <button
                  onClick={() => deleta(item._id)}
                  className="del"
                >
                  Deletar
                </button>
              </div>
            ))
          )}
          {lista.length > 0 && (
            <button
              onClick={deletaTudo}
              className="deleteAll"
            >
              Deletar Todas
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
