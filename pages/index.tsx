import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Login = () => {
  return (
    <>
        <Navbar/>
        <div className="flex flex-row mt-8">
            <div>
                <h1 className="mt-32 mx-16 text-[58px] font-extrabold text-gray-700">Find your book,</h1>
                <h1 className="-mt-4 mx-16 text-[46px] font-extrabold text-blue-600">Find your peace</h1><br></br>
                <p className="mt-4 mx-16 text-lg font-thin text-gray-700 leading-relaxed">kami berusaha untuk memberikan pengalaman pengguna yang optimal <br/> dan mudah digunakan. Jangan ragu untuk menjelajahi situs kami dan <br/> temukan buku-buku favorit Anda!</p>
            </div>
            <div className="flex">
                <img className=" mx-20 mt-12 max-w-[550px] max-h-[400px]" src="/src/e-book.png"></img>
            </div>
        </div>
    </>
  );
};

export default Login;
