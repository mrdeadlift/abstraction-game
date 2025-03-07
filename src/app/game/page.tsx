"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { wordSets } from "../data";

export default function GamePage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");
  const [answer, setAnswer] = useState("");

  const wordSet = wordSets[difficulty || "easy"];
  const words: string[] = wordSet.words;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/result?answer=${encodeURIComponent(answer)}&correct=${encodeURIComponent(wordSet.correctAnswer)}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">ゲーム画面</h1>
      <div className="mb-8">
        <p className="text-lg">難易度: {difficulty}</p>
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
        <button
          type="submit"
          className="w-full mt-4 bg-blue-500 text-white px-6 py-3 rounded"
        >
          回答する
        </button>
      </form>
    </main>
  );
}
