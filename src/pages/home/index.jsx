import './style.css'
import Lixo from '../../assets/lixo.png'

function Home() {


  const users = [
  {
    id: '1',
    name: 'fulano',
    age: '0',
    email: 'user@mail.com'
  },
  {
    id: '2',
    name: 'ciclano',
    age: '0',
    email: 'user@mail.com'
  },

]


  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de usuário</h1>
        <input type="text" name='nome'/>
        <input type="numer" name='idade'/>
        <input type="email" name='email'/>
        <button type='button'>cadastrar</button>
      </form>


      { users.map( user => (

        <div key={user.id} class='card'>
          <div>

            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          <button><img src={Lixo}/></button>

        </div>
      ))}

    </div>

)
}

export default Home
