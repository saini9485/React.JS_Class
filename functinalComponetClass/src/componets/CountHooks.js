import React,{useState} from 'react'
export default function CountHooks() {
    const [count, setCount] = useState(0)
  return (
    <div>

<h1>Count:-{count}</h1>
<button onClick={()=>setCount(count+1)}>Increament</button>
    </div>
  )
}

 // Declare multiple state variables!
/*function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}*/

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}