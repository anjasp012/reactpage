import React from "react";
// import images
import AboutMe from "../img/about/about.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transtion
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        {/* text and image */}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* image */}
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={transition1}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={AboutMe}
              alt=""
            ></motion.img>
          </motion.div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "50%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 font-primary">About me</h1>
            <p className="mb-12 max-w-sm font-primary font-normal">
              Anak kelahiran 2000 yang tertulis di Akta Kelahiran malah 2001.
              Selamat datang di website gw. Website ini ga banyak bacot kayak
              sebelah. Bukan juga bahas politik. Pemikiran gw ya,
              <b>"Lu punya kuasa, lu punya uang. Menurut gw ga ny*t"</b> , canda
              abang filsuf. Jadi menurut gw website ini akan berguna untuk gw
              pribadi dalam menjalani kehidupan di dunia saat ini.
              <br />
              <br />
              Kenapa demikian?, karna visual #1 menurut gw. Dengan berhasilnya
              gw memanjakan mata si target maka apa yang gw harapkan akan
              sedikit dimudahkan. Contohnya website ini. Kenapa lo mau baca
              sampai kata ini?, karna lo kepo dan berhasilnya gw memanjakan mata
              lo. Asikk.. jadi babang filsuf nieh...
            </p>

            <motion.div
              whileHover={{
                borderColor: "black",
                borderWidth: "2px",
                color: "black",
                background: "transparent",
              }}
              transition={transition1}
              className="btn mb-[30px]"
            >
              <Link to={"/contact"} className="font-primary">
                Gass ngab lanjut chat
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
