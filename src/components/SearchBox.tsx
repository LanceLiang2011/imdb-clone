'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-w-6xl mx-auto mt-4 justify-between items-center px-5 border-2 border-amber-400 rounded-lg'
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search keywords...'
        className='w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1'
      />
      <button
        disabled={!search}
        type='submit'
        className='text-amber-600 disabled:text-gray-400'
      >
        Search
      </button>
    </form>
  );
}
