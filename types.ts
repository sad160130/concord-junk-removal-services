export enum ViewState {
  HOME = 'HOME',
  APPLIANCE = 'APPLIANCE',
  FURNITURE = 'FURNITURE',
  CONSTRUCTION = 'CONSTRUCTION',
  WAXHAW = 'WAXHAW',
  MARVIN = 'MARVIN',
  LANCASTER = 'LANCASTER',
  ABOUT = 'ABOUT'
}

export interface ServiceOption {
  id: string;
  label: string;
}

export const SERVICES: ServiceOption[] = [
  { id: 'Appliance Removal', label: 'Appliance Removal' },
  { id: 'Furniture Removal', label: 'Furniture Removal' },
  { id: 'Construction Debris Removal', label: 'Construction Debris Removal' },
  { id: 'General Junk Removal', label: 'General Junk Removal' },
];