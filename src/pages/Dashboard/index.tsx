import React, {useEffect, useState, FormEvent} from 'react'
import {FiChevronRight} from 'react-icons/fi'


import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

import {Title, Form, Repositories, Error} from './styles'

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories')
    if(storagedRepositories) {
      return JSON.parse(storagedRepositories)
    } else {
      return []
    }
  })
  const [inputRepository, setInputRepository] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    if(!inputRepository) {
      setInputError('Digite o autor/nome do repositório.')
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${inputRepository}`)
      const repository = response.data
      setRepositories([...repositories, repository])
      setInputRepository('')
      setInputError('')
    } catch (err) {
      setInputError('Erro ao buscar o repositório.')
    }
  }

  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    setInputRepository(target.value)
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositórios no github.</Title>     

      <Form hasError={Boolean(inputError)} onSubmit={handleRepository}>
        <input value={inputRepository} onChange={handleChange} type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError &&
      <Error>{inputError}</Error>
      }

      <Repositories>
        {repositories.map(_repository => (
        <a key={_repository.full_name} href="teste">
          <img src={_repository.owner.avatar_url} alt={`repository owner ${_repository.owner.login}`}/>

          <div>
            <strong>{_repository.full_name}</strong>
            <p>{_repository.description}</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard

