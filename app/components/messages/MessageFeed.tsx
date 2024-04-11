'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { PageType } from '@/app/types/pagination.types';
import { MessageType } from '@/app/types/message.types';
import { use, useEffect, useState } from 'react';
import Message from './Message';
import messageApi from '@/app/services/messages/messages.service';

type MessageFeedProps = {
  initialMessages: PageType<MessageType>;
};

const MessageFeed = ({ initialMessages }: MessageFeedProps) => {
  const [messageResponse, setMessageResponse] =
    useState<PageType<MessageType>>(initialMessages);
  const [messages, setMessages] = useState<MessageType[]>(
    initialMessages.content
  );

  useEffect(() => {
    setMessageResponse(initialMessages);
    setMessages(initialMessages.content);
  }, [initialMessages]);

  const fetchData = async () => {
    const response = await messageApi.getMessageFeed(
      messageResponse.pagination.page + 1,
      10
    );
    setMessageResponse(response);
    setMessages([...messages, ...response.content]);
  };

  const refresh = async () => {
    const response = await messageApi.getMessageFeed(0, 10);
    setMessageResponse(response);
    setMessages(response.content);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchData}
        hasMore={!messageResponse.pagination.last}
        loader={<h4>Cargando más mensajes...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Ups! Has llegado al final</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh={false}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>
            &#8595; Arrastra hacia abajo para refrescar
          </h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593;Suelta para refrescar</h3>
        }
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default MessageFeed;
