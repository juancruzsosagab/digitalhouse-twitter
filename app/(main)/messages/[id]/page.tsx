import messageApi from '@/app/services/messages/messages.service';
import MessagePageContainer from './page.container';

const Messages = async ({ params }: { params: { id: string } }) => {
  const messagePromise = messageApi.getMessage(params.id, 0, 10);
  const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10);

  const [message, repliesPage] = await Promise.all([
    messagePromise,
    repliesPagePromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <MessagePageContainer
        message={message}
        repliesPage={repliesPage}
        parentId={params.id}
      />
    </main>
  );
};

export default Messages;
