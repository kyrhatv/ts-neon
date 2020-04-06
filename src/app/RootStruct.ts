import { NavOption } from '../components/DynamicNavbar/DynamicNavbar';

export const RootStruct: NavOption[] = [
    {
        key: 'planning',
        link: '/planning',
        iconName: 'calendar-alt',
        children: [
            {
                key: 'dashboard',
                link: '/dashboard'
                // roles: Permissions.DAYTODAY_DASHBOARD_MODULE
            },
            {
                key: 'schedules',
                link: '/schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'order',
                link: '/order'
                // roles: Permissions.ORDER_MODULE
            }
        ]
    },
    {
        key: 'timesheets',
        link: '/timesheets',
        iconName: 'clock',
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
            },
            {
                key: 'sidebar.timesheets.period',
                link: '/presence-employe/period'
                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'sidebar.timesheets.corrections',
                link: '/presence-employe/corrections'
                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'sidebar.timesheets.batch-entry',
                link: '/presence-employe/batch-entry'
                // roles: Permissions.EMPLOYEE_PRESENCE_BATCH_MODULE
            },
            {
                key: 'sidebar.timesheets.operation',
                link: '/presence-employe/history'
                // roles: Permissions.EMPLOYEE_PRESENCE_HISTORY
            }
        ]
    },
    {
        key: 'organisation',
        link: '/organisation',
        iconName: 'sitemap',
        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'employees',
                link: '/employees'
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'herarchy',
                link: '/herarchy'
            }
        ]
    },
    {
        key: 'bi',
        link: '/analyze',
        iconName: 'chart-line',
        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'bi-report-config',
                link: '/report-configuration'
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'reports',
                link: '/reports'
            }
        ]
    },
    {
        key: 'request',
        link: '/request',
        iconName: 'reply-all',
        // roles: [
        //     ...Permissions.REQUEST_LIST_MODULE,
        //     ...Permissions.REQUEST_DECLARATION_MODULE,
        //     ...Permissions.OPERATION_ABSENCE_SIMPLIFIED
        // ],
        children: [
            {
                key: 'request-list',
                link: '/request-list'
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'request-declaration',
                link: '/request-declaration'
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'declaration-abscence',
                link: '/request-declaration'
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'declaration-abscence-simplified',
                link: '/request-absence-simplified'
                // roles: Permissions.EMPLOYEE_MODULE
            }
        ]
    },
    {
        key: 'parameters',
        link: '/parameter',
        iconName: 'cog',
        // roles: Permissions.PARAMETER_MODULE
        children: []
    }
];
