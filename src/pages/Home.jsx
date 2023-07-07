// import Swal from "sweetalert2";
import TableComponents from "../components/TableComponents";
// import { data } from "../data/data";
// import { useState } from "react";

const Home = (props) => {
  // const [dataMhs, setDataMhs] = useState(data);
  // const handleDelete = (id) => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#EF4444",
  //     cancelButtonColor: "#4F46E5",
  //     confirmButtonText: "Yes, delete it!",
  //   });
  //   // .then((result) => {
  //   //   if (result.isConfirmed) {
  //   //     const newData = dataMhs.filter((item) => item.id !== id);
  //   //     setDataMhs(newData);
  //   //     Swal.fire("Terhapus", "Data sudah berhasil dihapus", "success");
  //   //   }
  //   // });
  // };
  return (
    <>
      <TableComponents users={props.users} />
    </>
  );
};

export default Home;
