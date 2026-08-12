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
    <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Arka plan ambiyans parlamaları (Ao ve Aka) */}
      <div className="absolute top-[-10%] left-[0%] w-[600px] h-[600px] bg-[#2283C4] rounded-full filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[0%] w-[600px] h-[600px] bg-[#D52F2F] rounded-full filter blur-[200px] opacity-10 pointer-events-none"></div>

      {/* Ana Konteyner - Ekranın tam merkezine hizalandı */}
      <div className="z-10 w-full max-w-4xl flex flex-col items-center justify-center gap-10 mt-[-5vh]">
        
        {/* Logo - Hizalama düzeltildi, Kusursuz Renk Geçişleri */}
        <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter flex items-center justify-center drop-shadow-2xl select-none">
          <span className="text-white">e</span>
          
          {/* X: %80 Kırmızı -> Mor */}
          <span className="bg-gradient-to-r from-[#D52F2F] from-[80%] to-[#8338EC] text-transparent bg-clip-text">
            X
          </span>
          
          {/* P: Saf Mor (Hollow Purple) */}
          <span className="text-[#8338EC]">
            P
          </span>
          
          {/* L: Mor -> Mavi */}
          <span className="bg-gradient-to-r from-[#8338EC] from-[10%] to-[#2283C4] text-transparent bg-clip-text">
            L
          </span>
          
          {/* ORE: Saf Mavi */}
          <span className="text-[#2283C4]">
            ORE
          </span>
        </h1>

        {/* Metin Kutusu Konteyneri - Premium & Minimalist */}
        <div className="w-full max-w-2xl bg-[#0a0a0c] border border-white/5 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 focus-within:border-[#8338EC]/40 focus-within:shadow-[0_0_40px_rgba(131,56,236,0.1)]">
          
          {/* Üst Vurgu Çizgisi - Mavi -> Mor -> Kırmızı */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2283C4] via-[#8338EC] to-[#D52F2F] opacity-80"></div>
          
          <textarea
            rows={5}
            className="w-full bg-transparent text-gray-200 placeholder-gray-600 text-lg p-6 focus:outline-none resize-none leading-relaxed"
            placeholder="Evrenini veya karakterini anlatmaya başla..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          
          <div className="flex justify-between items-center px-6 pb-5 pt-2">
            <span className="text-xs text-gray-600 font-mono tracking-wider">
              {inputData.length} KARAKTER
            </span>
            
            <button
              onClick={handleForge}
              disabled={loading || inputData.length === 0}
              className="bg-white/5 hover:bg-[#8338EC] border border-white/10 hover:border-[#8338EC] text-white px-8 py-2.5 rounded-lg font-semibold transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(131,56,236,0.4)] cursor-pointer"
            >
              {loading ? (
                <span className="animate-pulse">Yaratılıyor...</span>
              ) : (
                "Evreni Yarat"
              )}
            </button>
          </div>
        </div>
        
      </div>
    </main>
  );
}
