import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coursendo ile Öğrenmeyi Yeniden Tanımla!",
  description:
    "Coursendo, eğitimde çığır açan bir çevrimiçi öğrenme platformudur. Geniş kurs seçenekleri, uzman eğitmenler ve esnek öğrenme imkanları ile öğrencilere yeni bir eğitim deneyimi sunar. Coursendo, bireylere ilgi alanlarına uygun özelleştirilmiş öğrenme fırsatları sunarak kendilerini geliştirmelerini sağlar. Eğitimde fark yaratmak isteyen herkes için Coursendo, öğrenmeyi daha erişilebilir ve zevkli hale getirir.",
  keywords: [
    "Web Geliştirme",
    "Web Tasarımı",
    "Frontend Geliştirme",
    "UI/UX Tasarım",
    "Kreatif Web Projeleri",
    "Dijital Deneyimler",
    "Kodlama ve Tasarım",
    "Kullanıcı Merkezli Tasarım",
    "Mobil Uyumlu Web Siteleri",
    "SEO Optimizasyonu",
    "Modern Web Geliştirme",
    "İnteraktif Web Çözümleri",
    "Görsel Estetik",
  ],
  creator: "Muhammet Enes Şahin",
  authors: [
    { name: "Muhammet Enes" },
    { name: "Şahin", url: "https://enessahin.dev" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
