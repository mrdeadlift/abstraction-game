export type WordSet = {
  words: string[];
  correctAnswer: string;
};

export const wordSets: Record<string, WordSet[]> = {
  basic: [
    { words: ["リンゴ", "バナナ", "オレンジ"], correctAnswer: "果物" },
    { words: ["トマト", "キュウリ", "ナス"], correctAnswer: "野菜" },
    { words: ["犬", "猫", "ウサギ"], correctAnswer: "ペット" },
    { words: ["机", "椅子", "本棚"], correctAnswer: "家具" },
    { words: ["鉛筆", "消しゴム", "ノート"], correctAnswer: "文房具" },
    { words: ["テレビ", "冷蔵庫", "洗濯機"], correctAnswer: "家電" },
    { words: ["バス", "電車", "タクシー"], correctAnswer: "公共交通機関" },
    { words: ["サッカー", "野球", "バスケットボール"], correctAnswer: "球技" },
    { words: ["ピアノ", "ギター", "ドラム"], correctAnswer: "楽器" },
    { words: ["コーヒー", "紅茶", "ジュース"], correctAnswer: "飲み物" },
    { words: ["飛行機", "新幹線", "自動車"], correctAnswer: "乗り物" },
    { words: ["東京", "大阪", "名古屋"], correctAnswer: "大都市" },
    { words: ["春", "夏", "秋"], correctAnswer: "季節" },
    { words: ["太陽", "月", "星"], correctAnswer: "天体" },
    { words: ["川", "海", "湖"], correctAnswer: "水域" },
    { words: ["新聞", "雑誌", "本"], correctAnswer: "出版物" },
    { words: ["医者", "看護師", "薬剤師"], correctAnswer: "医療従事者" },
    { words: ["警察", "消防", "救急"], correctAnswer: "緊急サービス" },
    { words: ["銀行", "証券", "保険"], correctAnswer: "金融機関" },
    { words: ["映画", "ドラマ", "アニメ"], correctAnswer: "映像作品" },
    { words: ["愛", "希望", "勇気"], correctAnswer: "抽象的概念" },
    { words: ["友情", "信頼", "尊敬"], correctAnswer: "人間関係" },
    { words: ["幸福", "喜び", "満足"], correctAnswer: "ポジティブ感情" },
    { words: ["悲しみ", "怒り", "不安"], correctAnswer: "ネガティブ感情" },
    { words: ["美", "調和", "バランス"], correctAnswer: "美的概念" },
    { words: ["真実", "事実", "現実"], correctAnswer: "真理" },
    { words: ["夢", "目標", "願望"], correctAnswer: "未来志向" },
    { words: ["記憶", "経験", "知識"], correctAnswer: "過去の蓄積" },
    { words: ["自由", "平等", "正義"], correctAnswer: "社会的価値" },
    { words: ["時間", "空間", "因果"], correctAnswer: "哲学的概念" }
  ],
  practical: [
    { words: ["目覚まし時計", "懐中電灯", "旅行代理店", "カメラ", "お金", "地図"], correctAnswer: "スマホアプリになったもの" },
    { words: ["タクシー", "土産物屋", "観光案内所"], correctAnswer: "一見さんが多数のサービス" },
    { words: ["デジカメ", "テレビのリモコン", "電子レンジ", "洗濯機", "エアコン"], correctAnswer: "増えたボタンのわりによく使うのは一部だけ" },
    { words: ["電話", "手紙", "FAX", "メール"], correctAnswer: "コミュニケーションツールの進化" },
    { words: ["現金", "クレジットカード", "電子マネー", "QRコード決済"], correctAnswer: "支払い方法の変化" },
    { words: ["本", "新聞", "雑誌", "電子書籍"], correctAnswer: "情報媒体の変化" },
    { words: ["CD", "DVD", "ブルーレイ", "ストリーミング"], correctAnswer: "メディアの進化" },
    { words: ["固定電話", "携帯電話", "スマートフォン", "タブレット"], correctAnswer: "通信デバイスの進化" },
    { words: ["手帳", "カレンダー", "メモ帳", "ToDoリスト"], correctAnswer: "スケジュール管理ツール" },
    { words: ["電卓", "地図", "辞書", "翻訳機"], correctAnswer: "スマートフォンのデフォルトアプリ" }
  ]
};
