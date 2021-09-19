import { useQuery } from "react-query";
import { client } from "../../../api";

import { QueryKeys } from "../../query-keys";
import { ISimplifiedUser } from "./types";

const useGetUsers = (page: number, since: number) => {
  return useQuery(
    [QueryKeys.getUsers, page, since],
    async () => {
      const response = await client.get<ISimplifiedUser[]>("users", {
        params: { per_page: 10, since: since },
      });

      return response.data;
    },
    {
      onError: (e) => {
        alert(e);
      },
    }
  );
};

export default useGetUsers;
