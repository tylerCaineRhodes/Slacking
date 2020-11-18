import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if(roomId) {
      db.collection('rooms')
      .doc(roomId)
      .onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
      db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }

  }, [roomId])

  return (
    <div className='chat'>
      <div className='chatHeader'>
        <div className="chatHeaderLeft">
          <h4 className="chatChannelName">
            <strong>#{ roomDetails?.name }</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chatHeaderRight">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>

      <div className="chatMessages">
        {roomMessages.map(({message, timestamp, user, userImage}) => (
          <div key={timestamp}>
            <Message 
              message={ message }
              timestamp ={ timestamp }
              user={ user }
              userImage={ userImage }
            />
          </div>
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  )
}

export default Chat
