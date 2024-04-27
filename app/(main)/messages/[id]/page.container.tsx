'use client';

import Message from '@/app/components/messages/Message';
import MessageList from '@/app/components/messages/MessageList';
import MessagePostForm from '@/app/components/messages/MessagePostForm';
import useMessages, { MessageProvider } from '@/app/contexts/message.contexts';
import { MessageType } from '@/app/types/message.types';
import { PageType } from '@/app/types/pagination.types';
import { useContext } from 'react';

type MessagePageProps = {
  message: MessageType;
  repliesPage: PageType<MessageType>;
  parentId?: string;
};
const MessagePageContainer = ({
  message,
  repliesPage,
  parentId,
}: MessagePageProps) => {

  const MessageContainer = () => {
    const { message } = useMessages();
    if (!message) {
      return null;
    }
    return <section className="flex flex-col mb-8">
      <Message message={message} />
    </section>;
  };

  return (
    <>
      <MessageProvider initialPage={repliesPage} initialMessage={message}>
        <MessageContainer />
        <section>
          <MessagePostForm parentId={parentId} />
        </section>
        <section className="flex flex-col w-full">
          <MessageList />
        </section>
      </MessageProvider>
    </>
  );
};

export default MessagePageContainer;
