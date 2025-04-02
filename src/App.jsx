import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Home />
      <footer className='w-full h-16 bg-gradient-to-b from-transparent to-secondary mt-auto'>
        <div className='container mx-auto flex items-center justify-center h-full'>
          <p className='text-base-content text-opacity-80 text-lg'>
            Made with ❤️
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
