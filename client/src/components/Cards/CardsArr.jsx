import Card from "../Card/Card";
import styles from "./Cards.module.css";

const CardsArr = ({ allProducts }) => {
  const allProductsFiltrado = allProducts?.filter(
    (product) => product.status === true
  );
  return (
    <>
      <div className={styles.divMain}>
        {allProductsFiltrado.length === 0 ? (
          <div>
            <span>No se encontraron productos</span>
          </div>
        ) : (
          <div className={styles.divCardsArr}>
            {allProductsFiltrado.map((product) => (
              <div key={product.id}>
                <Card product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardsArr;

// import React from 'react';
// import { Link } from 'react-router-dom'; // Import the Link component from your routing library
// import Card from './Card/Card'; // Import your Card component
// import styles from './Cards.module.css'; // Import your styles
// import loadingImage from '../../../assets/loading.gif';
// import Page from '../Pages/Pages';

// const Cards = ({ allVideoGames, page, perPage }) => {

//     const max = Math.ceil(allVideoGames.length / perPage);

//     const shouldRenderPage = allVideoGames.length > perPage;

//     return (
//         <>
//             <div className={styles.divCards}>
//                 {allVideoGames.length === 0 ? (
//                     <div>
//                         <img className={styles.img} src={loadingImage} alt="Loading" />
//                         <span>LOADING...</span>
//                     </div>
//                 ) : (
//                     allVideoGames.slice((page - 1) * perPage, (page - 1) * perPage + perPage)?.map((elemt) => (
//                         <div className={styles.divCard} key={elemt.id}>
//                                 <Link to={`/detail/${elemt.id}`}>

//                                     <Card name={elemt.name} image={elemt.image} genres={elemt.genres} key={elemt.id} />
//                                 </Link>
//                             </div>
//                     ))
//                 )}
//             </div>
//             {shouldRenderPage && <Page page={page} max={max} />}
//         </>
//     );
// };

// export default Cards;
