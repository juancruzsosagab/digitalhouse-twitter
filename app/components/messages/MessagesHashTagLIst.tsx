"use client"

import exploreApi from "@/app/services/explore/explore.service";
import { TrendingHashtag } from "@/app/types/hash.types";
import { PageType } from "@/app/types/pagination.types";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MessageHashTag from "./MessageHashTag";

type messagesHashTagListProps = {
    initialPage: PageType<TrendingHashtag>;
}

const MessagesHashTagList = ({initialPage}: messagesHashTagListProps) =>{
        const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage);
        const [hashtags, setHashtags] = useState<TrendingHashtag[]>(
            initialPage.content
        );
      
        const fetchData = async () => {
          const response = await exploreApi.getTrendingHashtags(
            page.pagination.page + 1,
            5
          );
          setPage(response);
          setHashtags([...hashtags, ...response.content]);
        };
      
        const refresh = async () => {
          const response = await exploreApi.getTrendingHashtags(0, 5);
          setPage(response);
          setHashtags(response.content);
        };
      
        return (
            <InfiniteScroll
              dataLength={hashtags.length}
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
              {hashtags.map((hash, index) => (
                <MessageHashTag key={index} hash={hash} />
              ))}
            </InfiniteScroll>
          );
}

export default MessagesHashTagList;