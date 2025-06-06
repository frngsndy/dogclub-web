import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Nfts', route: '/dashboard/nfts' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth',
          children: [
            { label: 'Sign up', route: '/auth/sign-up' },
            { label: 'Sign in', route: '/auth/sign-in' },
            { label: 'Forgot Password', route: '/auth/forgot-password' },
            { label: 'New Password', route: '/auth/new-password' },
            { label: 'Two Steps', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Errors',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Components',
          route: '/components',
          children: [{ label: 'Table', route: '/components/table' }],
        },
      ]
    },
    {
      group: 'My Work',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Money',
          route: '/money',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Demo',
          route: '/demo',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'AG Grid',
          route: '/ag-grid',
        },
      ],
    },
    {
      group: 'TTP',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'รายงาน จำนวนสัตว์',
          route: '/report/animal',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'รายงาน จำนวนลูกค้า',
          route: '/report/customer',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'รายงาน Forecast',
          route: '/report/forecast',
        },
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'Strava',
          route: '/report/strava',
        }
      ],
    },
    {
      group: 'Google Sheets',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/view-grid.svg',
          label: 'MyFriends',
          route: '/myfriends',
        }
      ],
    },
    // {
    //   group: 'Collaboration',
    //   separator: true,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/download.svg',
    //       label: 'Download',
    //       route: '/download',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/gift.svg',
    //       label: 'Gift Card',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/users.svg',
    //       label: 'Users',
    //       route: '/users',
    //     },
    //   ],
    // },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/heroicons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
