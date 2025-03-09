"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { wordSets } from "../data";

function GameContent() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  const [answer, setAnswer] = useState("");
  const [timer, setTimer] = useState(10);
  const [startTime, setStartTime] = useState(Date.now());

  const [currentSet, setCurrentSet] = useState<number>(0);
  const wordSetsForDifficulty = wordSets[difficulty || "basic"];
  const wordSet = wordSetsForDifficulty[currentSet];
  const words: string[] = wordSet.words;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev - 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStartTime(Date.now());
    setTimer(10);
  }, [currentSet]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elapsedTime = (Date.now() - startTime) / 1000;
    window.location.href = `/result?answer=${encodeURIComponent(answer)}&correct=${encodeURIComponent(wordSet.correctAnswer)}&time=${elapsedTime.toFixed(1)}`;
  };

  const handleNext = () => {
    const nextSet = Math.floor(Math.random() * wordSetsForDifficulty.length);
    setCurrentSet(nextSet);
    setAnswer("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">以下に共通することは？</h1>
      <div className="mb-4">
        <p className="text-lg">モード: {difficulty === "basic" ? "例題" : "実践"}</p>
        <div className="text-center mt-2">
          <p className={`text-2xl font-bold ${timer <= 0 ? 'text-red-500' : ''}`}>
            {timer > 0 ? `残り時間: ${timer.toFixed(1)}秒` : `タイムオーバー: ${timer.toFixed(1)}秒`}
          </p>
        </div>
        <div className="flex gap-4 mt-4">
          {words.map((word, i) => (
            <span key={i} className="!bg-white bg-opacity-100 px-4 py-2 rounded text-gray-900">
              {word}
            </span>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="共通点を入力"
          className="w-full px-4 py-2 border rounded"
          required
        />
        <div className="flex gap-4 w-full mt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-500 text-white px-6 py-3 rounded"
          >
            回答する
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 bg-gray-500 text-white px-6 py-3 rounded"
          >
            次の問題
          </button>
        </div>
      </form>
    </main>
  );
}

export default function GamePage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen flex-col items-center p-24">読み込み中...</div>}>
      <GameContent />
    </Suspense>
  );
}
