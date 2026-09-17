


// TodoItemコンポーネントを作成する
// @param {string} text - Todoのテキスト
// @returns {JSX.Element} TodoItemコンポーネント
// @description TodoItemコンポーネントは、Todoのテキストを表示する<li>要素を返す


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
    <p>残り {todos.length} 件</p>
  </div>);
  
}
