import Header from './Header';
import Main from './Main';

const Home = () => {

  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:py-20 md:px-12 lg:px-24 lg:py-0 overflow-hidden'>
      <div className='lg:flex lg:justify-between lg:gap-4 relative'>
        <div className='sticky top-10'>
          <Header />
        </div>
        <Main />
      </div>
    </div>
  )
}

export default Home;
