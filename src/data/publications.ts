// src/data/publications.ts

export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  category: 'From the Press' | 'Podcasts' | 'Research';
  link: string;
  image?: string;
  publishedAt: string;
}

export const publications: Publication[] = [
  // === PODCASTS ===
  {
    id: 'pub-guy-katzovitz',
    title: 'איך מתמודדים עם חרדה, לחץ ואי-ודאות? המדריך לחוסן מנטלי ליזם המתחיל',
    excerpt: 'ד"ר אלדד רום מתארח בפודקאסט של גיא קצוביץ ומשתף כיצד להכיר את עצמנו יותר טוב, לייצר חוסן מנטלי ולקבל החלטות בצורה טובה יותר בתקופות של אי-ודאות',
    category: 'Podcasts',
    link: 'https://podcasts.apple.com/il/podcast/%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94-%D7%91%D7%96%D7%9E%D7%9F-%D7%9C%D7%97%D7%A5-%D7%9E%D7%94-%D7%A7%D7%95%D7%A8%D7%94-%D7%9C%D7%A0%D7%95-%D7%91%D7%92%D7%95%D7%A3-%D7%95%D7%91%D7%A8%D7%90%D7%A9-%D7%95%D7%90%D7%99%D7%9A-%D7%9E%D7%AA%D7%A2%D7%9C%D7%99%D7%9D/id1252035397?i=1000637304253?i=1000509051000',
    publishedAt: '2021-02-01'
  },
  {
    id: 'pub-4',
    title: 'דילמות ניהוליות בזמן משבר',
    excerpt: 'בפרק עסקנו בדילמות ניהוליות שעולות אצל לא מעט חברות בזמן משבר, כמו החלטות הקשורות בהתייעלות, שמירה על תקשורת רציפה ושמירה על engagement עם עובדי החברה',
    category: 'Podcasts',
    link: 'https://open.spotify.com/episode/6jrU5V6SsBHVa4rROlGWPP',
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80',
    publishedAt: '2024-11-20'
  },
  {
    id: 'pub-5',
    title: 'פסיכולוגיה בזמן לחץ: מה קורה לנו בגוף ובראש',
    excerpt: 'איך מתעלים את עצמנו ואת סביבתנו בזמנים דוחקים? ד"ר אלדד רום מסביר מה קורה לנו בגוף ובראש בזמני משבר',
    category: 'Podcasts',
    link: 'https://podcasts.apple.com/il/podcast/%D7%A4%D7%A1%D7%99%D7%9B%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94-%D7%91%D7%96%D7%9E%D7%9F-%D7%9C%D7%97%D7%A5-%D7%9E%D7%94-%D7%A7%D7%95%D7%A8%D7%94-%D7%9C%D7%A0%D7%95-%D7%91%D7%92%D7%95%D7%A3-%D7%95%D7%91%D7%A8%D7%90%D7%A9-%D7%95%D7%90%D7%99%D7%9A-%D7%9E%D7%AA%D7%A2%D7%9C%D7%99%D7%9D/id1252035397?i=1000637304253',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    publishedAt: '2023-12-03'
  },
   {
    id: 'pub-startup',
    title: 'לנצח את הלופ - הפסיכולוגיה של הפאונדר.ית',
    excerpt: 'רוני הרניב מארחת את ד"ר אלדד רום, פסיכולוג ארגוני ושותף ב-Team8. למה קרן הון סיכון צריכה פסיכולוג? כי הנתונים מראים שבין 35% ל-65% מהסטארטאפים נכשלים בגלל בעיות בין המייסדים',
    category: 'Podcasts',
    link: 'https://open.spotify.com/episode/2ZmGsmLDNpEXAvggjA4Zya',
    publishedAt: '2025-11-11'
  },
  // === FROM THE PRESS ===
  {
    id: 'pub-geektime-od',
    title: 'גם בלי קורונה נתקלים יזמים במצבי חרדה, לחץ ואי ודאות',
    excerpt: 'ראיון מיוחד עם ד"ר אלדד רום על ליווי חברות סטארטאפ, פיתוח מנהלים ובניית צוותים בעולם ההייטק',
    category: 'From the Press',
    link: 'https://www.geektime.co.il/od-podcast-eldad-rom/',
    publishedAt: '2021-02-01'
  },
  {
    id: 'pub-2',
    title: 'אלפי חיילים יוצאים מעזה. כך כדאי לקבל אותם בחזרה לעבודה',
    excerpt: 'מספר חיילי המילואים שמשתחררים הולך וגדל, ואיתו האתגרים הכרוכים בחזרה אחרי תקופה ממושכת למקום העבודה',
    category: 'From the Press',
    link: 'https://www.globes.co.il/news/article.aspx?did=1001466643',
    publishedAt: '2024-08-15'
  },
  {
    id: 'pub-3',
    title: 'הפסיכולוג שמלווה חברות הייטק מסביר איך לנהל בזמן מלחמה',
    excerpt: 'ד"ר אלדד רום מלווה חברות הייטק שחלק מעובדיהן נקראו לחזית, חוו אובדן או מתמודדים עם מצוקה נפשית',
    category: 'From the Press',
    link: 'https://www.globes.co.il/news/article.aspx?did=1001460317',
    publishedAt: '2024-10-12'
  },
  {
    id: 'pub-6',
    title: 'בהייטק יודעים שהמתחרים לא מחכים: בענף מתמודדים עם הימשכות המלחמה',
    excerpt: 'שימוש בפרילנסרים, ראיונות עבודה באפטרים או בין מוצבים ואפילו עובדים שמחפשים לעצמם מחליפים – בהייטק נאלצים למצוא פתרונות יצירתיים למחסור בעובדים',
    category: 'From the Press',
    link: 'https://www.themarker.com/technation/2023-12-12/ty-article/.premium/0000018c-59b6-d6bd-a1ad-7bf659e00000',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    publishedAt: '2024-11-15'
  },
  {
    id: 'pub-7',
    title: 'מנכ"ל חיצוני זה טוב לחברה',
    excerpt: 'איריס בק, נדב שחר וחזי כאלו הם חלק מתופעה הולכת וגוברת של מינוי מנכ"לים חיצוניים לחברות. האם התקופה המשברית הנמצאת בפתח מגבירה את התופעה?',
    category: 'From the Press',
    link: 'https://www.globes.co.il/news/article.aspx?did=1000396038',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    publishedAt: '2024-11-10'
  },
  {
    id: 'pub-8',
    title: 'עד שהפנסיה תפריד בינינו',
    excerpt: 'את המנכ"לים האלה לא תמצאו בבורסת שמות המועמדים לתפקידים שונים המתפנים במשק. הם חתמו קבע בלשכות שלהם. למה הם לא מגוונים ומחפשים ג\'וב חדש?',
    category: 'From the Press',
    link: 'https://www.globes.co.il/news/article.aspx?did=1000536331',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
    publishedAt: '2024-11-08'
  },
  {
    id: 'pub-9',
    title: 'כשהתפקיד מגדיר אותך – אתה בצרה',
    excerpt: 'ד"ר אלדד רום, פסיכולוג ארגוני, טוען כי הקלישאה "משבר הוא הזדמנות", נכונה במיוחד במצב בו המנהל יורד מגדולתו. דווקא בתקופה קשה מתפנה אדם לבדוק את עצמו',
    category: 'From the Press',
    link: 'https://www.shaya.org.il/%D7%9B%D7%A9%D7%94%D7%AA%D7%A4%D7%A7%D7%99%D7%93-%D7%9E%D7%92%D7%93%D7%99%D7%A8-%D7%90%D7%95%D7%AA%D7%9A-%D7%90%D7%AA%D7%94-%D7%91%D7%A6%D7%A8%D7%94-2/',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    publishedAt: '2024-11-05'
  },
  {
    id: 'pub-10',
    title: 'לא רק תוספת שכר: תמריצים יעילים לעובדים',
    excerpt: 'אתם חושבים שכסף הוא התמריץ הטוב ביותר כדי להפוך עובדים ליעילים ומרוצים יותר? אתם טועים. הדרכים המפתיעות שבאמת עובדות',
    category: 'From the Press',
    link: 'https://www.calcalist.co.il/local/articles/0,7340,L-3572828,00.html',
    image: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80',
    publishedAt: '2024-11-01'
  },
  {
    id: 'pub-11',
    title: 'מה עובדים רוצים',
    excerpt: 'שכר אינו הדרך היחידה לשמור על שביעות הרצון של העובדים. שני סקרים חדשים מגלים כי שיחות הערכה קבועות וחופשות מוסדרות חשובות לא פחות',
    category: 'From the Press',
    link: 'https://finance.walla.co.il/item/1800149',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80',
    publishedAt: '2024-10-28'
  },
  {
    id: 'pub-12',
    title: 'שיחת משוב לא חייבת להתחיל באופן חיובי',
    excerpt: 'ד"ר אלדד רום מנפץ מיתוסים לגבי שיחת המשוב המרתיעה, ומציע כמה טיפים שיהפכו אותה לאפקטיבית יותר',
    category: 'From the Press',
    link: 'https://www.haaretz.co.il/misc/2011-01-09/ty-article/0000017f-e76e-dea7-adff-f7ffdfa20000',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    publishedAt: '2024-10-25'
  },
  {
    id: 'pub-13',
    title: 'איפה עדיף לעבוד – בחברה קטנה או גדולה',
    excerpt: 'עבודה בחברה גדולה ומוכרת יכולה להיראות טוב בקורות החיים. עם זאת, אם אתם אנשים בעלי יוזמה, עצמאיים וחסרי סבלנות כנראה תעדיפו לעבוד בארגון קטן',
    category: 'From the Press',
    link: 'https://www.calcalist.co.il/local/articles/0,7340,L-3701458,00.html',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    publishedAt: '2024-10-20'
  },
  // === RESEARCH (Academic Papers) ===
  {
    id: 'research-adult-attachment',
    title: 'The Role of Adult Attachment in Team Process and Team Effectiveness',
    excerpt: 'Research examining how adult attachment styles influence team dynamics, communication patterns, and overall team performance in organizational settings.',
    category: 'Research',
    link: '/papers/JPPRV1N1A3-Rom.pdf',
    publishedAt: '2013-01-01'
  },
  {
    id: 'research-1',
    title: 'Adult attachment and perceived parental style may shape leadership behaviors',
    excerpt: 'The purpose of this paper is to examine the role of both attachment and parental styles in shaping leadership behavioral patterns.',
    category: 'Research',
    link: '/papers/LODJ-06-2016-0155.pdf',
    publishedAt: '2016-01-01'
  },
  {
    id: 'research-2',
    title: 'Team Mental Models: Review, Analysis, and Integration',
    excerpt: 'This perspective examines ways by which team members develop mutual understanding and how team effectiveness improves through shared cognitive representations.',
    category: 'Research',
    link: '/papers/JPPRV4N1A4-Rom.pdf',
    publishedAt: '2015-01-01'
  },
  {
    id: 'research-3',
    title: 'Combat stress reactions during the 1948 war: a conspiracy of silence?',
    excerpt: 'This article is based on a series of interviews with 73 individuals who participated in the 1948 war, exploring combat stress reactions.',
    category: 'Research',
    link: '/papers/csr_rom.pdf',
    publishedAt: '2010-01-01'
  },
  {
    id: 'research-4',
    title: 'The effects of implicit and explicit security priming on creative problem solving',
    excerpt: 'Research on attachment theory focusing on regulation of emotion and the benefits of such regulation for exploration and learning.',
    category: 'Research',
    link: '/papers/59330096.pdf',
    publishedAt: '2007-01-01'
  },
  {
    id: 'research-5',
    title: 'Team-Related Mental Representation: The Role of Individual Differences',
    excerpt: 'The current study applied Bowlby\'s attachment theory to tap into mechanisms underlying team-related mental representation.',
    category: 'Research',
    link: '/papers/rom_2007.pdf',
    publishedAt: '2007-01-01'
  },
  {
    id: 'research-6',
    title: 'Attachment theory in group context',
    excerpt: 'Attachment Theory and Group Processes: The Association Between Attachment Style and Group-Related Representations, Goals, Memories, and Functioning.',
    category: 'Research',
    link: '/papers/Attachment-Theory-and-Group-Processes.pdf',
    publishedAt: '2005-01-01'
  },
  {
    id: 'research-7',
    title: 'The Predictive Role of Simulations in Assessing Military Performance',
    excerpt: 'The current study assessed the predictive validity of simulations to improve the military selection system.',
    category: 'Research',
    link: '/papers/rom_simulations.pdf',
    publishedAt: '2012-01-01'
  },
  {
    id: 'research-8',
    title: 'The Role of Adult Attachment Style in Online Social Network Affect, Cognition, and Behavior',
    excerpt: 'Exploring the antecedences and consequences of social network sites and their relationship to attachment styles.',
    category: 'Research',
    link: '/papers/rom_social_network.pdf',
    publishedAt: '2018-01-01'
  }
];
