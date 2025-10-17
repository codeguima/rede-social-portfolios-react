"use client";
import React from "react";
import Navbar from "./components/navbar";
import { ArrowRight } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 px-8 py-16 gap-12">
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
              Script & Socials
            </span>
            <span className="block text-3xl md:text-4xl mt-2 text-gray-300">
              Conecte-se. Aprenda. Crie.
            </span>
          </h1>

          <p className="text-gray-400 mb-8 text-lg max-w-lg">
            Uma comunidade feita para desenvolvedores iniciantes.
            Compartilhe código, descubra projetos open source e cresça junto com outros devs.
          </p>

          <div className="flex gap-4">
            <button
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 transition text-white font-semibold px-6 py-3 rounded-lg"
              onClick={() => (window.location.href = "/Login")}
            >
              Entrar →
            </button>

            <button
              className="border border-primary-500 text-primary-400 hover:bg-primary-500/10 px-6 py-3 rounded-lg"
              onClick={() => (window.location.href = "/register")}
            >
              Cadastre-se
            </button>

          </div>
        </div>

        {/* Ilustração lateral */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./public/1.svg"
            alt="Developer illustration"
            className="w-80 md:w-96 lg:w-[28rem] drop-shadow-2xl animate-fade-in"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-950/50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-secondary-500">
            O que você encontra aqui
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold mb-3">🌱 Aprendizado</h3>
              <p className="text-gray-400">
                Tutoriais e dicas práticas para quem está começando no mundo da programação.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-secondary-500 transition">
              <h3 className="text-xl font-semibold mb-3">💬 Conexões</h3>
              <p className="text-gray-400">
                Faça networking com outros desenvolvedores, compartilhe ideias e projetos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary-500 transition">
              <h3 className="text-xl font-semibold mb-3">🚀 Projetos Reais</h3>
              <p className="text-gray-400">
                Participe de projetos colaborativos, ganhe experiência e monte seu portfólio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Script & Socials — Desenvolvido com 💙 por devs iniciantes.
      </footer>
    </div>
  );
};

export default HomePage;
