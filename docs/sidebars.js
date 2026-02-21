/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const BAD_PATH = '../[object Object]/';
const API_PATH = 'api/';

/**
 * Исправляет doc id в сайдбаре TypeDoc (плагин подставляет [object Object] вместо пути).
 * @param {unknown} items
 * @returns {unknown}
 */
function fixTypedocSidebarIds(items) {
  if (!Array.isArray(items)) return items;
  return items.map((item) => {
    if (item.type === 'doc' && typeof item.id === 'string') {
      return { ...item, id: item.id.replace(BAD_PATH, API_PATH) };
    }
    if (item.items) {
      return { ...item, items: fixTypedocSidebarIds(item.items) };
    }
    return item;
  });
}

let typedocSidebarItems = [];
try {
  const path = require('path');
  const sidebarPath = path.join(__dirname, '[object Object]', 'typedoc-sidebar.cjs');
  const typedocSidebar = require(sidebarPath);
  typedocSidebarItems = fixTypedocSidebarIds(typedocSidebar);
} catch (_) {
  // при первой загрузке или без билда TypeDoc сайдбар может отсутствовать
}

const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'API Reference',
      link: { type: 'doc', id: 'api' },
      items: typedocSidebarItems,
    },
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
