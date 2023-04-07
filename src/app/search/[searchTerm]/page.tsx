import { Result } from '@/components/Card';
import Results from '@/components/Results';

export default async function SearchPage({
  params,
}: {
  params: { searchTerm: string };
}) {
  const { searchTerm } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error('Error fetching data');
  }

  const data = await res.json();
  const results: Result[] = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No results found</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}
