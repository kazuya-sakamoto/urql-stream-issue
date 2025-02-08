import { FC, PropsWithChildren, useMemo } from "react";
import { Provider, cacheExchange, createClient, fetchExchange } from "urql";
import { fetch as expoFetch } from "expo/fetch";

const GRAPHQL_ENDPOINT = "https://countries.trevorblades.com/graphql";

export const UrqlProvider: FC<PropsWithChildren> = ({ children }) => {
  const urqlClient = useMemo(() => {
    return createClient({
      url: GRAPHQL_ENDPOINT,
      fetch: expoFetch as typeof fetch,
      exchanges: [cacheExchange, fetchExchange],
    });
  }, []);

  return <Provider value={urqlClient}>{children}</Provider>;
};
