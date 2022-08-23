import { useGetRate } from "../../../api/rate/useRate";

export const useRateTable = () => {
  const { data, isLoading, isError } = useGetRate();
  const columns = [
    {
      title: "ID",
      field: "_id",
    },

    {
      title: "Rate",
      field: "rate",
    },
  ];
  return {
    columns,
    data,
    isLoading,
    isError,
  };
};
