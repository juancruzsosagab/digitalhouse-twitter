import { HttpBaseApi} from '../common/http.service';
import { LoginResponseType } from '@/app/types/auth.types';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_ENDPOINT = `/public`;

class HttpInternalApi extends HttpBaseApi{

    constructor() {
        super(API_URL, API_PUBLIC_ENDPOINT);
    }
  };


const httpInternalApi = new HttpInternalApi();
export default httpInternalApi;