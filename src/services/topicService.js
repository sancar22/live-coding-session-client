const baseURL = import.meta.env.VITE_API_BASE_URL

function getAllTopics () {
  return fetch(`${baseURL}/topics/`)
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}

function createTopic (topic) {
  return fetch(`${baseURL}/topics/`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(topic)
  })
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}

function deleteTopic(id) {
  return fetch(`${baseURL}/topics/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}

function upvoteTopic (id) {
  return fetch(`${baseURL}/topics/${id}/up`, {method: 'PUT'})
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}

function downvoteTopic (id) {
  return fetch(`${baseURL}/topics/${id}/down`, {method: 'PUT'})
    .then(res => res.json())
    .then(data => data)
    .catch(e => e)
}

export const topicService = {
  getAllTopics,
  createTopic,
  deleteTopic,
  upvoteTopic,
  downvoteTopic
};

