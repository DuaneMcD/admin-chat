import Link from 'next/link';
import styles from '../styles/Home.module.css';

const ChatBar = props => {
  return (
    <>
      <div className={styles.chatBar}>
        <button onClick={props.onClick} className={styles.conversationButton}>
          New Conversation
        </button>
      </div>
      <style jsx>
        {`
            button :hover{
              cursor: pointer;
                  
              }
            }`}
      </style>
    </>
  );
};

export default ChatBar;
