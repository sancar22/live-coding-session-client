import './App.css'
import { Form } from './components/Form'

const fields = [
  {
    name: 'title',
    required: true,
  },
]

const initialFormState = {
  title: '',
}

function App() {

  const handleFormSubmit = (formData) => {
    console.log(formData, 'form data in app')
  }

  return (
    <>
      <Form 
        onSubmit={handleFormSubmit}
        fields={fields} 
        initialFormState={initialFormState} 
        buttonText='Add Topic' 
      />
    </>
  )
}

export default App
