const MovieItem = () => {
  return (
    <div className="rounded-md w-[400px] p-4 shadow-lg hover:shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        alt=""
        className="rounded-md hover:opacity-80 transition-all duration-150"
      />

      <div className="mt-3 space-y-2">
        <p>Hello</p>
        <p>Hello</p>
        <p>Hello</p>
      </div>
    </div>
  );
};

export default MovieItem;
