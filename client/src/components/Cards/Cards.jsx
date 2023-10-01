import { useInfiniteQuery } from "react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';
import { Spinner } from "../Carga/Carga";
import Card from "../Card/Card";
import styles from './Cards.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userFavoritos } from "../../redux/Actions/userFavoritos";


const Cards = () => {
    const dispatch = useDispatch()

    const dataProfileActual = useSelector((state) =>
        state.dataProfile === null ? { userData: { id: "" } } : state.dataProfile
    );

    const { userData } = dataProfileActual;

    const {
        data,
        isLoading,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ["products"],
        ({ pageParam = 1 }) => {
            const apiUrl = `http://localhost:3001/pagination/?page=${pageParam}`;
            return axios.get(apiUrl).then((response) => response.data);
        },
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.currentPage === lastPage.totalPages) {
                    return false;
                }
                return lastPage.currentPage + 1;
            },
        }
    );


    const products = data
        ? data.pages.flatMap((page) => page.products).filter((product) => product.status === true)
        : [];

    useEffect(() => {
        if (userData.id) {
            dispatch(userFavoritos(userData.id))
        }
    }, [dispatch, userData.id])

    return (
        <>
            <InfiniteScroll
                className={styles.divScroll}
                dataLength={products.length}
                hasMore={hasNextPage || isLoading}
                next={() => fetchNextPage()}
                loader={<Spinner />}
            >
                <div className={styles.divCards}>
                    {products.map((product) =>

                    (
                        <div key={product.id}>
                            <Card product={product} />
                        </div>
                    )
                    )}
                </div>

            </InfiniteScroll>
        </>
    );
};

export default Cards;
