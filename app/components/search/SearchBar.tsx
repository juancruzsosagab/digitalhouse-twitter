'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type FromData = {
  query: string;
};

type SearchBarProps = {
  initialQuery?: string;
};

const SearchBar = ({ initialQuery }: SearchBarProps) => {
  const router = useRouter();
  const { register, handleSubmit, setValue } = useForm<FromData>({
    defaultValues: { query: initialQuery ?? '' },
  });

  useEffect(() => {
    setValue('query', initialQuery ?? '');
  }, [initialQuery, setValue]);
  const onSubmit = async (data: FromData) => {
    router.push(`/?query=${data.query ?? ""}&type=hash`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full mb-4 ">
        <input
          {...register('query')}
          className="flex-grow p-4 mr-4 rounded bg-gray-50 boder border-gray-200"
          type={'text'}
          placeholder={'Buscar por #Fuerza, #Jedi, etc'}
        />
        <button className="button-primary" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
};

export default SearchBar;
