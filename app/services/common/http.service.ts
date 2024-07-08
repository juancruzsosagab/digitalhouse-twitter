import { AccessDeniedError } from './http.errors';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_ENDPOINT = `/public`;

export class HttpBaseApi {
  protected privateEndpoint: string;
  protected publicEndpointSuffix: string;
  constructor(privateEndpoint: string, publicEndpointSuffix: string) {
    this.privateEndpoint = privateEndpoint;
    this.publicEndpointSuffix = publicEndpointSuffix;
  }

  async httpGet<T>(
    endpointSuffix: string,
    params?: URLSearchParams
  ): Promise<T> {
    const res = await fetch(
      `${this.privateEndpoint}${endpointSuffix}${params ? `?${params}` : ''}`,
      { cache: 'no-cache' }
    );
    if (!res.ok) throw new Error(`Error fetching ${endpointSuffix}`);
    return res.json();
  }

  async httpGetPublic<T>(
    endpointSuffix: string,
    params?: URLSearchParams
  ): Promise<T> {
    return this.httpGet(
      `${this.publicEndpointSuffix}${endpointSuffix}`,
      params
    );
  }

  async httpPost<T>(
    endpointSuffix: string,
    body: object,
    // skipAuthorization?: boolean
  ): Promise<T> {
    const res = await fetch(`${this.privateEndpoint}${endpointSuffix}`, {
      headers: { 'Content-Type': 'application/json' },
      // headers: skipAuthorization
      //   ? { 'Content-Type': 'application/json' }
      //   : {
      //       'Content-Type': 'application/json',
      //       Authorization:
      //         'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVc2VyIERldGFpbHMiLCJpc3MiOiJzb2NpYWwtYXBpIiwiaWF0IjoxNjkxNTE2NDMwLCJ1c2VybmFtZSI6InlvZGEifQ.pg4lkBK2wlEorNrThDFqkC7l5uHrpZTJAYp4De4629c',
      //     },
      body: JSON.stringify(body),
      method: 'POST',
    });
    if (!res.ok) {
      if (res.status === 403) {
        throw new AccessDeniedError('User has no access');
      }
      throw new Error(`Error POSTING ${endpointSuffix}`);
    }
    return res.json();
  }

  async httpPostPublic<T>(endpointSuffix: string, body: object): Promise<T> {
    return this.httpPost(
      `${this.publicEndpointSuffix}${endpointSuffix}`,
      body,
      // true
    );
  }
}
