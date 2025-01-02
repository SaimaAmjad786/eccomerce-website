
// import React from 'react';
// import Image from 'next/image';
// import { StarIcon, ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid';
// import Header from '../components/header';
// import TopBar from '../components/navbar';

// const products = [
//   {
//     id: 1,
//     name: 'Bedroom Standard',
//     image: '/products1.jpg',
//     rating: 4.5,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
//   {
//     id: 2,
//     name: 'Sofa Nelly',
//     image: '/products2.jpg',
//     rating: 4.2,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
//   {
//     id: 3,
//     name: 'Dining Table',
//     image: '/products3.jpg',
//     rating: 4.8,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
//   {
//     id: 4,
//     name: 'Armchair',
//     image: '/products4.jpg',
//     rating: 4.0,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
//   {
//     id: 5,
//     name: 'View Faccia',
//     image: '/products5.jpg',
//     rating: 4.7,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
//   {
//     id: 6,
//     name: 'Corner Sofa',
//     image: '/products6.jpg',
//     rating: 4.3,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod eros et libero malesuada feugiat.',
//   },
// ];

// function ProductList() {
//   return (
//     <>
//   <TopBar/>
//   <Header />
    
//     <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {products.map((product) => (
//         <div key={product.id} className="flex">
//           <div className="w-1/2">
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={300}
//               height={200}
//               className="rounded-lg"
//             />
//           </div>
//           <div className="w-1/2 pl-4">
//             <h3 className="text-xl font-bold mb-2">{product.name}</h3>
//             <div className="flex items-center mb-2">
//               {[...Array(Math.round(product.rating))].map((_, i) => (
//                 <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
//               ))}
//             </div>
//             <p className="mb-4">{product.description}</p>
//             <div className="flex items-center">
//               <ShoppingCartIcon className="w-6 h-6 text-blue-500 mr-2 cursor-pointer" /> 
//               <HeartIcon className="w-6 h-6 text-red-500 cursor-pointer" />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
  
//   );
// }

// export default ProductList;





