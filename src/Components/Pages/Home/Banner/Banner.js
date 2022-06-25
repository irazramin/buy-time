
const Banner = () => {
  return (
    <div className=' 2xl:w-[65%] md:w-[85%] sm:w-[90%] mx-auto'>
      <div
        id='carouselExampleSlidesOnly'
        class='carousel slide relative'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner relative w-full  h-[55vh]'>
          <div class='carousel-item active relative float-left w-full'>
            <img
              src='https://images.unsplash.com/photo-1632280071595-b13521457242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              class='block w-full  object-cover h-[65vh]'
              alt='Wild Landscape'
            />
          </div>
          <div class='carousel-item relative float-left w-full'>
            <img
              src='https://images.unsplash.com/photo-1518131672697-613becd4fab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
              class='block w-full  object-cover h-[65vh]'
              alt='Camera'
            />
          </div>
          <div class='carousel-item relative float-left w-full'>
            <img
              src='https://images.unsplash.com/photo-1591352254932-6d56d9fe295b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              class='block w-full  object-cover h-[65vh]'
              alt='Exotic Fruits'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner