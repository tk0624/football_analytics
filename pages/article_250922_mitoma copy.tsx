import { useState } from "react";

export default function MitomaArticle() {
  const [lang, setLang] = useState<'ja' | 'en'>('ja');

  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="flex justify-end mb-6 space-x-2">
        <button onClick={() => setLang('ja')}>日本語</button>
        <button onClick={() => setLang('en')}>EN</button>
      </div>

      {lang === 'ja' ? (
        <>
          <h1 className="text-3xl font-bold mb-4">三笘薫選手 2024-25 シーズン総括</h1>
          <p>今季は出場時間 2,100分、ゴール 6、アシスト 5といった結果に加え、キャリー数やチャンスクリエイト数で欧州のトップアタッカーと比較しても遜色ない貢献を見せました。</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Kaoru Mitoma: 2024-25 Season Review</h1>
          <p>This season, Mitoma logged 2,100 minutes, scoring 6 goals and delivering 5 assists. His stats in carries and chance creation rival Europe's top attackers.</p>
        </>
      )}
    </main>
  );
}