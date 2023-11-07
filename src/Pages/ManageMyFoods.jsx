import { useState, useEffect } from "react";
import { useTable } from "react-table";
import axios from "axios";

const AvailableFoods = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://assignment-11-server-side-chi.vercel.app/foodRequest"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  const columns = [
    {
      Header: "_id",
      accessor: "data._id",
    },
    {
      Header: "Image",
      accessor: "data.image",
      Cell: ({ value }) => <img src={value} alt="Food Request Image" />,
    },
    {
      Header: "Name",
      accessor: "data.name",
    },
    {
      Header: "Quantity",
      accessor: "data.quantity",
    },
    {
      Header: "Location",
      accessor: "data.location",
    },
    {
      Header: "Time",
      accessor: "data.time",
    },
    {
      Header: "Notes",
      accessor: "data.notes",
    },
    {
      Header: "User Image",
      accessor: "data.userImage",
      Cell: ({ value }) => <img src={value} alt="User Image" />,
    },
    {
      Header: "User Name",
      accessor: "data.userName",
    },
  ];

  const tableInstance = useTable({
    columns,
    data,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows } =
    tableInstance;

  return (
    <div>
      <h1>Food Requests</h1>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, idx) => (
            <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((header, idx) => (
                <th key={idx} {...header.getHeaderProps()}>
                  {header.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => (
            <tr key={idx} {...row.getRowProps()}>
              {row.cells.map((cell, idx) => (
                <td key={idx} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AvailableFoods;
