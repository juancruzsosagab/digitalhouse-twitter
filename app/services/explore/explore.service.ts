import { PageType } from '@/app/types/pagination.types';
import { TrendingHashtag } from '@/app/types/hash.types';
import { TrendingUserType } from '@/app/types/user.types';
import httpInternalApi from '../common/http.internal.service';

class ExploreApi {
  getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => {
    return httpInternalApi.httpGetPublic(`/explore/trending`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
  };

  getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => {
    return httpInternalApi.httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
  };
}

const exploreApi = new ExploreApi();
export default exploreApi;