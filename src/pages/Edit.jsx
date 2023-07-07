import React, { useEffect, useState } from "react";
import BackComponents from "../components/BackComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data";
import Swal from "sweetalert2";

const EditUserContainer = () => {
  const [forms, setForms] = useState({
    nama: "",
    umur: "",
    alamat: "",
    no: "",
  });

  const { id } = useParams();
  const nav = useNavigate();
  const successChange = () => {
    Swal.fire({
      title: "Data berhasil diubah!",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#EF4444",
      confirmButtonText: "okey",
      timer: 5000,
    });
  };
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

  useEffect(() => {
    data.filter((item) => {
      if (item.id === Number(id)) {
        setForms({
          nama: item.nama,
          alamat: item.alamat,
          umur: item.umur,
          no: item.no,
        });
      }
    });
  }, [id]);

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
      // nav("/create");
    } else {
      e.preventDefault();
      data.filter((item) => {
        if (item.id === Number(id)) {
          item.nama = forms.nama;
          item.alamat = forms.alamat;
          item.umur = forms.umur;
          item.no = forms.no;
        }
      });
      nav("/");
      successChange();
    }
  };

  return (
    <div className="container py-10">
      <BackComponents />
      <p className="text-4xl font-medium">Edit User</p>
      <p>{id}</p>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-9 mb-2">
          <div className="flex flex-col mb-4">
            <label className="mb-2">Nama :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="text" name={"nama"} value={forms.nama} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Umur :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="number" name={"umur"} value={forms.umur} onChange={handleChange} />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2">Alamat :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="text" name={"alamat"} value={forms.alamat} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">No HP :</label>
            <input className="border-2 py-2 px-3 rounded-md" type="text" name={"no"} value={forms.no} onChange={handleChange} />
          </div>
        </div>
        <button className="bg-blue-600 text-white text-sm hover:bg-blue-800 rounded-md py-2 px-3 mb-3">
          <FontAwesomeIcon icon={faPenToSquare} /> Save Change
        </button>
      </form>
    </div>
  );
};

export default EditUserContainer;
