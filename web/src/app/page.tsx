'use client'
import { useEffect } from "react";
import { Sparkle, Video } from "lucide-react";
import { io } from "socket.io-client";
import Navbar from "./components/Navbar";
import {motion} from "motion/react";
import Footer from "./components/Footer";

const socket = io(process.env.NEXT_PUBLICSOCKET_URL!,{
  transports: ['websocket'],
})

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="relative min-h-screen w-full bg-linear-to-br from-black via-zinc-900 to-black text-white overflow-hidden">
    <div className="absolute top-32 left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
    <div className="absolute top-1/3 left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
    <motion.div
        initial = {{y:40, opacity:0}}
        animate = {{y:0, opacity:1}}
        transition={{duration:0.4}}
    className="relative z-10 flex flex-col items-center justify-center h-screen px-6 text-center"
    >
      <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/10"><Sparkle/></div>
      <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">Incognito</div>
      <p className="sm:text-base text-zinc-400 max-w-md mb-8">Anonymous video conversation with strangers worldwide. No sign-up. No identity. just pure connection.</p>
      <motion.button
        whileHover={{scale:1.09}}
        whileTap={{scale:0.9}}
      className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-white to-zinc-200 text-black font-semibold text-lg shadow-xl"
      >
      <Video size={22} /> start Anonymous Chat
      </motion.button>
    </motion.div>
    </main>
    <Footer/>
    </>
  );
}


