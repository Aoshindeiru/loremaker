"use client";
import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForge = () => {
    if (!inputData) return;
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      alert("Bu aşamada Fandom paneline geçilecek!");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Arka plan parlamaları (Ao ve Aka) */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2283C4] rounded-full filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#D52F2F] rounded-full filter blur-[150px] opacity-15 pointer-events-none"></div>

      <div className="z-10 w-full max-w-3xl flex flex-col items-center gap-10">
        
        {/* Başlık - Parçalanmış Kusursuz Renk Geçişleri */}
        <div className="text-center space-y-4">
          <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter flex items-center justify-center drop-shadow-2xl select-none">
            <span className="text-white">E</span>
            
            {/* X: Kırmızıdan Mora Geçiş */}
            <span className="bg-gradient-to-r from-[#D52F2F] to-[#8338EC] text-transparent bg-clip-text">
              X
            </span>
            
            {/* P: Tamamen Mor (Purple'ın P'si) */}
            <span className="text-[#8338EC]">
              P
            </span>
            
            {/* L: Mordan Maviye Geçiş */}
            <span className="bg-gradient-to-r from-[#8338EC] to-[#2283C4] text-transparent bg-clip-text">
              L
            </span>
            
            {/* ORE: Tamamen Mavi */}
            <span className="text-[#2283C4]">
              ORE
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto font-light mt-4">
            Dağınık fikirlerini saniyeler içinde profesyonel bir Fandom wikisine dönüştür.
          </p>
        </div>

        {/* Metin Kutusu ve Buton */}
        <div className="w-full bg-[#0a0a0a] border border-gray-800 rounded-2xl shadow-2xl relative overflow-hidden transition-all hover:border-[#8338EC]/40">
          
          {/* Metin Kutusu Üst Çizgisi - Gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2283C4] via-[#8338EC] to-[#D52F2F]"></div>
          
          <textarea
            rows={6}
            className="w-full bg-transparent text-white placeholder-gray-600 text-lg p-6 focus:outline-none resize-none"
            placeholder="Evrenini veya karakterini anlatmaya başla... (Örn: Asit yağmurlu bir gezegende yaşayan tek kolu robotik tüccar)"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          
          <div className="flex justify-between items-center px-6 pb-6 pt-2">
            <span className="text-xs text-gray-500 font-mono">
              {inputData.length} karakter
            </span>
            
            <button
              onClick={handleForge}
              disabled={loading || inputData.length === 0}
              className="bg-[#2283C4] hover:bg-[#8338EC] text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 shadow-[0_0_20px_rgba(34,131,196,0.3)] hover:shadow-[0_0_30px_rgba(131,56,236,0.6)] cursor-pointer"
            >
              {loading ? "Yapay Zeka Çalışıyor..." : "Evreni Yarat"}
            </button>
          </div>
        </div>

        {/* Durum Göstergesi */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <div className="w-2 h-2 rounded-full bg-[#8338EC] animate-pulse shadow-[0_0_10px_rgba(131,56,236,0.8)]"></div>
          Sistem Çevrimiçi ve Yaratıma Hazır
        </div>

      </div>
    </main>
  );
}
