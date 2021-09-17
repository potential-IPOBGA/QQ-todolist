import {TodoList} from "./TodoList";
import {Typography} from 'antd';
const {Title} = Typography;

const App = () => (
    <div className="Todos" align='center' >
      <Title class='TodosTitle'>Simplest TODOList</Title>
      <TodoList />
    </div>
)

export default App;
