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
    <main className="bg-[#050505] text-white font-sans relative selection:bg-[#8338EC] selection:text-white">
      
      {/* 
        SABİT ARKA PLAN (HOLLOW PURPLE EFEKTİ)
        Sayfa kaydırıldıkça arkada kalır. Kırmızı ve Mavi hareket edip merkezde Mora dönüşür.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mavi Orb (Ao) */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#2283C4] rounded-full filter blur-[150px] opacity-10 animate-[pulse_6s_ease-in-out_infinite]"></div>
        
        {/* Kırmızı Orb (Aka) */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D52F2F] rounded-full filter blur-[150px] opacity-10 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
        
        {/* Merkezdeki Mor Çarpışma Alanı (Hollow Purple) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#8338EC] rounded-full filter blur-[200px] opacity-[0.07]"></div>
      </div>

      {/* 1. BÖLÜM: ANA EKRAN (HERO SECTION) */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-10 mt-[-5vh]">
          
          {/* Logo */}
          <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter flex items-center justify-center drop-shadow-2xl select-none">
            <span className="text-white">e</span>
            <span className="bg-gradient-to-r from-[#D52F2F] from-[80%] to-[#8338EC] text-transparent bg-clip-text">X</span>
            <span className="text-[#8338EC]">P</span>
            <span className="bg-gradient-to-r from-[#8338EC] from-[10%] to-[#2283C4] text-transparent bg-clip-text">L</span>
            <span className="text-[#2283C4]">ORE</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-xl text-center mx-auto font-light mb-4">
            Aklındaki karmaşık fikirleri, saniyeler içinde kusursuz bir Fandom veritabanına dönüştür.
          </p>

          {/* Metin Kutusu Konteyneri */}
          <div className="w-full max-w-2xl bg-[#0a0a0c]/80 backdrop-blur-md border border-white/5 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 focus-within:border-[#8338EC]/40 focus-within:shadow-[0_0_40px_rgba(131,56,236,0.1)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2283C4] via-[#8338EC] to-[#D52F2F] opacity-80"></div>
            
            <textarea
              rows={5}
              className="w-full bg-transparent text-gray-200 placeholder-gray-600 text-lg p-6 focus:outline-none resize-none leading-relaxed"
              placeholder="Evrenini anlatmaya başla..."
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
                {loading ? <span className="animate-pulse">Yaratılıyor...</span> : "Evreni Yarat"}
              </button>
            </div>
          </div>
        </div>

        {/* Aşağı Kaydır Oku */}
        <div className="absolute bottom-10 animate-bounce text-gray-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* 2. BÖLÜM: BİLGİLENDİRİCİ ÖZELLİKLER (HOW IT WORKS) */}
      <section className="relative z-10 w-full max-w-6xl mx-auto py-32 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sistem Nasıl Çalışır?</h2>
          <p className="text-gray-400 text-lg">Karmaşık wiki kodlarıyla uğraşma, sadece hayal et.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kart 1 */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#D52F2F]/30 transition-colors">
            <div className="w-14 h-14 bg-[#D52F2F]/20 rounded-xl flex items-center justify-center mb-6 text-[#D52F2F] font-black text-2xl">1</div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Taslağını Yaz</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Kafandaki konsepti kısaca özetle. <br/><br/>
              <span className="text-gray-500 italic">"Örn: Tek kolu olan ve tek tarafı keskin kılıcıyla denizlere hükmeden bir korsan..."</span>
            </p>
          </div>

          {/* Kart 2 */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#8338EC]/30 transition-colors">
            <div className="w-14 h-14 bg-[#8338EC]/20 rounded-xl flex items-center justify-center mb-6 text-[#8338EC] font-black text-2xl">2</div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Yapay Zeka İşlesin</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              eXPLore algoritmaları yazdığın taslağı analiz eder; karakterler arası bağları, güç sistemlerini ve lore detaylarını otomatik olarak genişletir.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="bg-[#0a0a0c]/60 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:border-[#2283C4]/30 transition-colors">
            <div className="w-14 h-14 bg-[#2283C4]/20 rounded-xl flex items-center justify-center mb-6 text-[#2283C4] font-black text-2xl">3</div>
            <h3 className="text-xl font-bold mb-3 text-gray-100">Wiki Hazır</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Görselleri, sayfa hiyerarşisi ve iç linklemeleri yapılmış profesyonel bir Fandom sayfası saniyeler içinde önünde belirir.
            </p>
          </div>

        </div>
      </section>

      {/* 3. BÖLÜM: FOOTER (ALT BİLGİ) */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#070709] pt-16 pb-8 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          
          {/* Sütun 1 */}
          <div className="space-y-4">
            <h4 className="text-gray-100 font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Özellikler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Fiyatlandırma</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Blog & Haberler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">API Dokümantasyonu</a></li>
            </ul>
          </div>

          {/* Sütun 2 */}
          <div className="space-y-4">
            <h4 className="text-gray-100 font-bold mb-6">Araçlar (Ücretsiz)</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Karakter Yaratıcı</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">İsim Jeneratörü</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Güç / Yetenek Sistemi</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Tüm Araçları Gör</a></li>
            </ul>
          </div>

          {/* Sütun 3 */}
          <div className="space-y-4">
            <h4 className="text-gray-100 font-bold mb-6">Şirket</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">İletişim</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Kullanım Şartları</a></li>
            </ul>
          </div>

          {/* Sütun 4 */}
          <div className="space-y-4">
            <h4 className="text-gray-100 font-bold mb-6">Topluluk & Yardım</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Discord Sunucusu</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Rehberler</a></li>
              <li><a href="#" className="hover:text-[#8338EC] transition-colors">Hata Bildir</a></li>
            </ul>
          </div>

        </div>

        {/* Telif Hakkı */}
        <div className="max-w-6xl mx-auto border-t border-white/5 pt-8 text-center text-gray-500 text-xs">
          <p>© 2026 eXPLORE. Tüm hakları saklıdır.</p>
        </div>
      </footer>

    </main>
  );
}
