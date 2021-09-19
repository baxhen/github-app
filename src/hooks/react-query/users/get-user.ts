import { useQuery } from "react-query";
import { client } from "../../../api";

import { QueryKeys } from "../../query-keys";
import { IFullUser } from "./types";

const useGetUser = (username: string) => {
  return useQuery(
    [QueryKeys.getUser, username],
    async () => {
      const response = await client.get<IFullUser>(`users/${username}`);

      return response.data;
    },
    {
      onError: (e) => {
        alert(e);
      },
    }
  );
};

export default useGetUser;
