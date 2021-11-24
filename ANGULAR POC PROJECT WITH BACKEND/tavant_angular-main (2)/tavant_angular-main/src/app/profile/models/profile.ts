import { Education } from './education';
import { Experience } from './experience';
import { User } from './user';

export class Profile {
  skills: string[];
  _id: string;
  user: User;
  bio: string;
  company: string;
  githubusername: string;
  location: string;
  status: string;
  website: string;
  date: string;
  social: any;
  education: Education[];
  experience: Experience[];
}
