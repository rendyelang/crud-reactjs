import { faEdit, faTrash, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const pagination = paginationFactory({
  page: 1,
  sizePerPage: 5,
  lastPageText: ">>",
  firstPageText: "<<",
  nextPageText: ">",
  prePageText: "<",
  showTotal: true,
  alwaysShowAllBtns: true,
  onPageChange: function (page, sizePerPage) {
    console.log("page", page);
    console.log("sizePerPage", sizePerPage);
  },
  onSizePerPageChange: function (page, sizePerPage) {
    console.log("page", page);
    console.log("sizePerPage", sizePerPage);
  },
});

const defaultSorted = [
  {
    dataField: "id",
    order: "desc",
  },
];

const TableComponents = (props) => {
  const [dataMhs, setDataMhs] = useState(props.users);
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return {
          width: "5%",
          backgroundColor: "#444444",
          color: "#fff",
          // fontSize: "14px",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
    {
      dataField: "nama",
      text: "Name",
      sort: true,
      headerStyle: () => {
        return {
          backgroundColor: "#444444",
          color: "#fff",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
    {
      dataField: "umur",
      text: "Age",
      sort: true,
      headerStyle: () => {
        return {
          width: "7%",
          backgroundColor: "#444444",
          color: "#fff",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
    {
      dataField: "alamat",
      text: "Address",
      sort: true,
      headerStyle: () => {
        return {
          backgroundColor: "#444444",
          color: "#fff",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
    {
      dataField: "no",
      text: "No HP",
      sort: true,
      headerStyle: () => {
        return {
          backgroundColor: "#444444",
          color: "#fff",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
    {
      dataField: "link",
      text: "Action",
      align: "center",
      formatter: butFormatter,
      headerStyle: () => {
        return {
          width: "18%",
          backgroundColor: "#444444",
          color: "#fff",
        };
      },
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: "#eeeeee",
          };
        }
        return {
          backgroundColor: "#d5d3d3",
        };
      },
    },
  ];
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Apakah kamu yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#EF4444",
      cancelButtonColor: "#4F46E5",
      confirmButtonText: "Ya, hapus saja!",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = dataMhs.filter((item) => item.id !== id);
        console.log(dataMhs);
        setDataMhs(newData);
        Swal.fire({
          title: "Data berhasil dihapus!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#6633FF",
          confirmButtonText: "OK",
          timer: 5000,
        });
      }
    });
  };
  function butFormatter(rowContent, row) {
    return (
      <div className="flex justify-center items-center flex-col lg:flex-row gap-y-3 lg:gap-x-2">
        <Link to={"edit/" + row.id}>
          <button className="bg-yellow-500 text-white text-xs sm:text-sm hover:bg-yellow-600 rounded-md tombol w-fit">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </button>
        </Link>
        <button onClick={() => handleDelete(row.id)} className="bg-red-500 text-white text-xs sm:text-sm hover:bg-red-800 rounded-md deltom w-fit">
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    );
  }
  return (
    <div className="container py-12">
      <Link className="mr-4" to={"/create"}>
        <button className="bg-blue-600 text-white text-sm hover:bg-blue-800 rounded-md py-2 px-3 mb-3">
          <FontAwesomeIcon icon={faUserPlus} /> Add User
        </button>
      </Link>
      <BootstrapTable className="txt" bootstrap4 keyField="id" data={dataMhs} columns={columns} defaultSorted={defaultSorted} pagination={pagination} />
    </div>
  );
};

export default TableComponents;
