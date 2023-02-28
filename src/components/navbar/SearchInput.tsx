const SearchInput = () => {
  return (
    <div className='absolute left-0 w-full top-10 -z-10 bg-primary'>
      <div className='relative flex items-center px-4 py-2'>
        <div className='absolute pointer-events-none right-6'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-primary'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
              clipRule='evenodd'
            ></path>
          </svg>
        </div>
        <input
          type='text'
          id='simple-search'
          className='bg-white text-black text-sm rounded-lg block w-full pr-10 p-2.5 placeholder-gray-400'
          placeholder='Search'
          required
        />
      </div>
    </div>
  )
}

export default SearchInput
