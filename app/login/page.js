"use client";
import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter(); // Yönlendirme için eklendi
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
  // Koyu/Açık Mod için durum (state) kontrolü
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage({ text: "Giriş başarısız: Bilgilerini kontrol et.", type: "error" });
    } else {
      setMessage({ text: "Giriş başarılı! Yönlendiriliyorsunuz...", type: "success" });
      
      // BAŞARILI GİRİŞTEN SONRA YÖNLENDİRME (1.5 saniye bekleyip ana sayfaya atar)
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
    
    setLoading(false);
  };

  return (
    <main className={`min-h-screen flex items-center justify-center relative overflow-hidden font-sans p-6 transition-colors duration-500 ${isDarkMode ? 'bg-[#000000] text-white' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* Arka Plan Efektleri */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#007AFF] rounded-full filter blur-[150px] animate-[pulse_6s_ease-in-out_infinite] ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#FF3B30] rounded-full filter blur-[150px] animate-[pulse_6s_ease-in-out_infinite_reverse] ${isDarkMode ? 'opacity-20' : 'opacity-10'}`}></div>
        <div className={`absolute w-[60vw] h-[60vw] bg-[#AF52DE] rounded-full filter blur-[200px] ${isDarkMode ? 'opacity-[0.15]' : 'opacity-5'}`}></div>
      </div>

      {/* ÜST BAR: Geri Dön ve Tema Seçici */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <Link href="/" className={`flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Ana Sayfaya Dön
        </Link>
        
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-2.5 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-black/5 hover:bg-black/10 text-black'}`}
          title="Temayı Değiştir"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg> // Güneş İkonu
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg> // Ay İkonu
          )}
        </button>
      </div>

      {/* Giriş Formu Kartı */}
      <div className={`relative z-10 w-full max-w-md backdrop-blur-2xl border p-10 rounded-3xl transition-colors duration-500 ${isDarkMode ? 'bg-[#1C1C1E]/60 border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.4)]' : 'bg-white/70 border-black/10 shadow-[0_8px_30px_rgb(0,0,0,0.05)]'}`}>
        
        <div className="text-center mb-8">
          <Link href="/" className="font-black italic text-4xl tracking-tighter inline-block mb-2">
            <span>exp</span>
            <span className="bg-gradient-to-r from-[#FF3B30] via-[#AF52DE] to-[#007AFF] text-transparent bg-clip-text">LORE</span>
          </Link>
          <p className={`font-medium text-sm ${isDarkMode ? 'text-[#A1A1A6]' : 'text-gray-500'}`}>Kaldığın yerden devam et.</p>
        </div>

        {message.text && (
          <div className={`p-4 mb-6 rounded-xl text-sm font-semibold text-center border ${
            message.type === "error" ? "bg-red-500/10 border-red-500/30 text-red-500" : "bg-green-500/10 border-green-500/30 text-green-600"
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className={`text-sm font-bold ml-1 ${isDarkMode ? 'text-[#A1A1A6]' : 'text-gray-600'}`}>E-Posta</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#AF52DE]/50 transition-all ${
                isDarkMode 
                  ? 'bg-[#2C2C2E]/50 border-white/10 text-white focus:bg-[#2C2C2E]' 
                  : 'bg-gray-100/50 border-black/10 text-black focus:bg-white'
              }`}
              placeholder=""
            />
          </div>

          <div className="space-y-2">
            <label className={`text-sm font-bold ml-1 ${isDarkMode ? 'text-[#A1A1A6]' : 'text-gray-600'}`}>Şifre</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:border-[#AF52DE]/50 transition-all ${
                isDarkMode 
                  ? 'bg-[#2C2C2E]/50 border-white/10 text-white focus:bg-[#2C2C2E]' 
                  : 'bg-gray-100/50 border-black/10 text-black focus:bg-white'
              }`}
              placeholder=""
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
              loading
                ? 'bg-gradient-to-r from-[#FF3B30] via-[#AF52DE] to-[#007AFF] text-white opacity-80 cursor-not-allowed'
                : isDarkMode 
                  ? 'bg-white text-black hover:bg-[#AF52DE] hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(175,82,222,0.5)]'
                  : 'bg-black text-white hover:bg-[#AF52DE] shadow-lg'
            }`}
          >
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        {/* MİSAFİR GİRİŞİ AYIRICI ÇİZGİ */}
        <div className="relative flex items-center py-5">
          <div className={`flex-grow border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}></div>
          <span className={`flex-shrink-0 mx-4 text-xs font-bold ${isDarkMode ? 'text-[#A1A1A6]' : 'text-gray-400'}`}>VEYA</span>
          <div className={`flex-grow border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}></div>
        </div>

        {/* MİSAFİR OLARAK DEVAM ET BUTONU */}
        <Link href="/" className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${
          isDarkMode
            ? 'bg-transparent border-white/20 text-white hover:bg-white/10'
            : 'bg-transparent border-black/20 text-black hover:bg-black/5'
        }`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          Misafir Olarak Devam Et
        </Link>

        <div className={`mt-8 text-center text-sm font-medium ${isDarkMode ? 'text-[#A1A1A6]' : 'text-gray-500'}`}>
          Henüz bir evrenin yok mu?{" "}
          <Link href="/register" className={`transition-colors font-bold ${isDarkMode ? 'text-white hover:text-[#AF52DE]' : 'text-black hover:text-[#AF52DE]'}`}>
            Kayıt Ol
          </Link>
        </div>

      </div>
    </main>
  );
}