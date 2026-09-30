export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  priceStarting: string;
  estimatedTime: string;
  iconName: string;
  image: string;
  features: string[];
  isPopular?: boolean;
  isEmergency?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  serviceUsed: string;
  verified: boolean;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  zone: string;
  status: 'Active' | 'Fast Coverage' | '24/7 Available';
  avgResponseTime: string;
  coordinates: { x: number; y: number };
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  problemDescription: string;
  isUrgent: boolean;
}
