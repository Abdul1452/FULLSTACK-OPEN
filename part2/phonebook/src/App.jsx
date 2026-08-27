import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const nameToAdd = newName

    if (persons.some((person) => person.name === nameToAdd)) {
      alert(`${nameToAdd} is already added to phonebook`)
      return
    }

    const newPerson = { name: nameToAdd }
    setPersons(persons.concat(newPerson))
    setNewName('')

  }

  const [search, setSearch] = useState('')

  const personsToShow = persons.filter(person => 
    person.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App