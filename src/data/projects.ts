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
    id: 'lac-vieux-mi',
    name: 'Lac Vieux Desert Band Project',
    location: 'Lac Vieux Desert Band',
    state: 'Michigan',
    coordinates: { lat: 46.2619, lng: -89.1456 },
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
    id: 'northern-mariana',
    name: 'Northern Mariana Islands Projects',
    location: 'Northern Mariana Islands',
    state: 'Northern Mariana Islands',
    coordinates: { lat: 15.2, lng: 145.7 },
    projectCount: 3,
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
    projectCount: 66,
    type: 'corporate',
    category: 'automation',
    serviceType: 'Technology & Automation',
    status: 'open',
    clientName: 'Pfizer',
    description: 'Business process automation tasks'
  },

  // CLOSED PROJECTS - Tribal/Government
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
