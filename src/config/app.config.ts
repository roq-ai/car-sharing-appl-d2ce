interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Car Owner', 'Customer Service Representative', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage car information',
    'Manage booking and review information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b12c78ca-c3dc-4516-b5cf-12b6d730ffb1',
};
