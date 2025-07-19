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
  type: 'tribal' | 'sensitive' | 'corporate' | 'government';
  category: 'remote' | 'infrastructure' | 'automation' | 'communications';
  status: 'active' | 'completed' | 'planning';
  securityLevel: 'public' | 'restricted' | 'classified';
  clientName?: string; // Only for corporate/government with public security level
  description?: string;
}

export const projects: Project[] = [
  // Alaska - Remote/Tribal Projects
  {
    id: 'atka-ak',
    name: 'Atka Remote Operations',
    location: 'Atka',
    state: 'Alaska',
    coordinates: { lat: 52.2322, lng: -174.2064 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'chefornak-ak',
    name: 'Chefornak Infrastructure',
    location: 'Chefornak',
    state: 'Alaska',
    coordinates: { lat: 60.1492, lng: -164.2856 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'fort-yukon-ak',
    name: 'Fort Yukon Operations',
    location: 'Fort Yukon',
    state: 'Alaska',
    coordinates: { lat: 66.5694, lng: -145.2736 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'huslia-ak',
    name: 'Huslia Village Project',
    location: 'Huslia Village',
    state: 'Alaska',
    coordinates: { lat: 65.6981, lng: -156.3931 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'kaltag-ak',
    name: 'Kaltag Remote Station',
    location: 'Kaltag',
    state: 'Alaska',
    coordinates: { lat: 64.3189, lng: -158.7267 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'ketchikan-ak',
    name: 'Ketchikan Community Project',
    location: 'Ketchikan Indian Community',
    state: 'Alaska',
    coordinates: { lat: 55.3422, lng: -131.6461 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'knik-ak',
    name: 'Knik Tribe Operations',
    location: 'Knik Tribe',
    state: 'Alaska',
    coordinates: { lat: 61.5181, lng: -149.6444 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'planning',
    securityLevel: 'restricted'
  },
  {
    id: 'manley-ak',
    name: 'Manley Village Project',
    location: 'Manley Village Council',
    state: 'Alaska',
    coordinates: { lat: 64.9975, lng: -150.6403 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'buckland-ak',
    name: 'Buckland Operations',
    location: 'Native Village of Buckland',
    state: 'Alaska',
    coordinates: { lat: 65.9814, lng: -161.1489 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'chuathbaluk-ak',
    name: 'Chuathbaluk Project',
    location: 'Native Village of Chuathbaluk',
    state: 'Alaska',
    coordinates: { lat: 61.5781, lng: -159.2156 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'gakona-ak',
    name: 'Gakona Operations',
    location: 'Native Village of Gakona',
    state: 'Alaska',
    coordinates: { lat: 62.3069, lng: -145.3181 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'solomon-ak',
    name: 'Solomon Remote Station',
    location: 'Native Village of Solomon',
    state: 'Alaska',
    coordinates: { lat: 64.5631, lng: -164.4339 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'kake-ak',
    name: 'Kake Village Project',
    location: 'Organized Village of Kake',
    state: 'Alaska',
    coordinates: { lat: 56.9719, lng: -133.9453 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'anvik-ak',
    name: 'Anvik Operations',
    location: 'Anvik',
    state: 'Alaska',
    coordinates: { lat: 62.6467, lng: -160.1089 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'chalkitsik-ak',
    name: 'Chalkitsik Project',
    location: 'Chalkitsik',
    state: 'Alaska',
    coordinates: { lat: 66.6444, lng: -143.7278 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'circle-ak',
    name: 'Circle Remote Station',
    location: 'Circle',
    state: 'Alaska',
    coordinates: { lat: 65.8275, lng: -144.0647 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'eagle-ak',
    name: 'Eagle Operations',
    location: 'Eagle',
    state: 'Alaska',
    coordinates: { lat: 64.7881, lng: -141.2019 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'planning',
    securityLevel: 'restricted'
  },
  {
    id: 'minto-ak',
    name: 'Minto Village Project',
    location: 'Minto',
    state: 'Alaska',
    coordinates: { lat: 65.1431, lng: -149.3706 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'nenana-ak',
    name: 'Nenana Operations',
    location: 'Nenana',
    state: 'Alaska',
    coordinates: { lat: 64.5639, lng: -149.0939 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'rampart-ak',
    name: 'Rampart Remote Station',
    location: 'Rampart',
    state: 'Alaska',
    coordinates: { lat: 65.5097, lng: -150.1411 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'shageluk-ak',
    name: 'Shageluk Project',
    location: 'Shageluk',
    state: 'Alaska',
    coordinates: { lat: 62.6925, lng: -159.5689 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'tanacross-ak',
    name: 'Tanacross Operations',
    location: 'Tanacross',
    state: 'Alaska',
    coordinates: { lat: 63.3889, lng: -143.3456 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'active',
    securityLevel: 'restricted'
  },

  // Other States - Tribal Projects
  {
    id: 'crow-mt',
    name: 'Crow Nation Project',
    location: 'Crow Nation',
    state: 'Montana',
    coordinates: { lat: 45.5347, lng: -107.9403 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'gila-river-az',
    name: 'Gila River Operations',
    location: 'Gila River',
    state: 'Arizona',
    coordinates: { lat: 33.2456, lng: -111.7847 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'lac-vieux-mi',
    name: 'Lac Vieux Desert Project',
    location: 'Lac Vieux Desert Band',
    state: 'Michigan',
    coordinates: { lat: 46.2619, lng: -89.1456 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'little-traverse-mi',
    name: 'Little Traverse Bay Operations',
    location: 'Little Traverse Bay Bands',
    state: 'Michigan',
    coordinates: { lat: 45.3694, lng: -84.9544 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'prairie-band-ks',
    name: 'Prairie Band Potawatomi Project',
    location: 'Prairie Band Potawatomi Nation',
    state: 'Kansas',
    coordinates: { lat: 39.3644, lng: -95.8019 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'zuni-nm',
    name: 'Pueblo of Zuni Operations',
    location: 'Pueblo of Zuni',
    state: 'New Mexico',
    coordinates: { lat: 35.0719, lng: -108.8506 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'quinault-wa',
    name: 'Quinault Nation Project',
    location: 'Quinault Indian Nation',
    state: 'Washington',
    coordinates: { lat: 47.1431, lng: -124.2581 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'red-cliff-wi',
    name: 'Red Cliff Band Operations',
    location: 'Red Cliff Band',
    state: 'Wisconsin',
    coordinates: { lat: 46.8456, lng: -90.8181 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'red-lake-mn',
    name: 'Red Lake Band Project',
    location: 'Red Lake Band',
    state: 'Minnesota',
    coordinates: { lat: 47.8744, lng: -95.0181 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'sac-fox-ks',
    name: 'Sac and Fox Nation Operations',
    location: 'Sac and Fox Nation',
    state: 'Kansas',
    coordinates: { lat: 39.7456, lng: -95.3181 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'salt-river-az',
    name: 'Salt River Pima-Maricopa Project',
    location: 'Salt River Pima-Maricopa',
    state: 'Arizona',
    coordinates: { lat: 33.5456, lng: -111.8847 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'seminole-ok',
    name: 'Seminole Nation Operations',
    location: 'Seminole Nation',
    state: 'Oklahoma',
    coordinates: { lat: 35.2456, lng: -96.6847 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'seneca-cayuga-ok',
    name: 'Seneca-Cayuga Nation Project',
    location: 'Seneca-Cayuga Nation',
    state: 'Oklahoma',
    coordinates: { lat: 36.8456, lng: -94.8847 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'spokane-wa',
    name: 'Spokane Tribe Operations',
    location: 'Spokane Tribe',
    state: 'Washington',
    coordinates: { lat: 47.9456, lng: -118.0847 },
    projectCount: 1,
    type: 'tribal',
    category: 'communications',
    status: 'completed',
    securityLevel: 'restricted'
  },
  {
    id: 'winnebago-ne',
    name: 'Winnebago Tribe Project',
    location: 'Winnebago Tribe',
    state: 'Nebraska',
    coordinates: { lat: 42.2456, lng: -96.4847 },
    projectCount: 1,
    type: 'tribal',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'restricted'
  },
  {
    id: 'yurok-ca',
    name: 'Yurok Tribe Operations',
    location: 'Yurok Tribe',
    state: 'California',
    coordinates: { lat: 41.5456, lng: -124.0847 },
    projectCount: 1,
    type: 'tribal',
    category: 'remote',
    status: 'completed',
    securityLevel: 'restricted'
  },

  // Sensitive Locations
  {
    id: 'northern-mariana',
    name: 'Northern Mariana Operations',
    location: 'Northern Mariana Islands',
    state: 'Northern Mariana Islands',
    coordinates: { lat: 15.2, lng: 145.7 },
    projectCount: 3,
    type: 'sensitive',
    category: 'communications',
    status: 'active',
    securityLevel: 'classified'
  },
  {
    id: 'lafourche-la',
    name: 'Lafourche Parish Operations',
    location: 'Lafourche Parish',
    state: 'Louisiana',
    coordinates: { lat: 29.5456, lng: -90.4847 },
    projectCount: 1,
    type: 'sensitive',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'classified'
  },

  // Corporate/Government Projects
  {
    id: 'pfizer-wa',
    name: 'Pfizer Automation Center',
    location: 'Bothell',
    state: 'Washington',
    coordinates: { lat: 47.7544, lng: -122.2056 },
    projectCount: 66,
    type: 'corporate',
    category: 'automation',
    status: 'active',
    securityLevel: 'public',
    clientName: 'Pfizer',
    description: 'Business process automation and facility optimization'
  },
  {
    id: 'wcgi-pembroke-nc',
    name: 'WCGi Pembroke Operations',
    location: 'Pembroke',
    state: 'North Carolina',
    coordinates: { lat: 34.6831, lng: -79.1956 },
    projectCount: 3,
    type: 'corporate',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'public',
    clientName: 'WCGi'
  },
  {
    id: 'wcgi-fayetteville-nc',
    name: 'WCGi Fayetteville Project',
    location: 'Fayetteville',
    state: 'North Carolina',
    coordinates: { lat: 35.0527, lng: -78.8784 },
    projectCount: 1,
    type: 'corporate',
    category: 'infrastructure',
    status: 'completed',
    securityLevel: 'public',
    clientName: 'WCGi'
  },
  {
    id: 'wcgi-raeford-nc',
    name: 'WCGi Raeford Operations',
    location: 'Raeford',
    state: 'North Carolina',
    coordinates: { lat: 34.9781, lng: -79.2256 },
    projectCount: 1,
    type: 'corporate',
    category: 'infrastructure',
    status: 'active',
    securityLevel: 'public',
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

export const getProjectsBySecurityLevel = (level: Project['securityLevel']) => {
  return projects.filter(project => project.securityLevel === level);
};

export const getTotalProjectCount = () => {
  return projects.reduce((total, project) => total + project.projectCount, 0);
};

export const getUniqueStates = () => {
  return [...new Set(projects.map(project => project.state))];
};
