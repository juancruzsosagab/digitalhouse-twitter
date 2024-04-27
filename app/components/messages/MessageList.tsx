'use client';

import useMessages from '@/app/contexts/message.contexts';
import Message from './Message';


const MessageList = () => {
  const { messages } = useMessages()
  return (
    <>
        {messages?.map((message, index) => (
          <Message key={index} message={message} />
        ))}
    </>
  );
};

export default MessageList;
