import React from "react";
import { GridColumns } from "@mui/x-data-grid";

export const columns: GridColumns = [
  { field: "id", headerName: "ID", flex: 0.25 },
  { field: "name", headerName: "Name", flex: 1 },
  {
    field: "html_url",
    headerName: "Url",
    flex: 1,
    renderCell: (params) => {
      return (
        <div>
          <a
            href={`${params.formattedValue}`}
            style={{ textDecoration: "none", color: "#1976d2" }}
            target="_blank"
            rel="noreferrer"
          >
            {params.formattedValue}
          </a>
        </div>
      );
    },
  },
];
