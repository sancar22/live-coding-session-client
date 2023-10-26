import styles from './styles.module.css';
import moment from 'moment';
import { useContext } from 'react';
import { TopicContext } from '../../App';

export function Topic({ topic }) {
  const  { id, title, score, createdAt } = topic;

  const { handleDelete, handleVoting } = useContext(TopicContext);
  
  return (
    <div className={styles.topic_container}>
      <div className={styles.topic_trash_can}>
        <i
          onClick={() => handleDelete(id)}
          className="fa-solid fa-trash-can"
        ></i>
      </div>
      <div className={styles.topic_info}>
        <div className={styles.topic_score}>
          <div
            className={styles.top_arrow}
            onClick={() => handleVoting(id, "up")}
          ></div>
          <div className={styles.score_number}>{score}</div>
          <div
            className={styles.down_arrow}
            onClick={() => handleVoting(id, "down")}
          ></div>
        </div>
        <div className={styles.topic_details}>
          <h2>{title}</h2>
          <div className={styles.topic_date}>
            <span>CREATED ON</span>{" "}
            {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </div>
    </div>
  );
}