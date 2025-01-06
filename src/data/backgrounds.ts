import homeBackground from './home-bg.jpg';
import projectsBackground from './projects-bg.jpg';
import experienceBackground from './experience-bg.jpg';
import resumeBackground from './resume-bg.jpg';
import contactBackground from './contact-bg.jpg';

export const backgrounds = {
  home: homeBackground,
  projects: projectsBackground,
  experience: experienceBackground,
  resume: resumeBackground,
  contact: contactBackground,
} as const;

export const getBackgroundForPath = (path: string) => {
  switch (path) {
    case '/':
      return backgrounds.home;
    case '/projects':
      return backgrounds.projects;
    case '/experience':
      return backgrounds.experience;
    case '/resume':
      return backgrounds.resume;
    case '/contact':
      return backgrounds.contact;
    default:
      return backgrounds.home;
  }
}; 