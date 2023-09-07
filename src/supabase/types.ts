interface INote {
  id: number;
  type: string;
  date: Date;
  description: string | null;
  photo: string | null;
}

export interface IVehicle {
  id: number;
  notes: INote;
  maintenances: IMaintenance[];
  plateNumber: string;
  brand: string;
  model: number;
}

export interface IPet {
  id: number;
  notes: INote;
  name: string;
  breed: string;
}

export interface IMaintenance {
  id: number;
  vehicles: IVehicle;
  notes: INote;
  cost: number;
  kilometers: number | null;
}
