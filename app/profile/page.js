"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Profil form state'leri
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    async function loadProfile() {
      // 1. Kullanıcı giriş yapmış mı kontrol et
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/login"); // Giriş yapmadıysa logine at
        return;
      }
      
      setUser(session.user);

      // 2. Kullanıcının profil bilgilerini veritabanından çek
      const { data, error } = await supabase
        .from("profiles")
        .select("username, avatar_url")
        .eq("id", session.user.id)
        .single();

      if (data) {
        setUsername(data.username || "");
        setAvatarUrl(data.avatar_url || "");
      }
      setLoading(false);
    }
    loadProfile();
  }, [router]);

  const updateProfile = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: "", type: "" });

    const { error } = await supabase
      .from("profiles")
      .update({ username: username, avatar_url: avatarUrl })
      .eq("id", user.id);

    if (error) {
      setMessage({ text: "Güncelleme başarısız oldu.", type: "error" });
    } else {
      setMessage({ text: "Profilin başarıyla güncellendi!", type: "success" });
    }
    setSaving(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Yükleniyor...</div>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#000000] text-white relative p-6">
      <div className="absolute top-0 left-0 w-full p-6 z-50">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold hover:opacity-70 transition-opacity">
          &larr; Ana Sayfaya Dön
        </Link>
      </div>

      <div className="w-full max-w-md bg-[#1C1C1E]/80 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
        <div className="text-center mb-8">
          {/* Avatar Önizleme */}
          <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-tr from-[#AF52DE] to-[#007AFF] p-1">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover bg-black" />
            ) : (
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl font-bold">
                {username ? username.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <h1 className="text-2xl font-bold">Profil Ayarları</h1>
          <p className="text-[#A1A1A6] text-sm mt-1">{user.email}</p>
        </div>

        {message.text && (
          <div className={`p-4 mb-6 rounded-xl text-sm font-semibold text-center border ${message.type === "error" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={updateProfile} className="space-y-5">
          <div>
            <label className="text-sm font-bold text-[#A1A1A6] ml-1">Kullanıcı Adı (Nick)</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-[#2C2C2E]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#AF52DE]/50 mt-1"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-[#A1A1A6] ml-1">Profil Resmi URL'si (Link)</label>
            <input
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              className="w-full bg-[#2C2C2E]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#AF52DE]/50 mt-1"
              placeholder="https://resim-linki.com/avatar.jpg"
            />
          </div>

          <button
            type="submit"
            disabled={saving}
            className="w-full py-3.5 bg-white text-black hover:bg-[#AF52DE] hover:text-white rounded-xl font-bold transition-all"
          >
            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full py-3.5 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/20 rounded-xl font-bold transition-all"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
    </main>
  );
}