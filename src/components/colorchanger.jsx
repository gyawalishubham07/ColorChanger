import  { useState } from 'react';

function Example() {

 const [inputcolor, setInputcolor] = useState('');
    const [changecolor, setchangecolor] = useState('olive');
    
    const handleCopy = () => {
    setchangecolor(inputcolor);
  };


  return (
    
    <>
      
      <div className='w-full h-screen duration-200 '
        style={{ backgroundColor: changecolor }} >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <input type="text"
        value={inputcolor}
        onChange={(e) => setInputcolor(e.target.value)}/>
            <button onClick={() => setchangecolor(handleCopy)} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: changecolor }}> {changecolor}
            </button>
          </div>
        </div>
      </div>
      </>
  );
}

export default Example
