import { createContext, useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { TopicList } from './components/TopicList'
import { topicService } from './services/topicService'

const fields = [
  {
    name: 'title',
    required: true,
  },
]

const initialFormState = {
  title: '',
}

export const TopicContext = createContext();

function App() {
  const [topics, setTopics] = useState([]);

  const getAllTopics = async () => {
    const res = await topicService.getAllTopics();
    setTopics(res.res.data);
  };

  useEffect(() => {
    getAllTopics();
  }, []);

  const handleFormSubmit = (formData) => {
    console.log(formData, 'form data in app')
  }

  const handleDelete = () => {

  }

  const handleVoting = () => {
    
  }

  return (
    <>
      <Form 
        onSubmit={handleFormSubmit}
        fields={fields} 
        initialFormState={initialFormState} 
        buttonText='Add Topic' 
      />
      <TopicContext.Provider value={{ handleDelete, handleVoting}}>
        <TopicList topics={topics} />
      </TopicContext.Provider>
    </>
  )
}

export default App
