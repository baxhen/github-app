import { useQuery } from "react-query";
import { client } from "../../../api";

import { QueryKeys } from "../../query-keys";
import { IUserRepo } from "./types";

const useGetUserRepos = (username: string) => {
  return useQuery(
    [QueryKeys.getUserRepos, username],
    async () => {
      const response = await client.get<IUserRepo[]>(`users/${username}/repos`);

      return response.data;
    },
    {
      onError: (e) => {
        alert(e);
      },
    }
  );
};

export default useGetUserRepos;
