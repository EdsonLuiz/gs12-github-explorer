import React from 'react'
import {FiChevronRight} from 'react-icons/fi'


import logoImg from '../../assets/logo.svg'

import {Title, Form, Repositories} from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no github.</Title>     

      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/5461553?s=460&u=f0ebe858f9b8868943d86fccbcaeafcaf7c66462&v=4" alt="Image of repository owner"/>

          <div>
            <strong>Edson Luiz</strong>
            <p>Some description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/5461553?s=460&u=f0ebe858f9b8868943d86fccbcaeafcaf7c66462&v=4" alt="Image of repository owner"/>

          <div>
            <strong>Edson Luiz</strong>
            <p>Some description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/5461553?s=460&u=f0ebe858f9b8868943d86fccbcaeafcaf7c66462&v=4" alt="Image of repository owner"/>

          <div>
            <strong>Edson Luiz</strong>
            <p>Some description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard

