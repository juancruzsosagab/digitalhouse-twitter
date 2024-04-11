import Link from 'next/link';
import { TrendingUserType } from '@/app/types/user.types';
import UserCard from '../users/UserCard';
import { UserCardLayout } from '../users/UserCard';
type ExploreUserProps = {
  users: TrendingUserType[];
};

const ExploreUsers = ({ users }: ExploreUserProps) => {
  if (!users || users.length === 0) return <></>;
  return (
    <>
      <div
        className="bg-gray-200 rounded-lg px-8 py-4"
        style={{ minWidth: 250 }}
      >
        <h2 className='mb-4'>A quien seguir</h2>
        {users.slice(0, 4).map((user, index) => (
          <UserCard key={index} user={user} layout={UserCardLayout.VERTICAL} />
        ))}
        {users.length > 4 && (
          <Link href="/explore?type=USERS">
            <div className="text-center link-primary">Ver más</div>
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreUsers;
