// src/data/research.ts
export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string;
  keywords: string;
  pdfFile: string;
  publishedYear?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: '1',
    title: 'Adult attachment and perceived parental style may shape leadership behaviors',
    abstract: 'The purpose of this paper is to examine the role of both attachment and parental styles in shaping leadership behavioral patterns. Research predictions were that childhood perceived parental experiences will be associated with attachment style, and that both perceived parental and attachment styles will fulfill a significant role in shaping the individual\'s leadership orientation in adulthood.',
    authors: 'Rom Eldad and Joy Benatov',
    keywords: 'Attachment, Leadership, Parental style',
    pdfFile: '/papers/LODJ-06-2016-0155.pdf'
  },
  {
    id: '2',
    title: 'Team Mental Models: Review, Analysis, and Integration',
    abstract: 'In recent years an innovative sociocognitive perspective for exploring teamwork effectiveness has been advocated by numerous researchers. This perspective examines ways by which team members develop mutual understanding. The general idea is that team effectiveness will improve if team members hold adequately shared cognitive representations, often termed as team mental models.',
    authors: 'Eldad Rom',
    keywords: 'Team, Mental models, Social cognition',
    pdfFile: '/papers/JPPRV4N1A4-Rom.pdf'
  },
  {
    id: '3',
    title: 'Combat stress reactions during the 1948 war: a conspiracy of silence?',
    abstract: 'This article is based on a series of interviews with 73 individuals who participated in the 1948 war. Though the war had many physical as well as emotional casualties, surprisingly a relatively small portion of individuals were willing to admit the occurrence of combat stress reactions. This finding is quite puzzling in the face of the drastic course of the war.',
    authors: 'Eldad Rom and Dan Bar-On',
    keywords: 'Combat stress reactions, Social identity, 1948 Arab-Israeli War',
    pdfFile: '/papers/csr_rom.pdf'
  },
  {
    id: '4',
    title: 'The effects of implicit and explicit security priming on creative problem solving',
    abstract: 'Attachment theory is a theory of affect regulation as it occurs in the context of close relationships. Early research focused on regulation of emotions through maintenance of proximity to supportive others (attachment figures) in times of need. Recently, emphasis has shifted to the regulation of emotion, and the benefits of such regulation for exploration and learning.',
    authors: 'Mario Mikulincer, Phillip R. Shaver, and Eldad Rom',
    keywords: 'Attachment, Attachment anxiety, Security priming, Creative problem solving',
    pdfFile: '/papers/59330096.pdf'
  },
  {
    id: '5',
    title: 'Team-Related Mental Representation: The Role of Individual Differences',
    abstract: 'The current study applied Bowlby\'s (e.g., 1973) attachment theory in order to tap into several mechanisms underlying team-related mental representation. Attachment style of 89 subjects was evaluated via a self-report questionnaire, while their team-related mental representation was assessed through a sorting task.',
    authors: 'Eldad Rom',
    keywords: 'Attachment, Team representation, Individual differences',
    pdfFile: '/papers/rom_2007.pdf'
  },
  {
    id: '6',
    title: 'Attachment theory in group context',
    abstract: 'Attachment Theory and Group Processes: The Association Between Attachment Style and Group-Related Representations, Goals, Memories, and Functioning.',
    authors: 'Eldad Rom and Mario Mikulincer',
    keywords: 'Attachment, Group processes, Mental representations',
    pdfFile: '/papers/Attachment-Theory-and-Group-Processes.pdf'
  },
  {
    id: '7',
    title: 'The Predictive Role of Simulations in Assessing Military Performance',
    abstract: 'The current study assessed the predictive validity of simulations to improve the military selection system. Four navy simulations were developed and their predictive validity was measured. The performance of 1007 Israeli navy soldiers was measured in a longitudinal study, which was carried on for almost two years.',
    authors: 'Eldad Rom and Yael Kalderon',
    keywords: 'Simulation, Predictive validity, Military performance',
    pdfFile: '/papers/rom_simulations.pdf'
  },
  {
    id: '8',
    title: 'The Role of Adult Attachment Style in Online Social Network Affect, Cognition, and Behavior',
    abstract: 'In the last decade, social network sites (SNS) have a major attendance in our everyday lives. Numerous studies have explored the antecedences and consequences of this novel phenomenon. The current study is yet another attempt in this direction.',
    authors: 'Eldad Rom and Yitshak Alfasi',
    keywords: 'Attachment, Attachment anxiety, Attachment avoidance, Facebook, Social network',
    pdfFile: '/papers/rom_social_network.pdf'
  }
];
