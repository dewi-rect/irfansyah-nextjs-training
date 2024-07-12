import CardList from "./components/CardLists";

async function getData(page = 1) {
  const res = await fetch(`https://technical.test.talenavi.com/api/movie?page=${page}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const datas = await getData();
  const movies = datas.data.data;

  return (
    <div className="font-sans">
      <h1 className="text-1xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex justify-center my-10">
        Movies List
      </h1>
      <div className="w-full px-5 grid grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
        {movies.map((movie) => (
          <CardList key={movie.id} className="flex flex-col">
            <img className="rounded-t-lg w-full h-96" src={movie.image} alt={movie.title} />
            <div className="flex flex-col gap-4 p-5 flex-grow">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{movie.title}</h5>
              <div className="h-full">
                <p>
                  <span className="font-bold">Director:</span> {movie.director}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <span className="font-bold">Summary:</span> {movie.summary}{" "}
                </p>
                <p className="mb-1">
                  <span className="font-bold">Genre:</span>{" "}
                  {movie.genres.map((genre) => (
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded" key={genre.id}>
                      {genre.name}
                    </span>
                  ))}
                </p>
              </div>
              <div className="mt-auto">
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </div>
            </div>
          </CardList>
        ))}
      </div>
    </div>
  );
};

export default Home;
