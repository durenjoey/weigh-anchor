export interface Project {
  id: string;
  name: string;
  location: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  projectCount: number;
  type: 'tribal-government' | 'corporate';
  category: 'construction' | 'engineering' | 'automation';
  serviceType: 'Construction Project Management' | 'Engineering Services' | 'Technology & Automation';
  status: 'open' | 'closed';
  clientName?: string; // Only for corporate projects
  description?: string;
}

export const projects: Project[] = [
  // OPEN PROJECTS - Tribal/Government (All Construction Projects)
  {
    id: 'atka-ak',
    name: 'Atka Infrastructure Project',
    location: 'Atka',
    state: 'Alaska',
    coordinates: { lat: 52.2322, lng: -174.2064 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'chefornak-ak',
    name: 'Chefornak Development',
    location: 'Chefornak',
    state: 'Alaska',
    coordinates: { lat: 60.1492, lng: -164.2856 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'crow-nation-mt',
    name: 'Crow Nation Project',
    location: 'Crow Nation',
    state: 'Montana',
    coordinates: { lat: 45.5347, lng: -107.9403 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'fort-yukon-ak',
    name: 'Fort Yukon Development',
    location: 'Fort Yukon',
    state: 'Alaska',
    coordinates: { lat: 66.5694, lng: -145.2736 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'gila-river-az',
    name: 'Gila River Project',
    location: 'Gila River',
    state: 'Arizona',
    coordinates: { lat: 33.2456, lng: -111.7847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'huslia-ak',
    name: 'Huslia Village Development',
    location: 'Huslia Village',
    state: 'Alaska',
    coordinates: { lat: 65.6981, lng: -156.3931 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'kaltag-ak',
    name: 'Kaltag Infrastructure',
    location: 'Kaltag',
    state: 'Alaska',
    coordinates: { lat: 64.3189, lng: -158.7267 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'ketchikan-ak',
    name: 'Ketchikan Indian Community Project',
    location: 'Ketchikan Indian Community',
    state: 'Alaska',
    coordinates: { lat: 55.3422, lng: -131.6461 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'knik-ak',
    name: 'Knik Tribe Development',
    location: 'Knik Tribe',
    state: 'Alaska',
    coordinates: { lat: 61.5181, lng: -149.6444 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'little-traverse-mi',
    name: 'Little Traverse Bay Bands Project',
    location: 'Little Traverse Bay Bands',
    state: 'Michigan',
    coordinates: { lat: 45.3694, lng: -84.9544 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'manley-ak',
    name: 'Manley Village Council Project',
    location: 'Manley Village Council',
    state: 'Alaska',
    coordinates: { lat: 64.9975, lng: -150.6403 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'buckland-ak',
    name: 'Native Village of Buckland Project',
    location: 'Native Village of Buckland',
    state: 'Alaska',
    coordinates: { lat: 65.9814, lng: -161.1489 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'chuathbaluk-ak',
    name: 'Native Village of Chuathbaluk Project',
    location: 'Native Village of Chuathbaluk',
    state: 'Alaska',
    coordinates: { lat: 61.5781, lng: -159.2156 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'gakona-ak',
    name: 'Native Village of Gakona Project',
    location: 'Native Village of Gakona',
    state: 'Alaska',
    coordinates: { lat: 62.3069, lng: -145.3181 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'solomon-ak',
    name: 'Native Village of Solomon Project',
    location: 'Native Village of Solomon',
    state: 'Alaska',
    coordinates: { lat: 64.5631, lng: -164.4339 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'kake-ak',
    name: 'Organized Village of Kake Project',
    location: 'Organized Village of Kake',
    state: 'Alaska',
    coordinates: { lat: 56.9719, lng: -133.9453 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'prairie-band-ks',
    name: 'Prairie Band Potawatomi Nation Project',
    location: 'Prairie Band Potawatomi Nation',
    state: 'Kansas',
    coordinates: { lat: 39.3644, lng: -95.8019 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'zuni-nm',
    name: 'Pueblo of Zuni Project',
    location: 'Pueblo of Zuni',
    state: 'New Mexico',
    coordinates: { lat: 35.0719, lng: -108.8506 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'quinault-wa',
    name: 'Quinault Indian Nation Project',
    location: 'Quinault Indian Nation',
    state: 'Washington',
    coordinates: { lat: 47.1431, lng: -124.2581 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'red-cliff-wi',
    name: 'Red Cliff Band Project',
    location: 'Red Cliff Band',
    state: 'Wisconsin',
    coordinates: { lat: 46.8456, lng: -90.8181 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'red-lake-mn',
    name: 'Red Lake Band Project',
    location: 'Red Lake Band',
    state: 'Minnesota',
    coordinates: { lat: 47.8744, lng: -95.0181 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'sac-fox-ks',
    name: 'Sac and Fox Nation Project',
    location: 'Sac and Fox Nation',
    state: 'Kansas',
    coordinates: { lat: 39.7456, lng: -95.3181 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'salt-river-az',
    name: 'Salt River Pima-Maricopa Project',
    location: 'Salt River Pima-Maricopa',
    state: 'Arizona',
    coordinates: { lat: 33.5456, lng: -111.8847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'seminole-ok',
    name: 'Seminole Nation Project',
    location: 'Seminole Nation',
    state: 'Oklahoma',
    coordinates: { lat: 35.2456, lng: -96.6847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'seneca-cayuga-ok',
    name: 'Seneca-Cayuga Nation Project',
    location: 'Seneca-Cayuga Nation',
    state: 'Oklahoma',
    coordinates: { lat: 36.8456, lng: -94.8847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'spokane-wa',
    name: 'Spokane Tribe Project',
    location: 'Spokane Tribe',
    state: 'Washington',
    coordinates: { lat: 47.9456, lng: -118.0847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'tanana-chiefs-ak',
    name: 'Tanana Chiefs Conference Project',
    location: 'Tanana Chiefs Conference',
    state: 'Alaska',
    coordinates: { lat: 64.8378, lng: -147.7164 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'winnebago-ne',
    name: 'Winnebago Tribe Project',
    location: 'Winnebago Tribe',
    state: 'Nebraska',
    coordinates: { lat: 42.2456, lng: -96.4847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'yurok-ca',
    name: 'Yurok Tribe Project',
    location: 'Yurok Tribe',
    state: 'California',
    coordinates: { lat: 41.5456, lng: -124.0847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'lafourche-la',
    name: 'Lafourche Parish Project',
    location: 'Lafourche Parish',
    state: 'Louisiana',
    coordinates: { lat: 29.5456, lng: -90.4847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'saipan-cnmi',
    name: 'Saipan Construction Projects',
    location: 'Saipan',
    state: 'Northern Mariana Islands',
    coordinates: { lat: 15.1850, lng: 145.7493 },
    projectCount: 2,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'tinian-cnmi',
    name: 'Tinian Construction Projects',
    location: 'Tinian',
    state: 'Northern Mariana Islands',
    coordinates: { lat: 15.0028, lng: 145.6367 },
    projectCount: 2,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },
  {
    id: 'rota-cnmi',
    name: 'Rota Construction Projects',
    location: 'Rota',
    state: 'Northern Mariana Islands',
    coordinates: { lat: 14.1491, lng: 145.2117 },
    projectCount: 2,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open'
  },

  // OPEN PROJECTS - Government
  {
    id: 'va-portland-or',
    name: 'Department of Veterans Affairs Construction Project',
    location: 'Portland',
    state: 'Oregon',
    coordinates: { lat: 45.5152, lng: -122.6784 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'open',
    clientName: 'Department of Veterans Affairs',
    description: 'Construction project for Veterans Affairs facility'
  },

  // OPEN PROJECTS - Corporate
  {
    id: 'pfizer-bothell-wa-open',
    name: 'Pfizer Business Process Automation',
    location: 'Bothell',
    state: 'Washington',
    coordinates: { lat: 47.7544, lng: -122.2056 },
    projectCount: 1,
    type: 'corporate',
    category: 'automation',
    serviceType: 'Technology & Automation',
    status: 'open',
    clientName: 'Pfizer',
    description: 'Business process automation contract'
  },

  // CLOSED PROJECTS - Tribal/Government
  {
    id: 'lac-vieux-mi',
    name: 'Lac Vieux Desert Band Project',
    location: 'Lac Vieux Desert Band',
    state: 'Michigan',
    coordinates: { lat: 46.2619, lng: -89.1456 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'closed'
  },
  {
    id: 'sisseton-wahpeton-sd',
    name: 'Sisseton Wahpeton Oyate Project',
    location: 'Sisseton Wahpeton Oyate of the Lake Traverse Reservation',
    state: 'South Dakota',
    coordinates: { lat: 45.6644, lng: -96.9847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'closed'
  },
  {
    id: 'confederated-tribes-or',
    name: 'Confederated Tribes Project',
    location: 'Confederated Tribes of Coos, Lower Umpqua and Siuslaw Indians',
    state: 'Oregon',
    coordinates: { lat: 43.7456, lng: -124.2847 },
    projectCount: 1,
    type: 'tribal-government',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'closed'
  },

  // CLOSED PROJECTS - Corporate
  {
    id: 'pfizer-bothell-wa-closed',
    name: 'Pfizer Seismic Engineering Projects',
    location: 'Bothell',
    state: 'Washington',
    coordinates: { lat: 47.7544, lng: -122.2056 },
    projectCount: 2,
    type: 'corporate',
    category: 'engineering',
    serviceType: 'Engineering Services',
    status: 'closed',
    clientName: 'Pfizer',
    description: 'Non-structural Seismic Engineering projects'
  },
  {
    id: 'wcgi-pembroke-nc',
    name: 'WCGi Pembroke Technology Projects',
    location: 'Pembroke',
    state: 'North Carolina',
    coordinates: { lat: 34.6831, lng: -79.1956 },
    projectCount: 3,
    type: 'corporate',
    category: 'automation',
    serviceType: 'Technology & Automation',
    status: 'closed',
    clientName: 'WCGi',
    description: 'Technology and automation projects'
  },
  {
    id: 'wcgi-fayetteville-nc',
    name: 'WCGi Fayetteville Project',
    location: 'Fayetteville',
    state: 'North Carolina',
    coordinates: { lat: 35.0527, lng: -78.8784 },
    projectCount: 1,
    type: 'corporate',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'closed',
    clientName: 'WCGi'
  },
  {
    id: 'wcgi-raeford-nc',
    name: 'WCGi Raeford Project',
    location: 'Raeford',
    state: 'North Carolina',
    coordinates: { lat: 34.9781, lng: -79.2256 },
    projectCount: 1,
    type: 'corporate',
    category: 'construction',
    serviceType: 'Construction Project Management',
    status: 'closed',
    clientName: 'WCGi'
  }
];

// Verified stats from Weigh Anchor Project Tracker
export const VERIFIED_STATS = {
  activeProjects: 64,
  statesAndTerritories: 17,
};

// --- Client Map Data ---
export type ClientCategory = 'Tribal Nation' | 'Federal Government' | 'Fortune 500' | 'Healthcare' | 'Local Business' | 'Biotech';

export interface Client {
  id: string;
  name: string;
  location: string;
  state: string;
  coordinates: { lat: number; lng: number };
  category: ClientCategory;
}

export const clients: Client[] = [
  // Tribal Nations — Alaska
  { id: 'atka', name: 'Atka', location: 'Atka', state: 'AK', coordinates: { lat: 52.2322, lng: -174.2064 }, category: 'Tribal Nation' },
  { id: 'anvik', name: 'Native Village of Anvik', location: 'Anvik', state: 'AK', coordinates: { lat: 62.6567, lng: -160.1908 }, category: 'Tribal Nation' },
  { id: 'buckland', name: 'Native Village of Buckland', location: 'Buckland', state: 'AK', coordinates: { lat: 65.9814, lng: -161.1489 }, category: 'Tribal Nation' },
  { id: 'chalkyitsik', name: 'Chalkyitsik Village', location: 'Chalkyitsik', state: 'AK', coordinates: { lat: 66.6519, lng: -143.7258 }, category: 'Tribal Nation' },
  { id: 'chefornak', name: 'Native Village of Chefornak', location: 'Chefornak', state: 'AK', coordinates: { lat: 60.1492, lng: -164.2856 }, category: 'Tribal Nation' },
  { id: 'chuathbaluk', name: 'Native Village of Chuathbaluk', location: 'Chuathbaluk', state: 'AK', coordinates: { lat: 61.5781, lng: -159.2156 }, category: 'Tribal Nation' },
  { id: 'circle', name: 'Circle Village', location: 'Circle', state: 'AK', coordinates: { lat: 65.8267, lng: -144.0603 }, category: 'Tribal Nation' },
  { id: 'eagle', name: 'Eagle Village', location: 'Eagle', state: 'AK', coordinates: { lat: 64.7878, lng: -141.2006 }, category: 'Tribal Nation' },
  { id: 'fort-yukon', name: 'Fort Yukon', location: 'Fort Yukon', state: 'AK', coordinates: { lat: 66.5694, lng: -145.2736 }, category: 'Tribal Nation' },
  { id: 'gakona', name: 'Native Village of Gakona', location: 'Gakona', state: 'AK', coordinates: { lat: 62.3069, lng: -145.3181 }, category: 'Tribal Nation' },
  { id: 'huslia', name: 'Huslia Village', location: 'Huslia', state: 'AK', coordinates: { lat: 65.6981, lng: -156.3931 }, category: 'Tribal Nation' },
  { id: 'kake', name: 'Organized Village of Kake', location: 'Kake', state: 'AK', coordinates: { lat: 56.9719, lng: -133.9453 }, category: 'Tribal Nation' },
  { id: 'kaltag', name: 'Kaltag', location: 'Kaltag', state: 'AK', coordinates: { lat: 64.3189, lng: -158.7267 }, category: 'Tribal Nation' },
  { id: 'ketchikan', name: 'Ketchikan Indian Community', location: 'Ketchikan', state: 'AK', coordinates: { lat: 55.3422, lng: -131.6461 }, category: 'Tribal Nation' },
  { id: 'knik', name: 'Knik Tribe', location: 'Palmer', state: 'AK', coordinates: { lat: 61.5181, lng: -149.6444 }, category: 'Tribal Nation' },
  { id: 'manley', name: 'Manley Village Council', location: 'Manley Hot Springs', state: 'AK', coordinates: { lat: 64.9975, lng: -150.6403 }, category: 'Tribal Nation' },
  { id: 'mcgrath', name: 'McGrath', location: 'McGrath', state: 'AK', coordinates: { lat: 62.9564, lng: -155.5958 }, category: 'Tribal Nation' },
  { id: 'minto', name: 'Minto Village', location: 'Minto', state: 'AK', coordinates: { lat: 64.8847, lng: -149.3697 }, category: 'Tribal Nation' },
  { id: 'nenana', name: 'Nenana', location: 'Nenana', state: 'AK', coordinates: { lat: 64.5636, lng: -149.0928 }, category: 'Tribal Nation' },
  { id: 'rampart', name: 'Rampart Village', location: 'Rampart', state: 'AK', coordinates: { lat: 65.5067, lng: -150.1647 }, category: 'Tribal Nation' },
  { id: 'shageluk', name: 'Shageluk', location: 'Shageluk', state: 'AK', coordinates: { lat: 62.6828, lng: -159.5611 }, category: 'Tribal Nation' },
  { id: 'solomon', name: 'Native Village of Solomon', location: 'Solomon', state: 'AK', coordinates: { lat: 64.5631, lng: -164.4339 }, category: 'Tribal Nation' },
  { id: 'tananacross', name: 'Tananacross', location: 'Tanacross', state: 'AK', coordinates: { lat: 63.3847, lng: -143.3464 }, category: 'Tribal Nation' },
  { id: 'tcc', name: 'Tanana Chiefs Conference', location: 'Fairbanks', state: 'AK', coordinates: { lat: 64.8378, lng: -147.7164 }, category: 'Tribal Nation' },
  // Tribal Nations — Lower 48
  { id: 'confederated-tribes', name: 'Confederated Tribes of Coos, Lower Umpqua and Siuslaw', location: 'Coos Bay', state: 'OR', coordinates: { lat: 43.3665, lng: -124.2179 }, category: 'Tribal Nation' },
  { id: 'crow-nation', name: 'Crow Nation', location: 'Crow Agency', state: 'MT', coordinates: { lat: 45.5347, lng: -107.9403 }, category: 'Tribal Nation' },
  { id: 'gila-river', name: 'Gila River Indian Community', location: 'Sacaton', state: 'AZ', coordinates: { lat: 33.0767, lng: -111.7397 }, category: 'Tribal Nation' },
  { id: 'lac-vieux', name: 'Lac Vieux Desert Band', location: 'Watersmeet', state: 'MI', coordinates: { lat: 46.2619, lng: -89.1456 }, category: 'Tribal Nation' },
  { id: 'little-traverse', name: 'Little Traverse Bay Bands of Odawa Indians', location: 'Harbor Springs', state: 'MI', coordinates: { lat: 45.4317, lng: -84.9933 }, category: 'Tribal Nation' },
  { id: 'prairie-band', name: 'Prairie Band Potawatomi Nation', location: 'Mayetta', state: 'KS', coordinates: { lat: 39.3644, lng: -95.8019 }, category: 'Tribal Nation' },
  { id: 'pueblo-zuni', name: 'Pueblo of Zuni', location: 'Zuni', state: 'NM', coordinates: { lat: 35.0719, lng: -108.8506 }, category: 'Tribal Nation' },
  { id: 'quinault', name: 'Quinault Indian Nation', location: 'Taholah', state: 'WA', coordinates: { lat: 47.3431, lng: -124.2881 }, category: 'Tribal Nation' },
  { id: 'red-cliff', name: 'Red Cliff Band of Lake Superior Chippewa', location: 'Bayfield', state: 'WI', coordinates: { lat: 46.8456, lng: -90.8181 }, category: 'Tribal Nation' },
  { id: 'red-lake', name: 'Red Lake Band of Chippewa Indians', location: 'Red Lake', state: 'MN', coordinates: { lat: 47.8744, lng: -95.0181 }, category: 'Tribal Nation' },
  { id: 'sac-fox', name: 'Sac and Fox Nation', location: 'Reserve', state: 'KS', coordinates: { lat: 39.7456, lng: -95.3181 }, category: 'Tribal Nation' },
  { id: 'salt-river', name: 'Salt River Pima-Maricopa Indian Community', location: 'Scottsdale', state: 'AZ', coordinates: { lat: 33.5456, lng: -111.8847 }, category: 'Tribal Nation' },
  { id: 'seminole', name: 'Seminole Nation of Oklahoma', location: 'Wewoka', state: 'OK', coordinates: { lat: 35.1600, lng: -96.4928 }, category: 'Tribal Nation' },
  { id: 'seneca-cayuga', name: 'Seneca-Cayuga Nation', location: 'Miami', state: 'OK', coordinates: { lat: 36.8747, lng: -94.8775 }, category: 'Tribal Nation' },
  { id: 'sisseton', name: 'Sisseton Wahpeton Oyate', location: 'Agency Village', state: 'SD', coordinates: { lat: 45.6644, lng: -96.9847 }, category: 'Tribal Nation' },
  { id: 'skokomish', name: 'Skokomish Tribe', location: 'Shelton', state: 'WA', coordinates: { lat: 47.3331, lng: -123.1528 }, category: 'Tribal Nation' },
  { id: 'spokane', name: 'Spokane Tribe of Indians', location: 'Wellpinit', state: 'WA', coordinates: { lat: 47.9072, lng: -117.9639 }, category: 'Tribal Nation' },
  { id: 'winnebago', name: 'Winnebago Tribe of Nebraska', location: 'Winnebago', state: 'NE', coordinates: { lat: 42.2456, lng: -96.4847 }, category: 'Tribal Nation' },
  { id: 'yurok', name: 'Yurok Tribe', location: 'Klamath', state: 'CA', coordinates: { lat: 41.5267, lng: -124.0400 }, category: 'Tribal Nation' },
  // Federal Government
  { id: 'va-portland', name: 'Department of Veterans Affairs', location: 'Portland', state: 'OR', coordinates: { lat: 45.4972, lng: -122.6847 }, category: 'Federal Government' },
  { id: 'cnmi-saipan', name: 'CNMI Government', location: 'Saipan', state: 'CNMI', coordinates: { lat: 15.1850, lng: 145.7493 }, category: 'Federal Government' },
  { id: 'cnmi-tinian', name: 'CNMI Government', location: 'Tinian', state: 'CNMI', coordinates: { lat: 15.0028, lng: 145.6367 }, category: 'Federal Government' },
  { id: 'cnmi-rota', name: 'CNMI Government', location: 'Rota', state: 'CNMI', coordinates: { lat: 14.1491, lng: 145.2117 }, category: 'Federal Government' },
  // Fortune 500
  { id: 'pfizer', name: 'Pfizer', location: 'Bothell', state: 'WA', coordinates: { lat: 47.7544, lng: -122.2056 }, category: 'Fortune 500' },
  // Biotech
  { id: 'tune-therapeutics', name: 'Tune Therapeutics', location: 'Durham', state: 'NC', coordinates: { lat: 35.9940, lng: -78.8986 }, category: 'Biotech' },
  // Healthcare
  { id: 'healthkeeperz', name: 'HealthKeeperz', location: 'Fayetteville', state: 'NC', coordinates: { lat: 35.0527, lng: -78.8784 }, category: 'Healthcare' },
  { id: 'scotland-memorial', name: 'Scotland Memorial Hospital', location: 'Laurinburg', state: 'NC', coordinates: { lat: 34.7743, lng: -79.4620 }, category: 'Healthcare' },
  { id: 'wagram-family', name: 'Wagram Family Practice', location: 'Wagram', state: 'NC', coordinates: { lat: 34.8946, lng: -79.3632 }, category: 'Healthcare' },
  { id: 'dignity-homecare', name: 'Dignity Homecare', location: 'Pembroke', state: 'NC', coordinates: { lat: 34.6831, lng: -79.1956 }, category: 'Healthcare' },
  { id: 'choc', name: 'CHOC', location: 'Raeford', state: 'NC', coordinates: { lat: 34.9781, lng: -79.2256 }, category: 'Healthcare' },
  // Local Business
  { id: 'hce', name: 'HCE', location: 'Pembroke', state: 'NC', coordinates: { lat: 34.6900, lng: -79.1880 }, category: 'Local Business' },
  { id: 'fairmont', name: 'Fairmont', location: 'Fairmont', state: 'NC', coordinates: { lat: 34.4966, lng: -79.1140 }, category: 'Local Business' },
];

// Helper: get unique client locations count
export const getClientStates = () => {
  return [...new Set(clients.map(c => c.state))];
};

// Helper functions
export const getProjectsByState = (state: string) => {
  return projects.filter(project => project.state === state);
};

export const getProjectsByType = (type: Project['type']) => {
  return projects.filter(project => project.type === type);
};

export const getProjectsByStatus = (status: Project['status']) => {
  return projects.filter(project => project.status === status);
};

export const getProjectsByServiceType = (serviceType: Project['serviceType']) => {
  return projects.filter(project => project.serviceType === serviceType);
};

export const getTotalProjectCount = () => {
  return projects.reduce((total, project) => total + project.projectCount, 0);
};

export const getOpenProjectCount = () => {
  return projects.filter(p => p.status === 'open').reduce((total, project) => total + project.projectCount, 0);
};

export const getClosedProjectCount = () => {
  return projects.filter(p => p.status === 'closed').reduce((total, project) => total + project.projectCount, 0);
};

export const getUniqueStates = () => {
  return [...new Set(projects.map(project => project.state))];
};

export const getServiceTypeBreakdown = () => {
  const breakdown = {
    'Construction Project Management': 0,
    'Engineering Services': 0,
    'Technology & Automation': 0
  };
  
  projects.forEach(project => {
    breakdown[project.serviceType] += project.projectCount;
  });
  
  return breakdown;
};
