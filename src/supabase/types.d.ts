type Note = {
  id: number;
  type: string;
  date: Date;
  description?: string;
  photo?: string;
};

export type TVehicle = {
  id: number;
  notes: Note;
  maintenances: TMaintenance[];
  plateNumber: string;
  brand: string;
  model: number;
};

export type TPet = {
  id: number;
  notes: Note;
  procedures: TProcedure[];
  name: string;
  breed: string;
};

export type TMaintenance = {
  id: number;
  vehicles: TVehicle;
  notes: Note;
  cost: number;
  kilometers?: number;
};

export type TProcedure = {
  id: number;
  pets: TPet;
  notes: Note;
  cost: number;
  weight?: number;
  nextDate?: Date;
};

export type TTransfer = {
  id: number;
};
