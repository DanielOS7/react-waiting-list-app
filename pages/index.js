import React, { useState } from 'react';

import AppModal from '../components/Modal';
import WaitingListForm from '../components/WaitingListForm';
import WaitingListContext from '../context/waiting-list-context';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/waiting-list.module.css';

export default function IndexPage() {
  const [showModal, setShowModal] = useState(false);
  const [messageData, setMessageData] = useState({});
  const [error, setError] = useState(false);

  return (
    <div id="waiting-list-app" className={styles.appContainer}>
      <WaitingListContext.Provider value={{ showModal, setShowModal, messageData, setMessageData, error, setError  }}>
        {showModal && <AppModal />}
        <div id="waiting-list" className={styles.waitingList}>
          <div id="waiting-list-head" className={styles.waitingListHead}>
            <h1>Ticketmaster</h1>
            <p>
              Fill in your contact details to join the waiting list, we'll
              contact you as soon as tickets are available! Don't miss out!!
            </p>
          </div>
          <WaitingListForm />
        </div>
      </WaitingListContext.Provider>
    </div>
  );
}
