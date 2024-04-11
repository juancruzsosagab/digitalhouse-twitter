import Link from "next/link";
import PostCounter from "../counters/PostCounter";
import { TrendingHashtag } from "@/app/types/hash.types";

type MessageHashTagsProps = {
    hash: TrendingHashtag;
}

const MessageHashTag = ({ hash }: MessageHashTagsProps) => {
  return (
    <>
      <Link href={`/?query=${hash.hash.replace("#","") ?? ""}&type=hash`}>
        <h4 className="font-semibold cursor-pointer p-1">{hash.hash}</h4>
        <div className="p-1">
          <PostCounter count={hash.count} />
        </div>
      </Link>
    </>
  );
};

export default MessageHashTag;
