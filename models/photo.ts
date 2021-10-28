export interface Photo {
  _id: string;
  name: string;
  photoURL: string;
  password: string;
}

export interface PhotoDto {
  name: string;
  photoURL: string;
  password: string;
}
