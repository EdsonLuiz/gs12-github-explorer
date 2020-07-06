import React from 'react'
import {useRouteMatch, Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import {Header, RepositoryInfo, Issues} from './styles'
import logoImg from '../../assets/logo.svg'

interface RepositoryParams {
  repository: string
}

const Repository = () => {
  const {params} = useRouteMatch<RepositoryParams>()
  return (
    <>
      <Header>
        <img src={logoImg} alt="github explorer"/>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      
      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/583231?v=4" alt="avatar"/>
          <div>
            <strong>Octocat/Octocat</strong>
            <p>Descrição do repositório.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="asdfasdf">
          <div>
            <strong>Repo_full_name</strong>
            <p>Description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>       
      </Issues>
    </>
  )
}

export default Repository

