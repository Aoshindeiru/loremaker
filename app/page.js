"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Sayfa kaydırıldığında (scroll) menünün belirmesi için
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
    <main className={`min-h-screen transition-colors duration-700 relative overflow-x-hidden font-sans ${isLightMode ? 'bg-[#f4f6f8] text-[#0a0a0c]' : 'bg-[#050505] text-white selection:bg-[#8338EC] selection:text-white'}`}>
      
      {/* --- SABİT ARKA PLAN (HOLLOW PURPLE) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#2283C4] rounded-full filter blur-[150px] animate-[pulse_6s_ease-in-out_infinite] transition-opacity duration-700 ${isLightMode ? 'opacity-[0.04]' : 'opacity-10'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D52F2F] rounded-full filter blur-[150px] animate-[pulse_6s_ease-in-out_infinite_reverse] transition-opacity duration-700 ${isLightMode ? 'opacity-[0.04]' : 'opacity-10'}`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#8338EC] rounded-full filter blur-[200px] transition-opacity duration-700 ${isLightMode ? 'opacity-[0.02]' : 'opacity-[0.07]'}`}></div>
      </div>

      {/* --- YUKARIDAN İNEN SABİT MENÜ (STICKY NAVBAR) --- */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-6 py-4 flex justify-between items-center ${isScrolled ? (isLightMode ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 translate-y-0' : 'bg-[#0a0a0c]/90 backdrop-blur-md border-b border-white/5 translate-y-0') : 'opacity-0 pointer-events-none -translate-y-full'}`}>
        
        {/* Küçülen Logo */}
        <div className="font-black italic text-3xl tracking-tighter cursor-pointer flex items-center">
          <span className={isLightMode ? "text-gray-900" : "text-white"}>e</span>
          <span className="bg-gradient-to-r from-[#D52F2F] from-[80%] to-[#8338EC] text-transparent bg-clip-text">X</span>
          <span className="text-[#8338EC]">P</span>
          <span className="bg-gradient-to-r from-[#8338EC] from-[10%] to-[#2283C4] text-transparent bg-clip-text">L</span>
          <span className="text-[#2283C4]">ORE</span>
        </div>
      </header>

      {/* --- DARK/LIGHT MODE BUTONU (HER ZAMAN GÖRÜNÜR) --- */}
      <button 
        onClick={() => setIsLightMode(!isLightMode)} 
        className={`fixed top-5 right-6 z-50 w-16 h-8 rounded-full p-1 flex items-center transition-all duration-500 shadow-lg ${isLightMode ? 'bg-[#e2e8f0] border border-gray-300 hover:shadow-xl' : 'bg-[#121215] border border-white/10 hover:shadow-[0_0_15px_rgba(131,56,236,0.3)]'}`}
        aria-label="Toggle Theme"
      >
        <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${isLightMode ? 'bg-white translate-x-0 shadow-sm' : 'bg-gradient-to-tr from-[#8338EC] to-[#2283C4] translate-x-8'}`}>
          {isLightMode ? (
            <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          )}
        </div>
      </button>

      {/* --- 1. BÖLÜM: ANA EKRAN --- */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10 mt-[-5vh]">
          
          {/* Devasa Ana Logo (Aşağı kaydırınca NavBar'a geçer) */}
          <h1 className={`text-7xl md:text-9xl font-black italic tracking-tighter flex items-center justify-center drop-shadow-2xl select-none transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <span className={isLightMode ? "text-gray-900" : "text-white"}>e</span>
            <span className="bg-gradient-to-r from-[#D52F2F] from-[80%] to-[#8338EC] text-transparent bg-clip-text">X</span>
            <span className="text-[#8338EC]">P</span>
            <span className="bg-gradient-to-r from-[#8338EC] from-[10%] to-[#2283C4] text-transparent bg-clip-text">L</span>
            <span className="text-[#2283C4]">ORE</span>
          </h1>

          <p className={`text-lg md:text-xl max-w-xl text-center mx-auto font-light mb-4 transition-colors duration-500 ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
            Aklındaki karmaşık fikirleri, saniyeler içinde kusursuz bir Fandom veritabanına dönüştür.
          </p>

          {/* Metin Kutusu */}
          <div className={`w-full max-w-2xl rounded-2xl relative overflow-hidden transition-all duration-500 border ${isLightMode ? 'bg-white/80 border-gray-200 shadow-xl focus-within:border-[#8338EC]/50 focus-within:shadow-[0_0_30px_rgba(131,56,236,0.15)]' : 'bg-[#0a0a0c]/80 backdrop-blur-md border-white/5 shadow-2xl focus-within:border-[#8338EC]/40 focus-within:shadow-[0_0_40px_rgba(131,56,236,0.1)]'}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2283C4] via-[#8338EC] to-[#D52F2F] opacity-80"></div>
            
            <textarea
              rows={5}
              className={`w-full bg-transparent text-lg p-6 focus:outline-none resize-none leading-relaxed transition-colors duration-500 ${isLightMode ? 'text-gray-900 placeholder-gray-400' : 'text-gray-200 placeholder-gray-600'}`}
              placeholder="Evrenini anlatmaya başla..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            
            <div className="flex justify-between items-center px-6 pb-5 pt-2">
              <span className={`text-xs font-mono tracking-wider transition-colors duration-500 ${isLightMode ? 'text-gray-500' : 'text-gray-600'}`}>
                {inputData.length} KARAKTER
              </span>
              
              <button
                onClick={handleForge}
                disabled={loading || inputData.length === 0}
                className={`px-8 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${isLightMode ? 'bg-white border border-gray-200 text-gray-800 hover:bg-[#8338EC] hover:text-white hover:border-[#8338EC] shadow-md' : 'bg-white/5 hover:bg-[#8338EC] border border-white/10 hover:border-[#8338EC] text-white shadow-lg hover:shadow-[0_0_20px_rgba(131,56,236,0.4)]'}`}
              >
                {loading ? <span className="animate-pulse">Yaratılıyor...</span> : "Evreni Yarat"}
              </button>
            </div>
          </div>
        </div>

        {/* Aşağı Kaydır Oku */}
        <div className={`absolute bottom-10 animate-bounce transition-colors duration-500 ${isLightMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* --- 2. BÖLÜM: ÖZELLİKLER --- */}
      <section className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistem Nasıl Çalışır?</h2>
          <p className={`text-lg transition-colors duration-500 ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Karmaşık wiki kodlarıyla uğraşma, sadece hayal et.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className={`backdrop-blur-sm border p-8 rounded-2xl transition-all duration-300 ${isLightMode ? 'bg-white border-gray-200 hover:shadow-xl hover:border-[#D52F2F]/30' : 'bg-[#0a0a0c]/60 border-white/5 hover:border-[#D52F2F]/30'}`}>
            <div className="w-14 h-14 bg-[#D52F2F]/20 rounded-xl flex items-center justify-center mb-6 text-[#D52F2F] font-black text-2xl">1</div>
            <h3 className={`text-xl font-bold mb-3 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Taslağını Yaz</h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              Kafandaki konsepti kısaca özetle. <br/><br/>
              <span className={`italic ${isLightMode ? 'text-gray-500' : 'text-gray-500'}`}>"Örn: Tek kolu olan ve tek tarafı keskin kılıcıyla denizlere hükmeden bir korsan..."</span>
            </p>
          </div>

          <div className={`backdrop-blur-sm border p-8 rounded-2xl transition-all duration-300 ${isLightMode ? 'bg-white border-gray-200 hover:shadow-xl hover:border-[#8338EC]/30' : 'bg-[#0a0a0c]/60 border-white/5 hover:border-[#8338EC]/30'}`}>
            <div className="w-14 h-14 bg-[#8338EC]/20 rounded-xl flex items-center justify-center mb-6 text-[#8338EC] font-black text-2xl">2</div>
            <h3 className={`text-xl font-bold mb-3 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Yapay Zeka İşlesin</h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              eXPLore algoritmaları yazdığın taslağı analiz eder; karakterler arası bağları, güç sistemlerini ve lore detaylarını otomatik olarak genişletir.
            </p>
          </div>

          <div className={`backdrop-blur-sm border p-8 rounded-2xl transition-all duration-300 ${isLightMode ? 'bg-white border-gray-200 hover:shadow-xl hover:border-[#2283C4]/30' : 'bg-[#0a0a0c]/60 border-white/5 hover:border-[#2283C4]/30'}`}>
            <div className="w-14 h-14 bg-[#2283C4]/20 rounded-xl flex items-center justify-center mb-6 text-[#2283C4] font-black text-2xl">3</div>
            <h3 className={`text-xl font-bold mb-3 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Wiki Hazır</h3>
            <p className={`text-sm leading-relaxed ${isLightMode ? 'text-gray-600' : 'text-gray-400'}`}>
              Görselleri, sayfa hiyerarşisi ve iç linklemeleri yapılmış profesyonel bir Fandom sayfası saniyeler içinde önünde belirir.
            </p>
          </div>

        </div>
      </section>

      {/* --- 3. BÖLÜM: FOOTER --- */}
      <footer className={`relative z-10 w-full border-t pt-16 pb-8 px-6 mt-12 transition-colors duration-500 ${isLightMode ? 'bg-white border-gray-200' : 'bg-[#070709] border-white/10'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <h4 className={`font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Platform</h4>
            <ul className={`space-y-3 text-sm ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Blog & Haberler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">API Dokümantasyonu</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Araçlar (Ücretsiz)</h4>
            <ul className={`space-y-3 text-sm ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Karakter Yaratıcı</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">İsim Jeneratörü</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Güç Sistemi</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Tüm Araçlar</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Şirket</h4>
            <ul className={`space-y-3 text-sm ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-bold mb-6 ${isLightMode ? 'text-gray-900' : 'text-gray-100'}`}>Topluluk</h4>
            <ul className={`space-y-3 text-sm ${isLightMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Discord Sunucusu</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Rehberler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Hata Bildir</a></li>
            </ul>
          </div>

        </div>

        <div className={`max-w-6xl mx-auto border-t pt-8 text-center text-xs transition-colors duration-500 ${isLightMode ? 'border-gray-200 text-gray-400' : 'border-white/5 text-gray-500'}`}>
          <p>© 2026 eXPLORE. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </main>
  );
}
