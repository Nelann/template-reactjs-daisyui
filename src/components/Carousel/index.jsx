const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full md:h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full md:h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full md:h-[700px]">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 absolute top-[42%] md:top-[72%]">
        <a href="#slide1" className="btn btn-xs">
          1
        </a>
        <a href="#slide2" className="btn btn-xs">
          2
        </a>
        <a href="#slide3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Carousel;
