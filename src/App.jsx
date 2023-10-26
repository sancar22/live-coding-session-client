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

  const handleFormSubmit = async (formData) => {
    const res = await topicService.createTopic(formData);
    setTopics((currTopics) => [...currTopics, res.res.data]);
  }

  const handleDelete = async (topicId) => {
    await topicService.deleteTopic(topicId);
    setTopics((currTopics) => currTopics.filter((topic) => topic.id !== topicId));
  }

  const handleVotingUpdate = (topicId, updatedTopic) => {
    setTopics((currTopics) => {
      return currTopics.map(topic => {
        if (topic.id === topicId) return updatedTopic
        return topic;
      })
    })
  }

  const handleVoting = async (topicId, direction) => {
    if (direction === 'up') {
      const upvotedTopic = await topicService.upvoteTopic(topicId);
      handleVotingUpdate(topicId, upvotedTopic.res.data);

    } else if (direction === 'down') {
      const downvotedTopic = await topicService.downvoteTopic(topicId);
      handleVotingUpdate(topicId, downvotedTopic.res.data);
    }
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
        <TopicList topics={topics.sort((a,b) => b.score - a.score)} />
      </TopicContext.Provider>
    </>
  )
}

export default App
