export interface HeaderContent {
  logoSrc: string
  title: string
  subtitle: string
  ctaLabel: string
  menuAriaLabel: string
}

export interface AppointmentContent {
  avatarSrc: string
  heading: string
  doctorName: string
  statusDot: string
  statusColorClass: string
  time: string
  location: string
  bellEmoji: string
}

export interface TabItem {
  key: string
  label: string
  icon: string
}

export interface ActionItem {
  iconBg: string
  iconEmoji: string
  title: string
  subtitle: string
}

export interface CampaignItem {
  badge: string
  title: string
  description: string
  image: string
}

export interface CampaignsContent {
  sectionTitle: string
  seeMoreLabel: string
  items: CampaignItem[]
}

export interface SpecialistItem {
  avatar: string
  name: string
  title: string
  rating: number
}

export interface SpecialistsContent {
  sectionTitle: string
  seeMoreLabel: string
  items: SpecialistItem[]
}

export interface DepartmentItem {
  image: string
  title: string
}

export interface DepartmentsContent {
  sectionTitle: string
  seeMoreLabel: string
  items: DepartmentItem[]
}

export interface AppContent {
  header: HeaderContent
  appointment: AppointmentContent
  whatAreYouLookingForTitle: string
  actions: ActionItem[]
  campaigns: CampaignsContent
  specialists: SpecialistsContent
  departments: DepartmentsContent
  tabs: TabItem[]
}

export const useContent = () =>
  useAsyncData<AppContent>('content', () => $fetch('/api/content/home'))


