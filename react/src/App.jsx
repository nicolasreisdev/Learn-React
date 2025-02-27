// importando o componente de cabeçalho
import { Header } from './components/Header' // componente de cabeçalho
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

// importando o css do componente
import  style from './App.module.css'

import './global.css' // modelo de css global

// author: { avatar_rl: string, name: string, role: string }
// publishedAt: { date: string, time: string }
// content: string


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nicolasreisdev.png",
      name: "Nicolas Reis",
      role: "Full-Stack Developer"
    },
    content: [
      {type: "text", content: "This is a test"},
      {type: "text", content: "This is a test 2.0"},
    ],
    publishedAt: new Date('2025-02-06 09:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/nicolasreisdev.png",
      name: "Nicolas Eliel",
      role: "Full-Stack Developer"
    },
    content: [
      {type: "text", content: "This is a test"},
      {type: "text", content: "This is a test 2.0"},
    ],
    publishedAt: new Date('2025-02-06 11:00:00'),
  }
];


function App() {
  return (
    // Estrutura da aplicacao
    <div> 
      {/* Cabeçalho */}
      <Header/>

      {/* Corpo da aplicacao */}
      <div className={style.wrapper}>

        {/* Barra lateral */}
        <Sidebar/>

        {/* Conteudo principal */}
        <main>
          {posts.map(post => {
              return( <Post 
                    key={post.id}
                    author={post.author}
                    publishedAt={post.publishedAt}
                    content={post.content}
                    />
              )
          })} 
        </main>
      </div>
    </div>
    
  );
}

export default App;
