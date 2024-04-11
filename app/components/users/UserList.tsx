'use client';
import { useState } from 'react';
import exploreApi from '@/app/services/explore/explore.service';
import InfiniteScroll from 'react-infinite-scroll-component';
import { TrendingUserType, UserType } from '@/app/types/user.types';
import { PageType } from '@/app/types/pagination.types';
import UserCard, { UserCardLayout } from './UserCard';

type UserListProps = {
  initialUserPage: PageType<TrendingUserType>;
};

const UserList = ({ initialUserPage }: UserListProps) => {
  const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage);
  const [users, setUsers] = useState<TrendingUserType[]>(
    initialUserPage.content
  );

  const fetchData = async () => {
    const response = await exploreApi.getFollowRecommendations(
      page.pagination.page + 1,
      5
    );
    setPage(response);
    setUsers([...users, ...response.content]);
  };

  const refresh = async () => {
    const response = await exploreApi.getFollowRecommendations(0, 5);
    setPage(response);
    setUsers(response.content);
  };


  return (
    <InfiniteScroll
      dataLength={users.length}
      next={fetchData}
      hasMore={!page.pagination.last}
      loader={<h4>Cargando más mensajes...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Ups! Has llegado al final</b>
        </p>
      }
      refreshFunction={refresh}
      pullDownToRefresh
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
      {users.map((user, index) => (
        <UserCard key={index} user={user} layout={UserCardLayout.VERTICAL} />
      ))}
    </InfiniteScroll>
  );
};

export default UserList;
