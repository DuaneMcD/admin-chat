import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Image from 'next/image';
import Conversation from '../components/Conversation';
import ChatsBar from '../components/ChatsBar';
import styles from '../styles/Home.module.css';

export default function Chats() {
  const [chat, setChat] = useState();
  const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState('');
  const [chatInput, setChatInput] = useState('');

  const handleChatSelect = e => {
    setChat(e.textContent);
    console.log(chat);
  };

  const handleChange = e => {
    setChatInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage(chatInput);
    setConversation({ ...conversation, message });
    console.log(message);
    console.log(conversation);
    resetInput();
  };

  const resetInput = () => {
    setChatInput('');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.mainContainer}>
        <Sidebar />
        <ChatsBar onClick={handleChatSelect} />
        <div className='chatContent'>
          {chat == '' ? (
            <main className={styles.main}>
              <h1 className={styles.title}>Welcome to your Chats Panel!</h1>
              <p className={styles.description}>Select a Chat</p>
            </main>
          ) : (
            <div className={styles.chatContainer}>
              <div className={styles.chatWindow}>
                <Conversation />
                <form action='' onSubmit={handleSubmit}>
                  <input
                    id={'chatInput'}
                    type='text'
                    className={styles.chatInput}
                    onChange={handleChange}
                    value={chatInput}
                  />
                  <button type='submit'>Send</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Powered by Duane</p>
      </footer>
    </div>
  );
}
