import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { Spinner } from "../Carga/Carga";
import Card from "../Card/Card";
import styles from './Cards.module.css'

const Cards = () => {

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
      } = useInfiniteQuery(
        "characters",
        ({ pageParam = 1 }) => {
          const apiUrl = `https://rickandmortyapi.com/api/character?page=${pageParam}`;
          return axios.get(apiUrl).then((response) => response.data);
        },
        {
          getNextPageParam: (lastPage, pages) => {
            // Verifica si hay más páginas disponibles
            return lastPage.info.next ? pages.length + 1 : null;
          },
        }
      );
    
      const characters = data ? data.pages.flatMap((page) => page.results) : [];
    
      return (
        <>
          <InfiniteScroll
            dataLength={characters.length}
            hasMore={hasNextPage || isLoading}
            next={fetchNextPage}
            loader={<Spinner />} 
          >
            <div className={styles.divCards}>
              {characters.map((char) => (
                <div>
                <Card key={char.id} char={char} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </>
      );
    };
    
    export default Cards;