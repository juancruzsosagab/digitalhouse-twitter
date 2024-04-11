
import httpExternalApi from '../common/http.external.service';
import httpInternalApi from '../common/http.internal.service';
import { LoginResponseType } from '@/app/types/auth.types';

class AuthApi {

  login = async (
    username: string,
    password: string
  ) : Promise<LoginResponseType>=> {
    return httpExternalApi.httpPost(
      `/auth/login`,
      {username, password}
    );
  };

  loginInternal = async (
    username: string,
    password: string
  ) : Promise<LoginResponseType>=> {
    return httpInternalApi.httpPostPublic(
      `/auth/login`,
      {username, password}
    );
  };

}

const authApi = new AuthApi();
export default authApi;
