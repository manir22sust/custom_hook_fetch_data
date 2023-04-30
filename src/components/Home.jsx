import useFetch from "../customHook/useFetch";

const Home = () => {
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {data.slice(0, 10).map((item) => {
        return (
          <div key={item.id} className="item">
            {item.title}
          </div>
        );
      })}
    </>
  );
};

export default Home;
