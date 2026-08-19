"use client";

import { useState } from "react";
import Link from "next/link";

export default function FandomPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Tabloda gösterilecek başlangıç (örnek) verileri
  const [loreItems, setLoreItems] = useState([
    {
      id: 1,
      name: "Gölge Kılıcı",
      category: "Eşya",
      description: "Karanlık enerjiyi emen, efsanevi bir antik silah.",
      date: "2026-08-19",
    },
    {
      id: 2,
      name: "Eldoria",
      category: "Mekan",
      description: "Gökyüzünde süzülen, büyücülerin yaşadığı kayıp şehir.",
      date: "2026-08-18",
    }
  ]);

  // Yapay zeka üretim simülasyonu
  const handleAIGenerate = (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);

    // Gerçek bir AI (OpenAI vb.) bağlayana kadar 2 saniyelik simülasyon
    setTimeout(() => {
      const newItem = {
        id: Date.now(),
        name: "Yapay Zeka Karakteri",
        category: "Karakter",
        description: `"${prompt}" fikrinden yola çıkılarak AI tarafından oluşturulan gizemli bir gezgin.`,
        date: new Date().toISOString().split('T')[0],
      };
      
      setLoreItems([newItem, ...loreItems]);
      setIsGenerating(false);
      setPrompt("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-8">
      {/* Üst Menü / Başlık */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Evren & Fandom</h1>
          <p className="text-gray-500 mt-1">Loremaker ile evrenini inşa et ve yönet.</p>
        </div>
        <Link href="/" className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md transition">
          Geri Dön
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sol Sütun: Yapay Zeka Eklentisi */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="text-2xl mr-2">✨</span> AI Evren Yaratıcısı
            </h2>
            <form onSubmit={handleAIGenerate}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yapay zekaya ne yaratmasını istediğini söyle:
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Örn: Ateş püskürten ama sudan korkan bir ejderha ırkı yarat..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none h-32 mb-4"
                disabled={isGenerating}
              />
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
                  isGenerating ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isGenerating ? "Evren İşleniyor..." : "Yapay Zeka ile Üret"}
              </button>
            </form>
          </div>
        </div>

        {/* Sağ Sütun: Fandom Tablosu */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Fandom Veritabanı</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {loreItems.length} Kayıt
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3">İsim</th>
                    <th scope="col" className="px-6 py-3">Kategori</th>
                    <th scope="col" className="px-6 py-3">Açıklama</th>
                    <th scope="col" className="px-6 py-3">Tarih</th>
                  </tr>
                </thead>
                <tbody>
                  {loreItems.map((item) => (
                    <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {item.name}
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded border border-gray-200">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate" title={item.description}>
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {loreItems.length === 0 && (
              <div className="p-8 text-center text-gray-500">
                Henüz evreninizde bir kayıt yok. Sol taraftan yapay zeka ile üretmeye başlayın!
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}