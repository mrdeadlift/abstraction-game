"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ResultContent() {
  const searchParams = useSearchParams();
  const userAnswer = decodeURIComponent(searchParams.get("answer") || "");
  const correctAnswer = decodeURIComponent(searchParams.get("correct") || "");
  const time = searchParams.get("time") || "0";
  const timeValue = parseFloat(time);
  
  const getTimeDisplay = () => {
    if (timeValue <= 10) {
      return `${timeValue}秒`;
    } else {
      return `${timeValue}秒（制限時間を${(timeValue - 10).toFixed(1)}秒オーバー）`;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">結果画面</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">あなたの回答</h2>
          <p className="text-lg">{userAnswer}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">回答例</h2>
          <p className="text-lg">{correctAnswer}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">回答時間</h2>
          <p className={`text-lg ${timeValue > 10 ? 'text-red-500' : 'text-green-500'}`}>
            {getTimeDisplay()}
          </p>
        </div>
      </div>
      <Link href="/" className="mt-8 bg-blue-500 text-white px-6 py-3 rounded">
        タイトルに戻る
      </Link>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen flex-col items-center p-24">読み込み中...</div>}>
      <ResultContent />
    </Suspense>
  );
}
