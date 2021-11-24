export class ProfileFormData {
  skills?: string;
  bio?: string;
  company?: string;
  githubusername?: string;
  location?: string;
  status?: string;
  website?: string;
  date?: string;
  youtube?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

export class Experience {
  current?: boolean;
  title?: string;
  company?: string;
  location?: string;
  from?: Date;
  to?: Date;
  description?: string;
}

export class Education {
  current?: boolean;
  school?: string;
  degree?: string;
  fieldofstudy?: string;
  from?: string;
  to?: any;
  description?: string;
}
