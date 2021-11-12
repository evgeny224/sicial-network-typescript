import SamyraiJS from './App';
import ReactDOM from "react-dom";


test('if render will crashed', () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamyraiJS />, div);
  ReactDOM.unmountComponentAtNode(div);
});
