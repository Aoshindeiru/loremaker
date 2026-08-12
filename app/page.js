"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleForge = () => {
    if (!inputData) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Bu aşamada Fandom paneline geçilecek!");
    }, 2000);
  };

  return (
    <main className={`min-h-screen transition-colors duration-75 relative overflow-x-hidden font-sans ${isLightMode ? 'bg-[#F5F5F7] text-[#1D1D1F]' : 'bg-[#000000] text-white selection:bg-[#8338EC] selection:text-white'}`}>
      
      {/* --- SABİT ARKA PLAN (VIBRANT HOLLOW PURPLE - iOS GLOW) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <div className={`absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] bg-[#007AFF] rounded-full filter blur-[120px] animate-[pulse_6s_ease-in-out_infinite] transition-opacity duration-75 ${isLightMode ? 'opacity-10' : 'opacity-20'}`}></div>
        <div className={`absolute bottom-[-5%] right-[-5%] w-[45vw] h-[45vw] bg-[#FF3B30] rounded-full filter blur-[120px] animate-[pulse_6s_ease-in-out_infinite_reverse] transition-opacity duration-75 ${isLightMode ? 'opacity-10' : 'opacity-20'}`}></div>
        <div className={`absolute w-[50vw] h-[50vw] bg-[#AF52DE] rounded-full filter blur-[180px] transition-opacity duration-75 ${isLightMode ? 'opacity-10' : 'opacity-[0.15]'}`}></div>
      </div>

      {/* --- YUKARIDAN İNEN SABİT MENÜ (STICKY NAVBAR - GLASSMORPHISM) --- */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-75 px-8 py-4 flex justify-between items-center ${isScrolled ? (isLightMode ? 'bg-white/70 backdrop-blur-2xl shadow-sm border-b border-white/40 translate-y-0' : 'bg-[#1C1C1E]/70 backdrop-blur-2xl border-b border-white/10 translate-y-0') : 'opacity-0 pointer-events-none -translate-y-full'}`}>
        <div className="font-black italic text-3xl tracking-tighter cursor-pointer flex items-center drop-shadow-md">
          <span className={isLightMode ? "text-[#1D1D1F]" : "text-white"}>e</span>
          <span className="bg-gradient-to-r from-[#FF3B30] from-[80%] to-[#AF52DE] text-transparent bg-clip-text">X</span>
          <span className="text-[#AF52DE]">P</span>
          <span className="bg-gradient-to-r from-[#AF52DE] from-[10%] to-[#007AFF] text-transparent bg-clip-text">L</span>
          <span className="text-[#007AFF]">ORE</span>
        </div>
      </header>

      {/* --- DARK/LIGHT MODE BUTONU (iOS CAPSULE STYLE) --- */}
      <button 
        onClick={() => setIsLightMode(!isLightMode)} 
        className={`fixed top-5 right-6 z-50 w-16 h-8 rounded-full p-1 flex items-center transition-all duration-75 shadow-lg backdrop-blur-xl ${isLightMode ? 'bg-white/80 border border-gray-200 hover:shadow-xl' : 'bg-[#2C2C2E]/80 border border-white/10 hover:shadow-[0_0_20px_rgba(175,82,222,0.4)]'}`}
        aria-label="Toggle Theme"
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-75 shadow-sm ${isLightMode ? 'bg-white translate-x-0' : 'bg-gradient-to-tr from-[#AF52DE] to-[#007AFF] translate-x-8'}`}>
          {isLightMode ? (
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          )}
        </div>
      </button>

      {/* --- 1. BÖLÜM: ANA EKRAN --- */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10 mt-[-5vh]">
          
          <h1 className={`text-7xl md:text-9xl font-black italic tracking-tighter flex items-center justify-center drop-shadow-2xl select-none transition-opacity duration-75 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <span className={isLightMode ? "text-[#1D1D1F]" : "text-white"}>e</span>
            <span className="bg-gradient-to-r from-[#FF3B30] from-[80%] to-[#AF52DE] text-transparent bg-clip-text drop-shadow-sm">X</span>
            <span className="text-[#AF52DE] drop-shadow-sm">P</span>
            <span className="bg-gradient-to-r from-[#AF52DE] from-[10%] to-[#007AFF] text-transparent bg-clip-text drop-shadow-sm">L</span>
            <span className="text-[#007AFF] drop-shadow-sm">ORE</span>
          </h1>

          <p className={`text-lg md:text-xl max-w-xl text-center mx-auto font-medium mb-4 transition-colors duration-75 tracking-tight ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
            Aklındaki karmaşık fikirleri, saniyeler içinde kusursuz bir Fandom veritabanına dönüştür.
          </p>

          {/* Metin Kutusu - iOS Glassmorphism Arayüzü */}
          <div className={`w-full max-w-2xl rounded-3xl relative overflow-hidden transition-all duration-75 border backdrop-blur-2xl ${isLightMode ? 'bg-white/60 border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-within:shadow-[0_8px_40px_rgba(175,82,222,0.15)] focus-within:border-white' : 'bg-[#1C1C1E]/60 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)] focus-within:shadow-[0_8px_40px_rgba(175,82,222,0.25)] focus-within:border-white/20'}`}>
            
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF3B30] opacity-90"></div>
            
            <textarea
              rows={5}
              className={`w-full bg-transparent text-lg p-8 focus:outline-none resize-none leading-relaxed transition-colors duration-75 font-medium ${isLightMode ? 'text-[#1D1D1F] placeholder-[#86868B]' : 'text-[#F5F5F7] placeholder-[#8E8E93]'}`}
              placeholder="Evrenini anlatmaya başla..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            
            <div className="flex justify-between items-center px-8 pb-6 pt-2">
              <span className={`text-xs font-bold tracking-widest uppercase transition-colors duration-75 ${isLightMode ? 'text-[#86868B]' : 'text-[#8E8E93]'}`}>
                {inputData.length} KARAKTER
              </span>
              
              <button
                onClick={handleForge}
                disabled={loading || inputData.length === 0}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-75 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${isLightMode ? 'bg-[#1D1D1F] text-white hover:bg-[#AF52DE] shadow-md hover:shadow-lg' : 'bg-white text-black hover:bg-[#AF52DE] hover:text-white shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(175,82,222,0.5)]'}`}
              >
                {loading ? <span className="animate-pulse">Yaratılıyor...</span> : "Evreni Yarat"}
              </button>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-10 animate-bounce transition-colors duration-75 ${isLightMode ? 'text-[#86868B]' : 'text-[#8E8E93]'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* --- 2. BÖLÜM: ÖZELLİKLER (iOS KART TASARIMI) --- */}
      <section className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Sistem Nasıl Çalışır?</h2>
          <p className={`text-xl font-medium transition-colors duration-75 ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
            Karmaşık wiki kodlarıyla uğraşma, sadece hayal et.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className={`backdrop-blur-2xl border p-10 rounded-3xl transition-all duration-75 ${isLightMode ? 'bg-white/70 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#FF3B30]/40' : 'bg-[#1C1C1E]/60 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-[#FF3B30]/40 hover:shadow-[0_8px_30px_rgba(255,59,48,0.15)]'}`}>
            <div className="w-16 h-16 bg-[#FF3B30]/10 rounded-2xl flex items-center justify-center mb-8 text-[#FF3B30] font-black text-3xl shadow-sm">1</div>
            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Taslağını Yaz</h3>
            <p className={`text-base font-medium leading-relaxed ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              Kafandaki konsepti kısaca özetle. <br/><br/>
              <span className={`italic ${isLightMode ? 'text-[#1D1D1F]/70' : 'text-white/70'}`}>"Örn: Tek kolu olan ve tek tarafı keskin kılıcıyla denizlere hükmeden bir korsan..."</span>
            </p>
          </div>

          <div className={`backdrop-blur-2xl border p-10 rounded-3xl transition-all duration-75 ${isLightMode ? 'bg-white/70 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#AF52DE]/40' : 'bg-[#1C1C1E]/60 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-[#AF52DE]/40 hover:shadow-[0_8px_30px_rgba(175,82,222,0.15)]'}`}>
            <div className="w-16 h-16 bg-[#AF52DE]/10 rounded-2xl flex items-center justify-center mb-8 text-[#AF52DE] font-black text-3xl shadow-sm">2</div>
            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Yapay Zeka İşlesin</h3>
            <p className={`text-base font-medium leading-relaxed ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              eXPLore algoritmaları yazdığın taslağı analiz eder; karakterler arası bağları, güç sistemlerini ve lore detaylarını otomatik olarak genişletir.
            </p>
          </div>

          <div className={`backdrop-blur-2xl border p-10 rounded-3xl transition-all duration-75 ${isLightMode ? 'bg-white/70 border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-[#007AFF]/40' : 'bg-[#1C1C1E]/60 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:border-[#007AFF]/40 hover:shadow-[0_8px_30px_rgba(0,122,255,0.15)]'}`}>
            <div className="w-16 h-16 bg-[#007AFF]/10 rounded-2xl flex items-center justify-center mb-8 text-[#007AFF] font-black text-3xl shadow-sm">3</div>
            <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Wiki Hazır</h3>
            <p className={`text-base font-medium leading-relaxed ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              Görselleri, sayfa hiyerarşisi ve iç linklemeleri yapılmış profesyonel bir Fandom sayfası saniyeler içinde önünde belirir.
            </p>
          </div>

        </div>
      </section>

      {/* --- 3. BÖLÜM: FOOTER --- */}
      <footer className={`relative z-10 w-full border-t pt-20 pb-12 px-8 mt-12 transition-colors duration-75 ${isLightMode ? 'bg-[#F5F5F7] border-gray-200' : 'bg-[#000000] border-white/10'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          <div className="space-y-5">
            <h4 className={`font-bold text-sm tracking-widest uppercase ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Platform</h4>
            <ul className={`space-y-4 font-medium text-sm ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Blog & Haberler</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">API Dokümantasyonu</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className={`font-bold text-sm tracking-widest uppercase ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Araçlar</h4>
            <ul className={`space-y-4 font-medium text-sm ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Karakter Yaratıcı</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">İsim Jeneratörü</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Güç Sistemi</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Tüm Araçlar</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className={`font-bold text-sm tracking-widest uppercase ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Şirket</h4>
            <ul className={`space-y-4 font-medium text-sm ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className={`font-bold text-sm tracking-widest uppercase ${isLightMode ? 'text-[#1D1D1F]' : 'text-white'}`}>Topluluk</h4>
            <ul className={`space-y-4 font-medium text-sm ${isLightMode ? 'text-[#86868B]' : 'text-[#A1A1A6]'}`}>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Discord Sunucusu</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Rehberler</a></li>
              <li><a href="#" className="hover:text-[#AF52DE] transition-colors">Hata Bildir</a></li>
            </ul>
          </div>

        </div>

        <div className={`max-w-6xl mx-auto border-t pt-8 text-center font-medium text-xs transition-colors duration-75 ${isLightMode ? 'border-gray-300 text-[#86868B]' : 'border-white/10 text-[#A1A1A6]'}`}>
          <p>© 2026 eXPLORE. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </main>
  );
}
