export type IntegrationCategory =
  | 'Marketing'
  | 'General'
  | 'Accounting'
  | 'Communication'
  | 'Productivity'
  | 'Core'
  | 'Commerce'
  | 'Artificial intelligence'
  | 'Developer tools'
  | 'Business intelligence'
  | 'Customer support'
  | 'Content and files'
  | 'Sales and crm'
  | 'Forms and surveys'
  | 'Human resources'
  | 'Payment processing'

export type IntegrationItem = {
  key: string
  name: string
  iconSlug?: string
  brandColor?: string
  categories: IntegrationCategory[]
}

// Core curated set. Extendable easily to 250+.
export const INTEGRATIONS: IntegrationItem[] = [
  {
    key: 'stripe',
    name: 'Stripe',
    iconSlug: 'stripe',
    brandColor: '#635BFF',
    categories: ['Payment processing'],
  },
  {
    key: 'paypal',
    name: 'PayPal',
    iconSlug: 'paypal',
    brandColor: '#0070BA',
    categories: ['Payment processing'],
  },
  {
    key: 'xero',
    name: 'Xero',
    iconSlug: 'xero',
    brandColor: '#13B5EA',
    categories: ['Accounting'],
  },
  {
    key: 'quickbooks',
    name: 'QuickBooks',
    iconSlug: 'intuitquickbooks',
    brandColor: '#2CA01C',
    categories: ['Accounting'],
  },
  {
    key: 'zoho-books',
    name: 'Zoho Books',
    iconSlug: 'zohobooks',
    brandColor: '#CC2E28',
    categories: ['Accounting'],
  },
  {
    key: 'zoho-invoice',
    name: 'Zoho Invoice',
    iconSlug: 'zoho',
    brandColor: '#CC2E28',
    categories: ['Accounting'],
  },
  {
    key: 'salesforce',
    name: 'Salesforce',
    iconSlug: 'salesforce',
    brandColor: '#00A1E0',
    categories: ['Sales and crm'],
  },
  {
    key: 'hubspot',
    name: 'HubSpot',
    iconSlug: 'hubspot',
    brandColor: '#FF7A59',
    categories: ['Sales and crm', 'Marketing'],
  },
  {
    key: 'pipedrive',
    name: 'Pipedrive',
    iconSlug: 'pipedrive',
    brandColor: '#121212',
    categories: ['Sales and crm'],
  },
  {
    key: 'zoho-crm',
    name: 'Zoho CRM',
    iconSlug: 'zohocrm',
    brandColor: '#CC2E28',
    categories: ['Sales and crm'],
  },
  {
    key: 'zendesk',
    name: 'Zendesk',
    iconSlug: 'zendesk',
    brandColor: '#03363D',
    categories: ['Customer support'],
  },
  {
    key: 'intercom',
    name: 'Intercom',
    iconSlug: 'intercom',
    brandColor: '#1F8DED',
    categories: ['Customer support'],
  },
  {
    key: 'freshdesk',
    name: 'Freshdesk',
    iconSlug: 'freshdesk',
    brandColor: '#28C78E',
    categories: ['Customer support'],
  },
  {
    key: 'slack',
    name: 'Slack',
    iconSlug: 'slack',
    brandColor: '#4A154B',
    categories: ['Communication', 'Productivity'],
  },
  {
    key: 'zoom',
    name: 'Zoom',
    iconSlug: 'zoom',
    brandColor: '#2D8CFF',
    categories: ['Communication'],
  },
  {
    key: 'telegram',
    name: 'Telegram',
    iconSlug: 'telegram',
    brandColor: '#2AABEE',
    categories: ['Communication'],
  },
  {
    key: 'whatsapp',
    name: 'WhatsApp',
    iconSlug: 'whatsapp',
    brandColor: '#25D366',
    categories: ['Communication'],
  },
  {
    key: 'twilio',
    name: 'Twilio',
    iconSlug: 'twilio',
    brandColor: '#F22F46',
    categories: ['Communication', 'Core'],
  },
  {
    key: 'mailchimp',
    name: 'Mailchimp',
    iconSlug: 'mailchimp',
    brandColor: '#FFE01B',
    categories: ['Marketing'],
  },
  {
    key: 'klaviyo',
    name: 'Klaviyo',
    iconSlug: 'klaviyo',
    brandColor: '#18C964',
    categories: ['Marketing'],
  },
  {
    key: 'sendgrid',
    name: 'SendGrid',
    iconSlug: 'sendgrid',
    brandColor: '#1A82E2',
    categories: ['Marketing'],
  },
  {
    key: 'zerobounce',
    name: 'ZeroBounce',
    iconSlug: 'zerobounce',
    brandColor: '#1E293B',
    categories: ['General', 'Marketing'],
  },
  {
    key: 'zagomail',
    name: 'Zagomail',
    iconSlug: 'zagomail',
    brandColor: '#7C3AED',
    categories: ['Marketing'],
  },
  {
    key: 'wordpress',
    name: 'WordPress',
    iconSlug: 'wordpress',
    brandColor: '#21759B',
    categories: ['Marketing', 'Content and files'],
  },
  {
    key: 'webflow',
    name: 'Webflow',
    iconSlug: 'webflow',
    brandColor: '#4353FF',
    categories: ['Marketing'],
  },
  { key: 'wix', name: 'Wix', iconSlug: 'wix', brandColor: '#0C6EFF', categories: ['Marketing'] },
  {
    key: 'squarespace',
    name: 'Squarespace',
    iconSlug: 'squarespace',
    brandColor: '#222222',
    categories: ['Marketing'],
  },
  {
    key: 'shopify',
    name: 'Shopify',
    iconSlug: 'shopify',
    brandColor: '#95BF47',
    categories: ['Commerce'],
  },
  {
    key: 'woocommerce',
    name: 'WooCommerce',
    iconSlug: 'woocommerce',
    brandColor: '#7F54B3',
    categories: ['Commerce'],
  },
  {
    key: 'google-ads',
    name: 'Google Ads',
    iconSlug: 'googleads',
    brandColor: '#4285F4',
    categories: ['Marketing'],
  },
  {
    key: 'linkedin',
    name: 'LinkedIn Ads',
    iconSlug: 'linkedin',
    brandColor: '#0A66C2',
    categories: ['Marketing'],
  },
  {
    key: 'youtube',
    name: 'YouTube',
    iconSlug: 'youtube',
    brandColor: '#FF0000',
    categories: ['Content and files', 'Marketing'],
  },
  {
    key: 'airtable',
    name: 'Airtable',
    iconSlug: 'airtable',
    brandColor: '#FFB400',
    categories: ['Productivity'],
  },
  {
    key: 'notion',
    name: 'Notion',
    iconSlug: 'notion',
    brandColor: '#111827',
    categories: ['Productivity'],
  },
  {
    key: 'monday',
    name: 'Monday.com',
    iconSlug: 'mondaydotcom',
    brandColor: '#1F7AFC',
    categories: ['Productivity'],
  },
  {
    key: 'asana',
    name: 'Asana',
    iconSlug: 'asana',
    brandColor: '#F06A6A',
    categories: ['Productivity'],
  },
  {
    key: 'trello',
    name: 'Trello',
    iconSlug: 'trello',
    brandColor: '#0079BF',
    categories: ['Productivity'],
  },
  {
    key: 'jira',
    name: 'Jira',
    iconSlug: 'jira',
    brandColor: '#2684FF',
    categories: ['Developer tools', 'Productivity'],
  },
  {
    key: 'google-drive',
    name: 'Google Drive',
    iconSlug: 'googledrive',
    brandColor: '#1A73E8',
    categories: ['Content and files'],
  },
  {
    key: 'dropbox',
    name: 'Dropbox',
    iconSlug: 'dropbox',
    brandColor: '#0061FF',
    categories: ['Content and files'],
  },
  {
    key: 'onedrive',
    name: 'OneDrive',
    iconSlug: 'microsoftonedrive',
    brandColor: '#0364B8',
    categories: ['Content and files'],
  },
  {
    key: 'calendly',
    name: 'Calendly',
    iconSlug: 'calendly',
    brandColor: '#006BFF',
    categories: ['Productivity'],
  },
  {
    key: 'caldotcom',
    name: 'Cal.com',
    iconSlug: 'caldotcom',
    brandColor: '#111827',
    categories: ['Productivity'],
  },
  {
    key: 'make',
    name: 'Make (Integromat)',
    iconSlug: 'make',
    brandColor: '#6F3FF5',
    categories: ['Developer tools'],
  },
  {
    key: 'n8n',
    name: 'n8n',
    iconSlug: 'n8n',
    brandColor: '#F46A6A',
    categories: ['Developer tools'],
  },
  {
    key: 'bubble',
    name: 'Bubble',
    iconSlug: 'bubble',
    brandColor: '#1F45FF',
    categories: ['Developer tools'],
  },
  {
    key: 'supabase',
    name: 'Supabase',
    iconSlug: 'supabase',
    brandColor: '#3ECF8E',
    categories: ['Developer tools'],
  },
  {
    key: 'zuora',
    name: 'Zuora',
    iconSlug: 'zuora',
    brandColor: '#22C55E',
    categories: ['Sales and crm', 'Accounting'],
  },
]

export const CATEGORIES: IntegrationCategory[] = [
  'All' as unknown as IntegrationCategory,
  'Marketing',
  'General',
  'Accounting',
  'Communication',
  'Productivity',
  'Core',
  'Commerce',
  'Artificial intelligence',
  'Developer tools',
  'Business intelligence',
  'Customer support',
  'Content and files',
  'Sales and crm',
  'Forms and surveys',
  'Human resources',
  'Payment processing',
]
