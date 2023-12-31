import axios from "axios";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { Fragment } from "react";

const fetchColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};
export const InfiniteQueries = () => {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["colors"], fetchColor, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  if (isLoading) {
    return <h1>loading..</h1>;
  }
  if (isError) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {data?.pages.map((group, i) => {
        return (
          <Fragment key={i}>
            {
              <h1>
                 {
                    group.data.map(color=>(
                        <h2 key={color.id}>{color.id},{color.label}</h2>
                    ))
                 }
              </h1>
            }
          </Fragment>
        );
      })}
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "fetching..." : null}</div>
    </div>
  );
};
