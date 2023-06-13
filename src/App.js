
import './App.css';
import './componentes/userInfo';
const items = [
  {
    name: 'Teste nome',
    birthday: '10/10/10',
    email: 'teste@teste.com'
  },
  {
    name: 'Teste nome 2',
    birthday: '10/10/10',
    email: 'teste2@teste.com'
  },
  {
    name: 'Teste nome 3',
    birthday: '10/10/10',
    email: 'teste3@teste.com'
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <userInfo  name={"primeiro nome1"} birthday={"20/32/3"} email={"odfsdfs@gmail.com"}/>

      </header>

    </div>
  );
}


export default App;
