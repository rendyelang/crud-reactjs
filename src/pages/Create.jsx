import React, { useState } from "react";
import BackComponents from "../components/BackComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import data from "../data/data";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const [forms, setForms] = useState({
    nama: "",
    umur: "",
    alamat: "",
    no: "",
  });
  const empty = () => {
    Swal.fire({
      title: "Semua data harus diisi!",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#EF4444",
      confirmButtonText: "okey",
      timer: 5000,
    });
  };
  const success = () => {
    Swal.fire({
      title: "Data berhasil disimpan!",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#EF4444",
      confirmButtonText: "okey",
      timer: 5000,
    });
  };
  const nav = useNavigate();
  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    if (forms.nama === "" || forms.umur === "" || forms.alamat === "" || forms.no === "") {
      e.preventDefault(); //fungsi agar page tidak direfresh
      empty();
      nav("/create");
    } else {
      e.preventDefault();
      data.push({
        id: data.length + 1,
        nama: forms.nama,
        alamat: forms.alamat,
        umur: forms.umur,
        no: forms.no,
      });
      nav("/");
      success();
    }
  };
  return (
    <div className="container py-10">
      <BackComponents />
      <p className="text-4xl font-medium">Add New User</p>
      <p className="text-lg">
        Penguji bisa mencoba satu kondisi di sini yaitu cobalah untuk submit form dengan tidak mengisi salah satu kolom / semua kolom input. <br /> Maka form tidak akan bisa tersubmit dan akan menampilkan alert.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-9 mb-2">
          <div className="flex flex-col mb-4">
            <label className="mb-2">Nama :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="text" name={"nama"} autoFocus="true" onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Umur :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="number" name={"umur"} onChange={handleChange} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Alamat :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="text" name={"alamat"} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">No HP :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="number" name={"no"} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="bg-blue-600 text-white text-sm hover:bg-blue-800 rounded-md py-2 px-3 mb-3">
          <FontAwesomeIcon icon={faPaperPlane} /> Save
        </button>
      </form>
    </div>
  );
};

export default Create;
