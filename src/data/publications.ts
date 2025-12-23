// src/data/publications.ts
export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  category: 'People' | 'Teams' | 'Quotes' | 'Uncategorized';
  link: string;
  publishedAt: string;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: '"העובדים זוכרים הכל": ד"ר אלדד רום מסביר למה למנהלים אסור להיראות סחוטים בזום',
    excerpt: 'אלדד רום, המלווה ומייעץ לסטארט-אפים זה שני עשורים, מסביר מה זה "אומץ ניהולי" במשברים, וגם על הקורולציה בין פרודוקטיביות לבריאות',
    category: 'People',
    link: 'https://www.themarker.com/technation/podcasts/2020-05-14/ty-article/0000017f-e988-da9b-a1ff-edef1d030000',
    publishedAt: '2024-09-23'
  },
  {
    id: '2',
    title: 'אלפי חיילים יוצאים מעזה. כך כדאי לקבל אותם בחזרה לעבודה',
    excerpt: 'מספר חיילי המילואים שמשתחררים הולך וגדל, ואיתו האתגרים הכרוכים בחזרה אחרי תקופה ממושכת למקום העבודה',
    category: 'Teams',
    link: 'https://www.globes.co.il/news/article.aspx?did=1001466643',
    publishedAt: '2024-08-15'
  },
  {
    id: '3',
    title: 'הפסיכולוג שמלווה חברות הייטק מסביר איך לנהל בזמן מלחמה',
    excerpt: 'ד"ר אלדד רום מלווה חברות הייטק שחלק מעובדיהן נקראו לחזית, חוו אובדן או מתמודדים עם מצוקה נפשית',
    category: 'Teams',
    link: 'https://www.globes.co.il/news/article.aspx?did=1001460317',
    publishedAt: '2024-10-12'
  },
   {
    id: '1',
    title: 'דילמות ניהוליות בזמן משבר - פודקאסט',
    excerpt: 'בפרק עסקנו בדילמות ניהוליות שעולות אצל לא מעט חברות בזמן משבר, כמו החלטות הקשורות בהתייעלות, שמירה על תקשורת רציפה ושמירה על engagement עם עובדי החברה',
    category: 'Teams',
    link: 'https://open.spotify.com/episode/6jrU5V6SsBHVa4rROlGWPP',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80',
    publishedAt: '2024-11-20'
  },
  {
    id: '2',
    title: 'פסיכולוגיה בזמן לחץ: מה קורה לנו בגוף ובראש?',
    excerpt: 'איך מתעלים את עצמנו ואת סביבתנו בזמנים דוחקים? ד"ר אלדד רום מסביר מה קורה לנו בגוף ובראש בזמני משבר',
    category: 'People',
    link: 'https://www.youtube.com/watch?v=-wk5XE-n7Zg',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    publishedAt: '2024-11-18'
  },
  {
    id: '3',
    title: '"בהייטק יודעים שהמתחרים לא מחכים": בענף מתמודדים עם הימשכות המלחמה',
    excerpt: 'שימוש בפרילנסרים, ראיונות עבודה באפטרים או בין מוצבים ואפילו עובדים שמחפשים לעצמם מחליפים – בהייטק נאלצים למצוא פתרונות יצירתיים למחסור בעובדים',
    category: 'Teams',
    link: 'https://www.themarker.com/technation/2023-12-12/ty-article/.premium/0000018c-59b6-d6bd-a1ad-7bf659e00000', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    publishedAt: '2024-11-15'
  },
  {
    id: '4',
    title: 'מנכ"ל חיצוני זה טוב לחברה?',
    excerpt: 'איריס בק, נדב שחר וחזי כאלו הם חלק מתופעה הולכת וגוברת של מינוי מנכ"לים חיצוניים לחברות. האם התקופה המשברית הנמצאת בפתח מגבירה את התופעה?',
    category: 'Teams',
    link: 'https://www.globes.co.il/news/article.aspx?did=1000396038', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    publishedAt: '2024-11-10'
  },
  {
    id: '5',
    title: 'עד שהפנסיה תפריד בינינו',
    excerpt: 'את המנכ"לים האלה לא תמצאו בבורסת שמות המועמדים לתפקידים שונים המתפנים במשק. הם חתמו קבע בלשכות שלהם. למה הם לא מגוונים ומחפשים ג\'וב חדש?',
    category: 'People',
    link: 'https://www.globes.co.il/news/article.aspx?did=1000536331', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    publishedAt: '2024-11-08'
  },
  {
    id: '6',
    title: '"כשהתפקיד מגדיר אותך – אתה בצרה"',
    excerpt: 'ד"ר אלדד רום, פסיכולוג ארגוני, טוען כי הקלישאה "משבר הוא הזדמנות", נכונה במיוחד במצב בו המנהל יורד מגדולתו. דווקא בתקופה קשה מתפנה אדם לבדוק את עצמו',
    category: 'People',
    link: 'https://www.shaya.org.il/%D7%9B%D7%A9%D7%94%D7%AA%D7%A4%D7%A7%D7%99%D7%93-%D7%9E%D7%92%D7%93%D7%99%D7%A8-%D7%90%D7%95%D7%AA%D7%9A-%D7%90%D7%AA%D7%94-%D7%91%D7%A6%D7%A8%D7%94-2/', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    publishedAt: '2024-11-05'
  },
  {
    id: '7',
    title: 'לא רק תוספת שכר: תמריצים יעילים לעובדים',
    excerpt: 'אתם חושבים שכסף הוא התמריץ הטוב ביותר כדי להפוך עובדים ליעילים ומרוצים יותר? אתם טועים. הדרכים המפתיעות שבאמת עובדות',
    category: 'Teams',
    link: 'https://www.calcalist.co.il/local/articles/0,7340,L-3572828,00.html', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
    publishedAt: '2024-11-01'
  },
  {
    id: '8',
    title: 'מה עובדים רוצים?',
    excerpt: 'שכר אינו הדרך היחידה לשמור על שביעות הרצון של העובדים. שני סקרים חדשים מגלים כי שיחות הערכה קבועות וחופשות מוסדרות חשובות לא פחות',
    category: 'Teams',
    link: 'https://www.calcalist.co.il/local/articles/0,7340,L-3572828,00.html', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    publishedAt: '2024-10-28'
  },
  {
    id: '9',
    title: 'שיחת משוב לא חייבת להתחיל באופן חיובי',
    excerpt: 'ד"ר אלדד רום מנפץ מיתוסים לגבי שיחת המשוב המרתיעה, ומציע כמה טיפים שיהפכו אותה לאפקטיבית יותר',
    category: 'Teams',
    link: 'https://www.haaretz.co.il/misc/2011-01-09/ty-article/0000017f-e76e-dea7-adff-f7ffdfa20000', // צריך להוסיף לינק
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    publishedAt: '2024-10-25'
  },
  {
    id: '10',
    title: 'איפה עדיף לעבוד – בחברה קטנה או גדולה?',
    excerpt: 'עבודה בחברה גדולה ומוכרת יכולה להיראות טוב בקורות החיים. עם זאת, אם אתם אנשים בעלי יוזמה, עצמאיים וחסרי סבלנות כנראה תעדיפו לעבוד בארגון קטן',
    category: 'People',
    link: 'https://www.calcalist.co.il/local/articles/0,7340,L-3701458,00.html',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    publishedAt: '2024-10-20'
  }
];