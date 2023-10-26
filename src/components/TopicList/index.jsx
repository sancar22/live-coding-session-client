
import { Topic } from '../TopicItem';
import styles from './styles.module.css';

export function TopicList ({ topics }) {
  return (
    <div className={styles.topic_list_container}>
      {
        topics?.map(topic => <Topic key={topic.id} topic={topic}/>)
      }
    </div>
  )
}