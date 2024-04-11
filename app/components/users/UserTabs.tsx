'use client';

import { MessageType } from '@/app/types/message.types';
import Message from '../messages/Message';
import { useState } from 'react';
import { type } from 'os';

enum TabView {
  MESSAGES,
  REPLIES,
}

type UserTabsProps = {
  messages: MessageType[];
  replies: MessageType[];
};
const UserTabs = ({ messages, replies }: UserTabsProps) => {
  const [tab, setTab] = useState<TabView>(TabView.MESSAGES);

  return (
    <>
      <div className="flex justify-evenly mb-4 w-full">
        <div
          onClick={() => setTab(TabView.MESSAGES)}
          className={`cursor-pointer border-b-4 ${tab === TabView.MESSAGES && 'border-blue-400'}`}>
          Mensajes
        </div>
        <div
         onClick={() => setTab(TabView.REPLIES)}
          className={`cursor-pointer border-b-4 ${tab === TabView.REPLIES && 'border-blue-400'}`}>
          Respuestas
        </div>
      </div>
      <div className='flex w-full flex-col'>
        {tab === TabView.MESSAGES && messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
        {tab === TabView.REPLIES && replies.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    </>
  );
};

export default UserTabs;
