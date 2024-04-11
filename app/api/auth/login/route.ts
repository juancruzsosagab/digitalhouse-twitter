import authApi from '@/app/services/auth/auth.service';
import { AccessDeniedError } from '@/app/services/common/http.errors';
import { NextResponse, type NextRequest } from 'next/server';
import * as yup from 'yup';
import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const client = createClient({
  url: 'redis://default:SocialNetWorkPass@localhost:6379',
});

client.connect().then(() => {
  console.log('Connected to Redis');
});
const TEN_MINUTE = 60 * 10;

export async function POST(request: NextRequest) {
  const { username, password } = await schema.validate(await request.json());
  try {
    const loginResponse = await authApi.loginInternal(username, password);
    const sessionId = uuidv4();
    client.set(sessionId, loginResponse.accessToken, { EX: TEN_MINUTE });
    const now = new Date();
    const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString();

    const authCookie= `SocialSessionId=${sessionId}; Domain=localhost; Expires=${expireAt} Secure; HttpOnly`

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
      headers: {
        'Set-Cookie': authCookie,
      },
    })
  } catch (e) {
    console.log(e)
    if (e instanceof AccessDeniedError) {
      return new Response(JSON.stringify({ error: 'User has no access' }), {
        status: 403,
      });
    } else {
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
      });
    }
  }
}
