import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUser } from "../common";

const DB_URL = "http://localhost:3000";

export const useProfile = () => {
  const queryKey = ["profile", "1"];

  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => axios.get<IUser>(`${DB_URL}/users/1`),
  });

  return { user: data?.data, isLoading };
};
