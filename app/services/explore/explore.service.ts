import { PageType } from '@/app/types/pagination.types';
import { httpGetPublic } from '../common/http.service';
import { TrendingHashtag } from '@/app/types/hash.types';
import { TrendingUserType } from '@/app/types/user.types';

class ExploreApi {
  getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> => {
    return httpGetPublic(`/explore/trending`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
  };

  getFollowRecommendations = async (page: number, size: number): Promise<PageType<TrendingUserType>> => {
    return httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({ page: `${page}`, size: `${size}` }));
  };
}

const exploreApi = new ExploreApi();
export default exploreApi;