import TodoList from "./components/TodoList";
import ColorPicker from "./components/ColorPicker";
import Cart from "./components/Cart";
function App(){
  return(
    <div style={{ margin:"20px", fontFamily:"sans-serif"}}>
      <TodoList/>
      <hr/>
      <ColorPicker/>
      <hr/>
      <Cart/>
    </div>
  );
}
export default App;