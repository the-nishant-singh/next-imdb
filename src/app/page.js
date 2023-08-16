import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    {
      method: "GET",
      next: { revalidate: 10000 },
    }
  );
  const data = await response.json();
  const movies = data.results;
  console.log({movies})
  // const
  return (
    <div>
      <Results data={movies} />
    </div>
  );
}
