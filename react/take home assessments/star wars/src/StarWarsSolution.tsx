import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

interface Character {
  name: string;
  index: number;
}

function StarWarsSolution() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StarWarsCharacterListContainer />
      </QueryClientProvider>
    </>
  );
}

function StarWarsCharacterListContainer() {
  const { data, isLoading, error } = useQuery<{
    next: string;
    results: Character[];
  }>({
    queryKey: ['star-wars-character-list'],
    queryFn: async function getCharacterData() {
      const response = await fetch(`https://swapi.dev/api/people/?page=${1}`);
      const characters = await response.json();
      return characters;
    },
  });

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <input defaultValue="Filter" />
      <ul>
        {data?.results.map((character: Character) => {
          return <li>{character.name}</li>;
        })}
      </ul>
    </>
  );
}

export default StarWarsSolution;
