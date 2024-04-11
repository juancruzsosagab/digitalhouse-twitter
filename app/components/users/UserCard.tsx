import Link from 'next/link';
import Image from 'next/image';
import { TrendingUserType, UserType } from '@/app/types/user.types';
import { PropsWithChildren } from 'react';


export enum UserCardLayout {
    HORIZONTAL,
    VERTICAL
}

const divClasses = {
    [UserCardLayout.HORIZONTAL]: "flex",
    [UserCardLayout.VERTICAL]: "flex flex-col"
}

const linkClasses = {
    [UserCardLayout.HORIZONTAL]: "ml-2 text-md font-semibold text-gray-600 cursor-pointer",
    [UserCardLayout.VERTICAL]: "text-md font-semibold text-gray-600 cursor-pointer"
}

type UserCardProps = PropsWithChildren &{
    user: TrendingUserType | UserType;
    layout: UserCardLayout;
  };

const UserCard = ({ user, layout, children }: UserCardProps) => {
  return (
    <div className="mb-4 grid grid-cols-12">
      <div className=" w-full h-full mt-z text-center mb-4 block relative col-span-2 flex items-center justify-content">
        <Image
          className="rounded-full"
          src={user.photoUrl}
          alt="avatar"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <div className={divClasses[layout]}>
          <h3>{user.name}</h3>
          <div className={linkClasses[layout]}>
            <Link href={`users/${user.username}`}>@{user.username}</Link>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default UserCard;
