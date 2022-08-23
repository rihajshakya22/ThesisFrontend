import { useGetProductAdmin } from "../../../api/product/useProductAdmin";

export const useProductTable = () => {
  const { data, isLoading, isError } = useGetProductAdmin();
  const columns = [
    {
      title: "ID",
      field: "_id",
    },
    {
      title: "Image",
      field: "image",
      render: (rowData) => (
        <img
          src={rowData?.image}
          style={{ width: 100, borderRadius: "50%" }}
          alt="product iamge"
        />
      ),
    },
    {
      title: "Product Name",
      field: "name",
    },
    {
      title: "Description",
      field: "description",
    },
    {
      title: "Product In Stock",
      field: "countInStock",
    },
  ];
  return {
    columns,
    data,
    isLoading,
    isError,
  };
};
