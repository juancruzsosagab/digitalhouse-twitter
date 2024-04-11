import Message from '@/app/components/messages/Message';
import MessagePostForm from '@/app/components/messages/MessagePostForm';
import messageApi from '@/app/services/messages/messages.service';

const Messages = async ({ params }: { params: { id: string } }) => {
  const messagePromise = messageApi.getMessage(params.id, 0, 10);
  const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10);

  const [message, repliesPage] = await Promise.all([
    messagePromise,
    repliesPagePromise,
  ]);

  return (
    <main className="flex flex-col bg-gray-100 p-8">
      <section className="flex flex-col mb-8">
        <Message message={message} />
      </section>
      <section>
        <MessagePostForm parentId={params.id}/>
      </section>
      <section className="flex flex-col w-full">
        {repliesPage.content.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </section>
    </main>
  );
};

export default Messages;
