import React from "react";

function JumbotronComponents(props) {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container">
        <p className="mb-3 text-[52px] font-normal">{props.title}</p>
        <p className="mb-2 text-lg">
          Aplikasi ini ditujukan untuk memenuhi tugas akhir dari bootcamp Front End Nusaputra.
          <br /> Besar harapan saya untuk bisa mendapatkan sertifikat kriteria terbaik dalam pelaksanaan tugas akhir ini.
        </p>
        <hr className="mb-2 border-gray-400" />
        <p className="mb-2 text-lg">
          Aplikasi ini merupakan sistem CRUD (Create, Read, Update, Delete). <br /> Aplikasi ini dibangun menggunakan React Js, Tailwind Css, dan Bootstrap Table Next.
        </p>
      </div>
    </div>
  );
}

export default JumbotronComponents;
