import React from "react";

const FooterComponents = () => {
  return (
    <footer className="bg-[#282c34] w-full py-10 text-center">
      <div className="container">
        <p className="text-lg text-white mb-0">
          Copyright 2023. By{" "}
          <a className="text-red-400" href="http://rendyelang.github.io" target="_blank" rel="noopener noreferrer">
            rendyelang
          </a>
          , all right reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponents;
