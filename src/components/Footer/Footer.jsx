import React from "react";
import { footerLinks } from "../../base-data";

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-2 pb-20 pt-5">
          {/* detail comp. footer */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase"
            >
              {/* <img src="src/assets/Jclothes-img.svg" className='w-[30px]' alt="" /> */}
              JClothes
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3">
              Custom Clothes And Merchants <br></br>
              "Make Your Ideas Into Reality"
            </p>
            <p className="text-gray-500 mt-4">© 2024 JClothes</p>
            <a
              href="https://www.instagram.com/clothesjantur/"
              target="_blank"
              className="inline-block bg-primary/90 
            text-white py-2 px-4 mt-4 text-sm rounded-md"
            >
              Visit Our Instagram || Whatsapp
            </a>
          </div>
          <div className="flex-[1.5] w-full flex flex-row justify-start flex-wrap md:mt-0 mt-10 text-gray-600 py-6 px-6">
            {footerLinks.map((footerLinks) => (
              <div
                key={footerLinks.title}
                className={`flex flex-col sm:my-0 my-6 min-w-[150px] `}
              >
                <h4 className="font-poppins text-[20px] leading-[27px] font-bold text-gray-600">
                  {footerLinks.title}
                </h4>
                <ul className="list-none mt-4 text-gray-600">
                  {footerLinks.links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`font-poppins font-semibold text-[16px] leading-[24px] text-primary hover:text-white cursor-pointer ${
                        index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      <a target="_blank" href={`${link.link}`}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
