
// // TodoItemコンポーネントを作成する
// // @param {string} text - Todoのテキスト
// // @returns {JSX.Element} TodoItemコンポーネント
// // @description TodoItemコンポーネントは、Todoのテキストを表示する<li>要素を返す


 import { useState } from 'react';
 

export default function App() {
  // const items = ['牛乳を買う', 'レポート提出','散歩に行く'];
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const add = () => {
    const trimmedText = text.trim();
    if (!trimmedText) return;
    setTodos([...todos, { id: crypto.randomUUID(),text: trimmedText }]);
    setText('');
  };
  return(<div>
    <input value={text} onChange={(e) => setText(e.target.value)} />
    <button onClick={add}>追加</button>
    <ul>{todos.map((todo,i) => <li key={todo.id}>{todo.text}</li>)}</ul>
    <p>残り {parseInt(todos.length)} 件</p>
    <TextInput />
    <Counter />
  </div>);
  
}



export  function Counter() {
  const [count, setcount] = useState(0);

  return(
    <div>
    <p style={{ color: '#fff',fontSize: '2rem',margin: '1rem 0' }}>count: {count}</p>
    <button onClick={() => setcount(c => c + 1)}>
      クリック回数: {count}
    </button>
    </div>
  );
}

export  function TextInput() {
  const [text, setText] = useState('');
  return (
    <div>
  <input
    value={text} 
    onChange={e => setText(e.target.value)} />
  <p>入力中: {text}</p>
  </div>);
}

