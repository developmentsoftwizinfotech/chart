// import { NbMenuItem } from '@nebular/theme';


// export const MENU_ITEMS: NbMenuItem[] = [

//   {
//     title: 'Dashboard',
//     icon: 'home-outline',
//     link: '/pages/dashboard-menu-management/dashboard',
//     home: true,
//   },
//   {
//     icon: 'shopping-cart-outline',
//     title: 'Voyage',
//     children: [
//       {
//         title: 'Voyage Web',
//         link: '/pages/voyage/voyage-list',
//       },
//       // {
//       //   title: 'Voyage Desktop',
//       //   link: '/pages/voyage/voyage-Web',
//       // },
//       {
//         title: 'Voyage Merge',
//         link: '/pages/voyage/voyage-merge-list',
//       },
//       {
//         title: 'Voyage Annual Budget',
//         link: '/pages/voyage/voyage-budget',
//       },
//       {
//         title: 'Visit Report',
//         link: '/pages/voyage/visit-report',
//       },
//     ]
//   },

//   {
//     title: 'Hold Cleaning',
//     icon: 'layers-outline',
//     link: '/pages/holdCleaningManagement/hold-cleaning',
//   },
//   // {
//   //   icon: 'browser-outline',
//   //   title: 'Hold Cleaning',
//   //   link: '/pages/cleaning-stages',
//   // },


//   // {
//   //   title: 'FEATURES',
//   //   group: true,
//   // },
//   {
//     title: 'Inventory',
//     icon: 'layout-outline',
//     children: [
//       {
//         title: 'Vendor Cost Budget',
//         link: '/pages/inventory/vendor-cost-budget',
//       },
//       {
//         title: 'Vessel Inventory',
//         link: '/pages/inventory/vessel-inventory',
//       },
//       {
//         title: 'Requisition',
//         link: '/pages/inventory/requisition',
//       },
//       {
//         title: 'Vendor ',
//         link: '/pages/inventory/vendor',
//       },
//       {
//         title: 'Category',
//         link: '/pages/inventory/category',
//       },
//       {
//         title: 'Sub-Category',
//         link: '/pages/inventory/sub-category',
//       },
//       {
//         title: 'Product',
//         link: '/pages/inventory/product',
//       },
//     ],
//   },
//   {
//     title: 'Reports',
//     icon: 'edit-2-outline',
//     children: [
//       {
//         title: 'Hold Cleaning Cost',
//         link: '/pages/report/hcc-reports',
//       },
//       {
//         title: 'Vendor Cost',
//         link: '/pages/report/vendor-cost-reports',
//       },

//     ],
//   },
//   {
//     title: 'Voyage Analysis',
//     icon: 'keypad-outline',
//     // link: '/pages/ui-features',
//     children: [
//       {
//         title: 'Monthly Analysis',
//         link: '/pages/voyage-analysis/monthly-analysis',
//       },
//     ],
//   },
//   {
//     title: 'Vendor Analysis',
//     icon: 'keypad-outline',
//     // link: '/pages/ui-features',
//     children: [
//       {
//         title: 'Graph Analysis',
//         link: '/pages/vendor-analysis/graph-analysis',
//       },
//       {
//         title: 'Monthly Analysis',
//         link: '/pages/vendor-analysis/vendor-analysis',
//       },
//       {
//         title: 'Category Wise Analysis',
//         link: '/pages/vendor-analysis/category-wise-analysis',
//       },

//     ],
//   },
//   // holdCleaningManagement

//   {
//     title: 'Circulars',
//     icon: 'archive-outline',
//     link: '/pages/circular/circular',
//     // children: [
//     // {
//     //   title: 'Circulars-list',
//     //   link: '/pages/circular',
//     // },
//     //   {
//     //     title: 'Window',
//     //     link: '/pages/modal-overlays/window',
//     //   },
//     //   {
//     //     title: 'Popover',
//     //     link: '/pages/modal-overlays/popover',
//     //   },
//     //   {
//     //     title: 'Toastr',
//     //     link: '/pages/modal-overlays/toastr',
//     //   },
//     //   {
//     //     title: 'Tooltip',
//     //     link: '/pages/modal-overlays/tooltip',
//     //   },
//     // ],
//   },
//   {
//     title: 'Set Matrix',
//     icon: 'folder-outline',
//     children: [
//       {
//         title: 'Cleaning Matrix',
//         link: '/pages/set-matrix/cleaning-matrix-list',
//       },
//       {
//         title: 'Cleaning Stages',
//         link: '/pages/set-matrix/cleaning-stages',
//       },
//       {
//         title: 'Cargo List',
//         link: '/pages/set-matrix/cargo',
//       },
//     ]
//   },
//   {
//     title: 'Master List',
//     icon: 'browser-outline',
//     children: [
//       {
//         title: 'Applicability',
//         link: '/pages/master-list/applicability',
//       },
//       {
//         title: 'Charterer',
//         // icon: 'home-outline',
//         link: '/pages/master-list/charterer',
//       },
//       {
//         title: 'Circular Category ',
//         // icon: 'browser-outline',
//         link: '/pages/master-list/circular-category',
//       },

//       {
//         title: 'Country',
//         link: '/pages/master-list/country',
//       },


//       {
//         // icon: 'shopping-cart-outline',
//         title: 'Fleet Name',
//         link: '/pages/master-list/fleet-name',
//       },

//       {
//         // icon: 'shopping-cart-outline',
//         title: 'Fleet Type',
//         link: '/pages/master-list/fleet-type',
//       },
//       {
//         title: 'Maker',
//         link: '/pages/master-list/maker',
//       },

//       {
//         title: 'Opr Type',
//         link: '/pages/master-list/opr-type',
//       },
//       {
//         title: 'Port',
//         link: '/pages/master-list/port',
//       },
//       // {
//       //   title: 'Role',
//       //   link: '/pages/master-list/role',
//       // },

//       {
//         title: 'Shore Hour Advisory',
//         link: '/pages/master-list/sha',
//       },
//       {
//         title: 'Shore Cleaning Gang',
//         link: '/pages/master-list/shoreClening',
//       },

//       {
//         title: 'Status',
//         link: '/pages/master-list/status',
//       },
//       {
//         title: 'Supply Type',
//         link: '/pages/master-list/supply-type',
//       },
//       {

//         title: 'Unit',
//         link: '/pages/master-list/unit',
//       },
//       {
//         // icon: 'list-outline',
//         title: 'Vessel',
//         link: '/pages/master-list/vessel',
//       },
//       {
//         // icon: 'list-outline',
//         title: 'Vessel Operator',
//         link: '/pages/master-list/operator',
//       },
//       {
//         title: 'Vessel Visitor',
//         link: '/pages/master-list/visitor',
//       },



//       // {
//       //   title: 'Opr Type Name',
//       //   link: '/pages/master-list/opr-type-name',
//       // },

//       //
//       // {
//       //   path: 'vessel',
//       //   component: VesselListComponent,
//       // },{
//       //   path: 'operator',
//       //   component: OperatorListComponent,
//       // },{
//       //   path: 'charterer',
//       //   component: ChartererListComponent,
//       // },
//       // {
//       //   path: 'circular',
//       //   component: CircularListComponent,
//       // },





//       // {
//       //   path: 'opr-type',
//       //   component: OprTypeListComponent,
//       // },
//       // {
//       //   path: 'opr-type-name',
//       // {
//       //   title: 'Calendar',
//       //   link: '/pages/extra-components/calendar',
//       // },
//       // {
//       //   title: 'Progress Bar',
//       //   link: '/pages/extra-components/progress-bar',
//       // },
//       // {
//       //   title: 'Spinner',
//       //   link: '/pages/extra-components/spinner',
//       // },
//       // {
//       //   title: 'Alert',
//       //   link: '/pages/extra-components/alert',
//       // },
//       // {
//       //   title: 'Calendar Kit',
//       //   link: '/pages/extra-components/calendar-kit',
//       // },
//       // {
//       //   title: 'Chat',
//       //   link: '/pages/extra-components/chat',
//       // },
//     ],
//   },
//   // {
//   //   title: 'Import/Export',
//   //   icon: 'swap-outline',
//   //   children: [
//   //     {
//   //       title: 'Import/Export',
//   //       icon: 'swap-outline',
//   //       link: '/pages/document/master-docs',
//   //     },
//   //   ]
//   // },
//   {
//     title: 'Import/Export',
//     icon: 'swap-outline',
//     link: '/pages/document/master-docs',
//   },
//   // {
//   //   title: 'Settings',
//   //   icon: 'message-circle-outline',
//   //     // children: [
//   //     //   {
//   //     //     title: 'Master-Docs',
//   //     //     link: '/pages/settings/master-docs',
//   //     //   },
//   //     //   {
//   //     //     title: 'Inventory-Docs',
//   //     //     link: '/pages/settings/inventory-docs',
//   //     //   },
//   //     // ]
//   // },
//   {
//     title: 'Help',
//     icon: 'map-outline',
//     // children: [
//     //   {
//     //     title: 'Google Maps',
//     //     link: '/pages/maps/gmaps',
//     //   },
//     //   {
//     //     title: 'Leaflet Maps',
//     //     link: '/pages/maps/leaflet',
//     //   },
//     //   {
//     //     title: 'Bubble Maps',
//     //     link: '/pages/maps/bubble',
//     //   },
//     //   {
//     //     title: 'Search Maps',
//     //     link: '/pages/maps/searchmap',
//     //   },
//     // ],
//   },
//   // {
//   //   title: 'Charts',
//   //   icon: 'map-outline',
//   //   children: [
//   //     {
//   //       title: 'Chartjs',
//   //       link: '/pages/charts/chartjs',
//   //     },
//   //     {
//   //       title: 'D3',
//   //       link: '/pages/charts/d3',
//   //     },
//   //     {
//   //       title: 'Bubble Maps',
//   //       link: '/pages/charts/echarts',
//   //     },

//   //   ],
//   // },
//   {
//     title: `Version: ${environment.version}`, // You can dynamically generate this based on your application's version
//     icon: 'info-outline',
//     // link: '/version',
//   }

// ];


// export const VENDOR_MENU: NbMenuItem[] = [

//   {
//     title: 'Inventory',
//     icon: 'layout-outline',
//     children: [
//       // {
//       //   title: 'Vessel Inventory',
//       //   link: '/pages/inventory/vessel-inventory',
//       // },
//       {
//         title: 'Vendor Requisition',
//         link: '/pages/inventory/vendor-requisition',
//       },

//       // {
//       //   title: 'Equipment ',
//       //   link: '/pages/inventory/equipment',
//       // },
//       // {
//       //   title: 'Equipment Category',
//       //   link: '/pages/inventory/equipment-category',
//       // },




//     ],
//   },

// ]
