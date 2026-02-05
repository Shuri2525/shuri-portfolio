/* ================================
   WORKS データ（カテゴリ別）
================================ */
const WORKS_DATA = {
  web: [
   {
  "id": "01",
  "title": "PORTFOLIO SITE",
  "tag": "ポートフォリオ / 個人制作",
  "thumb": "./assets/works/web/01/hero.jpg",
  "modalThumb": "./assets/works/web/01/thumb.jpg",
  "detailImg": "./assets/works/web/01/detail.jpg",
  "outline": "自身のスキルや制作姿勢を伝えるために、設計から実装まで一貫して制作したポートフォリオサイトです。",
  "target": "企業担当者・採用担当者",
  "period": "約3ヶ月",
  "purpose": "スキルや制作姿勢を、構成と実装の両面から伝えるため",
  "detailText": "情報の優先順位を整理し、閲覧者が迷わない構成を設計。視線誘導や余白設計を意識し、作品が見やすく比較できるレイアウトにしています。UIの再現性も意識してコーディングを行いました。。"
}
,
    {
  "id": "02",
  "title": "ビジネスホテルHP",
  "tag": "TOPページ / コンペ制作",
  "thumb": "./assets/works/web/02/hero.jpg",
  "modalThumb": "./assets/works/web/02/thumb.jpg",
  "detailImg": "./assets/works/web/02/detail.jpg",
  "outline": "沖縄・那覇のビジネスホテルTOPページデザインをコンペにて制作しました。",
  "target": "40代男性を中心とした、ビジネス・ファミリー・団体利用者",
  "period": "3日",
  "purpose": "宿泊予約までの導線を分かりやすく設計し、新たな利用層への訴求を強化するため",
  "detailText": "宿泊予約までの導線設計を重視し、ユーザーが目的の情報に短時間で辿り着ける構成を設計。情報の優先順位を整理し、視認性と信頼感を意識した配色・余白設計を行いました。"
}
,
    {
  "id": "03",
  "title": "ヘッドスパLP",
  "tag": "TOPページ / コンペ制作",
  "thumb": "./assets/works/web/03/hero.jpg",
  "modalThumb": "./assets/works/web/03/thumb.jpg",
  "detailImg": "./assets/works/web/03/detail.jpg",
  "outline": "海外在住女性向けのヘッドスパ専門店LPをコンペにて制作しました。日本らしい癒しの空気感が伝わるビジュアルを意識しました。",
  "target": "30代後半〜40代後半の女性（海外在住）",
  "period": "3日",
  "purpose": "日本の癒し文化を伝え、予約につなげるため",
  "detailText": "情報量を整理し、サービス内容が直感的に理解できる構成に。予約までの流れを意識し、安心感を与えるトーン設計と視認性を重視しました。"
}
,

/*
{
  id: "04",
  title: "老舗焼肉店サイト",
  tag: "TOPページ / コンペ制作",
  thumb: "./assets/works/web/04/hero.jpg",
  modalThumb: "./assets/works/web/04/thumb.jpg",
  detailImg: "./assets/works/web/04/detail.png",
  outline: "飲食店のコーポレートサイトリニューアルを想定し、TOPページを制作しました。",
  target: "来店を検討する幅広い年齢層のユーザー",
  period: "5日",
  purpose: "高級感と親しみやすさを両立したブランディングのため",
  detailText: "神戸牛専門店のリニューアル案件を想定し、高級感がありながらも来店しやすい印象を与えるトーン設計を意識しました。昼夜それぞれの利用シーンを想定し、情報の優先度と視線の流れを整理しています。"
},
*/

{
  "id": "05",
  "title": "整形外科医院サイト",
  "tag": "TOPページ / コンペ制作",
  "thumb": "./assets/works/web/05/hero.jpg",
  "modalThumb": "./assets/works/web/05/thumb.jpg",
  "detailImg": "./assets/works/web/05/detail.jpg",
  "outline": "整形外科医院のTOPページリニューアル案をコンペにて制作しました。安心感の中に、少しの先進性を感じられるデザインを目指しました。",
  "target": "通院を検討する幅広い年齢層のユーザー",
  "period": "3日",
  "purpose": "既存イメージを刷新し、信頼感と先進性を伝えるため",
  "detailText": "医療サイトとしての信頼性を重視し、清潔感のある配色と整理された情報設計を採用。幅広い年代が利用することを想定し、直感的に操作できるUIを意識しました。"
}
,
{
  "id": "06",
  "title": "団体ポータルサイト",
  "tag": "TOPページ / コンペ制作",
  "thumb": "./assets/works/web/06/hero.jpg",
  "modalThumb": "./assets/works/web/06/thumb.jpg",
  "detailImg": "./assets/works/web/06/detail.jpg",
  "outline": "消防団の活動を紹介するポータルサイトをコンペにて制作しました。親しみやすさと信頼感のバランスを意識しました。",
  "target": "県内在住の幅広い年齢層の男女",
  "period": "5日",
  "purpose": "消防団の活動内容を分かりやすく伝えるため",
  "detailText": "情報量が多くなりやすい構成のため、カテゴリ整理と視線誘導を意識。幅広い世代が利用することを想定し、分かりやすいナビゲーション設計を行いました。"
}

  ],

  dtp: [
    {
  "id": "01",
  "title": "名刺デザイン",
  "tag": "名刺 / 個人制作",
  "thumb": "./assets/works/dtp/01/hero.jpg",
  "modalThumb": "./assets/works/dtp/01/thumb.webp",
  "detailImg": "./assets/works/dtp/01/detail.webp",
  "outline": "自自身のブランディングを目的に制作した名刺デザインです。情報整理と視認性を重視して設計しました。",
  "target": "取引先・クライアント",
  "period": "1日",
  "purpose": "第一印象をより良くし、信頼感を与えるため",
  "detailText": "タイポグラフィと余白設計に配慮し、必要な情報が一目で伝わる構成に。入稿データとしての再現性や可読性も意識して制作しています。"
}
,
  {
  "id": "02",
  "title": "リーフレットデザイン",
  "tag": "チラシ / 実案件",
  "thumb": "./assets/works/dtp/02/hero.jpg",
  "modalThumb": "./assets/works/dtp/02/thumb.webp",
  "detailImg": "./assets/works/dtp/02/detail.jpg",
  "outline": "外壁塗装サービスの営業用三つ折りリーフレットの実案件制作です。",
  "target": "戸建住宅を検討する施主・住民",
  "period": "2日",
  "purpose": "営業担当者が対面で説明する際に使いやすく、視覚的に信頼感を与えるため",
  "detailText": "対面営業での使用を想定し、説明の流れに沿った情報設計を行いました。専門的な内容でも理解しやすいよう情報を整理し、視認性と信頼感を意識した配色で構成しています。印刷入稿データまで対応しています。"
}
,
    {
  "id": "03",
  "title": "戸建て販売チラシ",
  "tag": "チラシ / 実案件",
  "thumb": "./assets/works/dtp/03/hero.jpg",
  "modalThumb": "./assets/works/dtp/03/thumb.webp",
  "detailImg": "./assets/works/dtp/03/detail.jpg",
  "outline": "新新築分譲住宅の販売促進用チラシの実務制作です。",
  "target": "住宅購入を検討するファミリー層・地域住民",
  "period": "3日",
  "purpose": "毎月の新着物件に対応できる、更新性と大量展開に優れた販促ツールの作成",
  "detailText": "物件情報の更新頻度が高い運用を想定し、レイアウトの再利用性を重視して設計。情報の優先順位を整理し、短時間で内容が把握できる紙面構成にしています。"
}

  ],

  graphic: [
  {
  "id": "01",
  "title": "ロゴデザイン",
  "tag": "ロゴ / コンペ",
  "thumb": "./assets/works/graphic/01/hero.webp",
  "modalThumb": "./assets/works/graphic/01/thumb.webp",
  /*"detailImg": "./assets/works/graphic/01/detail.jpg",*/
  "outline": "美容室のブランディングを目的としたロゴデザインを、コンペ提出用に制作しました。40代の女性をターゲットに、落ち着きと品のある印象を意識しています。",
  "target": "美容室（40代女性中心）",
  "period": "2日",
  "purpose": "ブランドイメージ構築と店舗の印象強化",
  "detailText": "「まっすぐに続く美しさ」をテーマに、縦ラインと余白を活かした静けさのあるレイアウトを採用。縦組みの文字配置は上品で視認性が高く、シンプルながら記憶に残る印象を与えるよう設計しました。\n\nフォントの丸みやアーチ状の処理によって、髪のしなやかさや居心地の良さを視覚的に表現。視線誘導とブランド性の両立を目指したロゴ提案です。"
}
,
   {
  "id": "02",
  "title": "ロゴデザイン",
  "tag": "ロゴ / コンペ",
  "thumb": "./assets/works/graphic/02/hero.webp",
  "modalThumb": "./assets/works/graphic/02/thumb.webp",
  /*"detailImg": "./assets/works/graphic/02/detail.webp",*/
  "outline": "食品会社のブランドロゴとしてコンペに提出したデザインです。人と人とのつながりを“結ぶ”というテーマに落とし込みました。",
  "target": "食品メーカー・生活者",
  "period": "1日",
  "purpose": "ブランドの価値観（つながり・誠実さ・温かさ）を象徴するロゴを提案するため",
  "detailText": "箸袋を結んだ動きをモチーフに、“むすぶ”という行為を抽象化し、ロゴ全体で温かい人間関係やご縁を表現しました。\n\n背景の3本線は水引をイメージし、「心を結ぶ」「縁をつなぐ」という想いを込めています。配色は深みのある赤と金で、品格・誠実さ・ぬくもりを表現。結び目の形がMのシルエットを形成し、ブランド名との一体感を持たせたデザインです。"
}

  ]
};

/* ================================
   WORKS リスト制御
================================ */
document.addEventListener("DOMContentLoaded", () => {

  const worksList = document.querySelector("#worksList");
  const catButtons = document.querySelectorAll(".cat-btn");

  if (!worksList) {
    console.error("❌ #worksList が見つかりません");
    return;
  }

  // 作品一覧を描画
  function renderWorks(category) {
    worksList.innerHTML = "";

    const data = WORKS_DATA[category];
    if (!data) {
      console.error("❌ カテゴリが見つかりません:", category);
      return;
    }

    data.forEach(work => {
      const [tagEn, tagJa] = work.tag.split("/").map(t => t?.trim());

      worksList.insertAdjacentHTML("beforeend", `
        <div class="work-item" data-id="${work.id}" data-category="${category}">
          <img src="${work.thumb}" alt="${work.title}" class="work-thumb">
          <p class="work-title">${work.title}</p>
          <p class="work-label">
            <span class="tag-en"># ${tagEn}</span>
            ${tagJa ? `<span class="tag-ja"> / ${tagJa}</span>` : ""}
          </p>
        </div>
      `);
    });

    bindModalEvents();
  }

  // モーダルイベントを設定
  function bindModalEvents() {
    document.querySelectorAll(".work-item").forEach(item => {
      item.addEventListener("click", () => {
        const category = item.dataset.category;
        const id = item.dataset.id;
        const work = WORKS_DATA[category]?.find(w => w.id === id);

        if (!work) {
          console.error("❌ 作品が見つかりません", category, id);
          return;
        }

        if (typeof window.openModal !== "function") {
          console.error("❌ openModal が定義されていません");
          return;
        }

        window.openModal({ ...work, category });
      });
    });
  }

  // 初期表示（WEB）
  renderWorks("web");
  document.querySelector(".btn-web")?.classList.add("active");

  // カテゴリボタンのイベント
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (btn.classList.contains("btn-web")) renderWorks("web");
      if (btn.classList.contains("btn-dtp")) renderWorks("dtp");
      if (btn.classList.contains("btn-graphic")) renderWorks("graphic");
    });
  });

});
