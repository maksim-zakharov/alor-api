/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    'api',
    {
      type: 'category',
      label: 'Сервисы',
      link: {
        type: 'generated-index',
        title: 'Сервисы Alor API',
        description: 'Каждый сервис соответствует части Alor Open API. Доступ через экземпляр api: api.auth, api.clientInfo, api.orders и т.д.',
        slug: '/services',
      },
      items: [
        'services/auth',
        'services/client-info',
        'services/instruments',
        'services/orders',
        'services/stop-orders',
        'services/order-groups',
        'services/subscriptions',
        'services/orders-wss',
      ],
    },
  ],
};

module.exports = sidebars;
