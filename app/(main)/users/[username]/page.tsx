import UserTabs from '@/app/components/users/UserTabs';
import Link from 'next/link';
import Image from 'next/image';
import userApi from '@/app/services/users/users.service';

const UserPage = async ({ params }: { params: { username: string } }) => {

  const userPromise = userApi.getUserData(params.username);
  const userMessagesPromise = userApi.getUserMessages(params.username);
  const userRepliesPromise = userApi.getUserReplies(params.username);

  const [user, userMessages, userReplies] = await Promise.all([userPromise, userMessagesPromise, userRepliesPromise]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <div>
        <div className="rounded-full text-center block relative w-20 h-20">
          <Image
          className='rounded-full'
          src={user.photoUrl}
          alt="avatar"
          fill
          priority
          />
        </div>
        <h2 className="mb-1">{user.name}</h2>
        <div className="font-semibold text-gray-600 txt-lg mb-4 cursor-pointer">
          <Link href={`/${user.username}`}>@{user.username}</Link>
        </div>
        <div className="mb-4">Biografía: {user.bio}</div>
        <div className="flex justify-between mb-4">
          <div>
            <span className="font-bold">{user.followersCount}</span> seguidores
          </div>
          <div>
            <span className="font-bold">{user.followingCount}</span> siguiendo
          </div>
        </div>
        <UserTabs messages={userMessages.content} replies={userReplies.content}></UserTabs>
      </div>
    </main>
  );
};

export default UserPage;
