// =====================================================================
//  EDIT THIS FILE to customise the whole portfolio.
//  Name, email, GitHub, LinkedIn, skills, projects and timeline live here.
// =====================================================================

export const profile = {
  name: 'Yash Yadav',
  fullName: 'Yadav Yash Jayprakash',
  enrollmentNo: '202506101410003',
  initials: 'Y',
  tagline: 'CSE Student | Aspiring Full-Stack Developer',
  intro:
    "I build responsive websites and full-stack apps, from a gym management portal with a PHP and MySQL backend to a restaurant ordering page. I like turning real-world ideas into clean, working interfaces.",
  badge: 'Learning React, PHP & MySQL',
  location: 'Sachin, Surat, Gujarat, India',
  email: 'yadavyashkumarj@gmail.com',
  githubUser: 'YadavYashJ',
  linkedinUrl: 'https://www.linkedin.com/in/yash-yadav-109864371',
  resumeFileName: 'Yash_Yadav_Resume.pdf', // name used when the PDF is downloaded
  // Optional: paste a Formspree (or similar) endpoint to send messages without a backend.
  // Leave empty to use the mailto: fallback.
  formEndpoint: '',
};

export const githubUrl = `https://github.com/${profile.githubUser}`;

export const about = {
  paragraphs: [
    'I am Yash Yadav, a Computer Science Engineering student from Sachin, Surat. I enjoy building websites and learning how software is made, from the first line of HTML to a deployed, working project.',
    'My work so far includes Lord\'s Gym, a full-stack gym website with a member portal and admin dashboard, and La Bella Cucina, a restaurant menu with a live order cart. This portfolio website is another mini project of mine, built with React, TypeScript and Tailwind CSS.',
  ],
  cards: [
    { icon: 'GraduationCap', title: 'Education', text: 'B.Tech, Computer Science Engineering (2025 – 2029)' },
    { icon: 'Target', title: 'Current Focus', text: 'Full-stack development with React, PHP and MySQL' },
    { icon: 'Sparkles', title: 'Interests', text: 'Web development, real-world client projects, and technology' },
    { icon: 'Rocket', title: 'Career Goal', text: 'Grow into a confident full-stack developer' },
  ],
  college: 'Uka Tarsadia University, Bardoli',
};

export type SkillGroup = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend Development', icon: 'Layout', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend & Database', icon: 'Database', skills: ['PHP', 'MySQL', 'REST-style APIs'] },
  { title: 'Programming Languages', icon: 'Code2', skills: ['Java', 'Python', 'C / C++'] },
  { title: 'Tools & Technologies', icon: 'Wrench', skills: ['Git', 'GitHub', 'VS Code', 'XAMPP', 'Responsive Web Design'] },
  { title: 'Soft Skills', icon: 'Users', skills: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'] },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string; // GitHub repository link shown on the card's "GitHub Repository" button. Empty = button hidden
  demo?: string; // optional preview link; leave empty to hide the button
  icon: string;
  gradient: string;
  images?: string[]; // file names inside public/projects/ (first one is the cover)
};

const base = import.meta.env.BASE_URL;

export const projects: Project[] = [
  {
    title: "Lord's Gym - Gym Website & Member Portal",
    description:
      "A full-stack website for a gym in Sachin, Surat. It has membership plans, an enquiry form that sends leads to the owner, a member login and sign-up portal, and an admin pipeline dashboard backed by a PHP and MySQL API.",
    tags: ['React', 'Tailwind CSS', 'PHP', 'MySQL'],
    repo: 'https://github.com/YadavYashJ/lords-gym-website', // <- paste this project's GitHub link here
    demo: '', // needs PHP + MySQL, so it cannot be previewed as a static page
    icon: 'Dumbbell',
    gradient: 'from-orange-500/30 via-violet-500/20 to-blue-500/20',
    images: ['lordsgym-home.jpg', 'lordsgym-plans.jpg', 'lordsgym-contact.jpg', 'lordsgym-login.jpg'],
  },
  {
    title: 'La Bella Cucina - Restaurant Menu & Ordering',
    description:
      'A restaurant menu page with category tabs, an add-to-order cart with quantity controls, automatic subtotal and 5% tax, and an order confirmation pop-up. Built with plain HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: '', // <- paste a GitHub link between the quotes to show a GitHub button
    demo: `${base}projects/la-bella-cucina/index.html`,
    icon: 'UtensilsCrossed',
    gradient: 'from-amber-500/30 via-rose-500/20 to-violet-500/20',
    images: ['labella-menu.jpg', 'labella-cart.jpg', 'labella-order.jpg', 'labella-desserts.jpg'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This website: a responsive portfolio with a parallax intro, a project showcase, a validated contact form and a working résumé download. It is also one of my mini projects.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    // To change the GitHub link of this project, edit the URL on the next line.
    repo: `${githubUrl}/YashYadav_PortfolioWebsite`, // <- replace with the full link of this portfolio's repo, e.g. 'https://github.com/YadavYashJ/<repo-name>'
    demo: '',
    icon: 'Globe',
    gradient: 'from-blue-500/30 via-violet-500/20 to-cyan-400/20',
    images: ['portfolio-home.jpg'],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  detail: string;
  category: 'Education' | 'Courses' | 'Achievement' | 'Practice' | 'Milestone';
  placeholder?: boolean; // shows a "Sample" chip until you replace it
};

export const timeline: TimelineItem[] = [
  {
    period: '2025 – 2029',
    title: 'B.Tech in Computer Science Engineering',
    detail: 'Uka Tarsadia University, Bardoli.',
    category: 'Education',
  },
  {
    period: 'Academic project',
    title: "Built Lord's Gym, a full-stack gym website",
    detail: 'React front end with a PHP and MySQL backend: enquiry desk, member portal login and an admin lead pipeline.',
    category: 'Milestone',
  },
  {
    period: 'Academic project',
    title: 'Built La Bella Cucina, a restaurant ordering page',
    detail: 'Menu tabs, a live order cart with tax calculation and an order confirmation flow in plain JavaScript.',
    category: 'Practice',
  },
  {
    period: 'Academic project',
    title: 'Built this portfolio website',
    detail: 'This portfolio is also a mini project: React, TypeScript and Tailwind CSS with a parallax intro, project gallery and contact form.',
    category: 'Milestone',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];
