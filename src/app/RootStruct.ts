import { NavOption } from '../components/DynamicNavbar/DynamicNavbar';

export const RootStruct: NavOption[] = [
    {
        key: 'planning',
        link: '/planning',
        children: [
            {
                key: 'dashboard',
                link: '/dashboard'
            },
            {
                key: 'schedules',
                link: '/schedules'
            },
            {
                key: 'lines',
                link: '/lines'
            },
            {
                key: 'replacements',
                link: '/replacements'
            }
        ]
    },

    {
        key: 'timesheets',
        link: '/timesheets',
        children: [
            {
                key: 'dashboard',
                link: '/dashboard'
            },
            {
                key: 'summary',
                link: '/summary'
            },
            {
                key: 'details',
                link: '/details'
            }
        ]
    }
];
