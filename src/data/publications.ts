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
  }
];