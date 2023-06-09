interface SanityBody {
  _createAt: string;
  _id: string;
  _rev: string;
  _updateAt: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: strinf;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  phoneNumber: string;
  profilePic: Image;
}

interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}
export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  title: string;
  _type: "project;";
  image: Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
