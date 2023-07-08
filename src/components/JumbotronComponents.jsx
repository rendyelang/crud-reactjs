import React from "react";
import ButtonNotfoundComponents from "./ButtonNotfoundComponents";
import { Link } from "react-router-dom";

function JumbotronComponents(props) {
  return (
    <div className="bg-gray-200 pb-12 pt-[125px]">
      <div className="container">
        <p className="mb-3 text-center lg:text-[54px] lg:leading-[4rem] sm:text-4xl sm:leading-[45px] text-[26px] font-bold">{props.title}</p>
        <p className="mb-2 text-base sm:text-lg">
          Aplikasi ini ditujukan untuk memenuhi tugas akhir dari bootcamp Front End Nusaputra.
          <br /> Besar harapan saya untuk bisa mendapatkan sertifikat kriteria terbaik dalam pelaksanaan tugas akhir ini.
        </p>
        <hr className="mb-2 border-gray-400" />
        <p className="mb-2 text-base sm:text-lg">
          Aplikasi ini merupakan sistem CRUD (Create, Read, Update, Delete). <br /> Aplikasi ini dibangun menggunakan React Js, Tailwind Css, dan Bootstrap Table Next.
        </p>
        <hr className="mb-2 border-gray-400" />
        <p className="mb-2 text-base sm:text-lg">Aplikasi ini terdapat Not Found page, penguji bisa mencoba memasukkan url sembarang seperti "/nfdsgy"</p>
        <Link to={"/bfdhsu"}>
          <ButtonNotfoundComponents />
        </Link>
      </div>
    </div>
  );
}

export default JumbotronComponents;
