import { AccessDeniedError } from "@/app/services/common/http.errors";
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from 'redis';


 const client = createClient({
  url: 'redis://default:SocialNetWorkPass@localhost:6379'
 });

 client.connect().then(() => {
    console.log('Connected to Redis');
   });

 export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key') ?? "";
    return NextResponse.json({key: await client.get(key)})
}