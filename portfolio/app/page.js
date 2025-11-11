"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => setClima(data))
      .catch(() =>
        setClima({ cidade: "", temperatura: "", descricao: "Erro ao carregar o clima." })
      );
  }, []);

  return (
    <div>
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          Echilin Taina
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Desenvolvedora Front-end | Criando experiências digitais com propósito 🚀
        </p>

        <div className="space-x-4 mb-8">
          <a
            href="#projetos"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all shadow-md hover:shadow-lg"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 border border-purple-500 hover:bg-purple-500 rounded-xl text-white font-semibold transition-all"
          >
            Contato
          </a>
        </div>

        {/* Seção do clima / API */}
        <div className="p-6 bg-blue-50 rounded-md inline-block">
          <h2 className="text-2xl font-bold mb-2 text-black">Clima Atual:</h2>
          {clima ? (
            <>
              <p className="text-lg font-semibold text-black">{clima.cidade}</p>
              <p className="text-black">Temperatura: {clima.temperatura}°C</p>
              <p className="capitalize text-black">{clima.descricao}</p>
            </>
          ) : (
            <p className="text-black">Carregando...</p>
          )}
        </div>
      </section>
    </div>
  );
}
