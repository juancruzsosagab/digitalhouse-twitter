'use client';
import useMessages from '@/app/contexts/message.contexts';
import messageApi from '@/app/services/messages/messages.service';
import Image from 'next/image';
import { use, useEffect } from 'react';
import { useForm } from 'react-hook-form';

type MessagePostFormProps = {
  parentId?: string;
}
type FromData = {
  message: string;
};

const MessagePostForm = ( {parentId}: MessagePostFormProps ) => {
  const { register, handleSubmit, resetField, setFocus } = useForm<FromData>();
  const {postMessage} = useMessages();

  useEffect(() => {
    setFocus('message');
  }, [setFocus]);

  const onSubmit = async (data: FromData) => {
    await postMessage(data.message, parentId);
    resetField('message');
    setFocus('message');
  };

  return (
    <>
      <div className="mb-4 grid grid-cols-12">
        <div className=" w-full h-full mt-z text-center mb-4 block relative col-span-2 flex items-center justify-content">
          <Image
            className="rounded-full"
            src={
              'https://i.pinimg.com/564x/1b/2d/c0/1b2dc0ce77080e4a682fbbfd2eb3b0c1.jpg'
            }
            alt="avatar"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col ml-4 mt-2 col-span-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              rows={4}
              className="resize-none p-4 w-full mb-4 rounded bg-gray-50 boder border-gray-200"
              placeholder="¿Qué estás pensando?"
              {...register('message', { required: true })}
            />
            <div className="flex justify-end">
              <button
                className="button-primary w-fit uppercase font-semibold"
                type="submit"
              >
                Postear
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MessagePostForm;
