import "./App.css";
//import { Component1 } from "./components/Component1";
import { Button } from "./components/Button";
function App() {
  return (
    <div>
      <button />
      <h1>Title: History of React</h1>
      <p>
        React was created by <b>Jordan Walke</b>, a software engineer at Facebook, who
        released an early prototype of React called "FaxJS". He was influenced
        by XHP, an HTML component library for PHP. It was first deployed on
        Facebook's News Feed in 2011 and later on Instagram in 2012. It was
        open-sourced at JSConf US in May 2013.
      </p>
      <Button text="Delete" class="delete" />
      <Button text="Save" class="save" />
    </div>
  );
}
export default App;
