'use client';
import { use, useEffect, useState } from 'react';
import { TrendingHashtag } from '@/app/types/hash.types';
import { TrendingUserType } from '@/app/types/user.types';
import UserCard, { UserCardLayout } from '../users/UserCard';
import MessageHashTag from '../messages/MessageHashTag';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import UserList from '../users/UserList';
import { PageType } from '@/app/types/pagination.types';
import MessagesHashTagList from '../messages/MessagesHashTagLIst';

enum TabView {
  HASHTAGS,
  USERS,
}

type ExploreTabsProps = {
  hastags: PageType<TrendingHashtag>;
  users: PageType<TrendingUserType>;
  initialTab?: string;
};

const ExploreTabs = ({ hastags, users, initialTab }: ExploreTabsProps) => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<TabView>(
    initialTab ? TabView[initialTab as keyof typeof TabView] : TabView.HASHTAGS
  );

  useEffect(() => {
    const type = searchParams.get('type');
    setTab(type ? TabView[type as keyof typeof TabView] : tab);
  }, [searchParams, tab]);

  return (
    <>
      <div className="flex justify-evenly mb-4">
        <Link href="/explore?type=HASHTAGS">
          <div
            className={`cursor-pointer border-b-4 ${tab === TabView.HASHTAGS && 'border-blue-400'}`}
          >
            Hashtags
          </div>
        </Link>
        <Link href="/explore?type=USERS">
          <div
            className={`cursor-pointer border-b-4 ${tab === TabView.USERS && 'border-blue-400'}`}
          >
            Usuarios
          </div>
        </Link>
      </div>
      <div>
        {tab === TabView.HASHTAGS && <MessagesHashTagList initialPage={hastags}/>}
        {tab === TabView.USERS && <UserList initialUserPage={users} />}
      </div>
    </>
  );
};

export default ExploreTabs;
