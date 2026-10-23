export interface AlumniEntry {
  years: string;
  name: string;
  position: string;
  next?: string;
}

export const alumni: AlumniEntry[] = [
  {
    years: '2024-2026',
    name: 'Hannah Marie Cebula',
    position: 'Master student',
    next: 'PhD',
  },{
    years: '2020-2024',
    name: 'Luis F. Montano-Gutierrez',
    position: 'Postdoc',
    next: 'Postdoc @ MedUni Vienna',
  },
  {
    years: '2019-2024',
    name: 'Mohamed R. Shoeb',
    position: 'PhD student',
    next: 'Postdoc @ University of Oxford',
  },
  {
    years: '2024',
    name: 'Eszter Söjtöry',
    position: 'Intern',
    next: 'PhD @ St. Anna CCRI',
  },
  { years: '2019-2020', name: 'Katja Nettermann', position: 'Master student' },
  { years: '2019-2020', name: 'Martin Koban', position: 'Master student' },
  { years: '2019', name: 'Hanja Pisa', position: '' },
];
