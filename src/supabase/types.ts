interface INote {
  id: number;
  type: string;
  date: Date;
  description: string | null;
  photo: string | null;
}

export interface IVehicle {
  id: string;
  notes: INote;
  plateNumber: string;
  brand: string;
  model: number;
}

export interface IPet {
  id: string;
  notes: INote;
  name: string;
  breed: string;
}
