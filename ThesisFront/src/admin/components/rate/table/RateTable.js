import MaterialTable from "@material-table/core";
import React, { useEffect, useState } from "react";
import { useRateTable } from "../../../hooks/components/brand/table/useRateTable";
import AddIcon from "@mui/icons-material/Add";
import RateForm from "../form/RateForm";
import EditIcon from "@mui/icons-material/Edit";
import EditRateForm from "../form/EditRateForm";

const RateTable = () => {
  const { data, columns } = useRateTable();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [rowData, setRowData] = useState();
  const [disabled, setDisabled] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenEdit = (row) => {
    setRowData(row);
    setOpenEdit(true);
  };

  useEffect(() => {
    if (data?.rates.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [data]);

  console.log(disabled);

  return (
    <>
      <MaterialTable
        title=""
        data={data?.rates}
        columns={columns}
        options={{
          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: () => <AddIcon id="addBrand" />,
            tooltip: "Add Rate",
            onClick: (event, rowData) => handleOpen(),
            isFreeAction: true,
            disabled: disabled,
          },
          {
            icon: () => <EditIcon id="editProduct" />,
            tooltip: "Edit Rate",
            onClick: (event, rowData) => handleOpenEdit(rowData),
          },
        ]}
      />
      <RateForm open={open} handleClose={() => handleClose()} />
      <EditRateForm
        open={openEdit}
        data={rowData}
        handleClose={() => handleCloseEdit()}
      />
    </>
  );
};

export default RateTable;
