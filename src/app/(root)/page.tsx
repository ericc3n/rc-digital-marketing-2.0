import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <>
      <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" alt="ciao" width={300} />
      <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" alt="ciao" width={300} />
      <Link className='btn-2' href='/solutions'>Soluzioni</Link>
      <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" alt="ciao" width={300} />
    </>
  )
}
