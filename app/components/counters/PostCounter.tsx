type PostCounterProps = {
    count: number;
}

const PostCounter = ({count} : PostCounterProps) => {
    const label = count > 1 ? 'Posts' : 'Post';
    return (
        <div>
            {count} {label}
        </div>
    );
}

export default PostCounter;