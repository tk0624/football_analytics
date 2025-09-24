import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl mb-4">Samurai Metrics</h1>
      <p className="mb-4">海外で活躍する日本人サッカー選手のデータ分析記事を公開。</p>
      <Link href="./article_250922_mitoma" className="underline text-blue-400">
        👉 記事を読む
      </Link>
    </main>
  );
}