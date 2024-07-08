'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import Message from './Message';
import useMessages from '@/app/contexts/message.contexts';

const MessageFeed = () => {
const { messages, messagePage, fetchNextPage, refresh} = useMessages();

  return (
    <>
      <InfiniteScroll
        dataLength={messages.length}
        next={fetchNextPage}
        hasMore={!messagePage.pagination.last}
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
