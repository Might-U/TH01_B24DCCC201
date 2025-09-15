import TodoList from "./components/TodoList";
import ColorPicker from "./components/ColorPicker";
import Cart from "./components/Cart";
import Post from "./components/Post.jsx";
function App(){
  return(
    <div style={{ margin:"20px", fontFamily:"sans-serif"}}>
      <TodoList/>
      <hr/>
      <ColorPicker/>
      <hr/>
      <Cart/>
      <hr/>
      <Post/>
    </div>
  );
}
export default App;