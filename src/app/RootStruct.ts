import { NavOption } from '../hs-interfaces/Root-Struct';

export const RootStruct: NavOption[] = [
    {
        key: 'planning',
        link: '/planning',
        iconName: 'calendar-alt',
        hasSubCategories: true,
        subCategories: [
            {
                categoryId: 'schedules',
                sortOrder: 0
            },
            {
                categoryId: 'scheduleProccess',
                sortOrder: 1
            }
        ],
        children: [
            {
                key: 'dashboard',
                link: '/dashboard',
                subCategoryId: 'schedules'
                // roles: Permissions.DAYTODAY_DASHBOARD_MODULE
            },
            {
                key: 'schedules',
                link: '/schedules',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'lines',
                link: '/lines',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'replacements',
                link: '/replacements',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'replacementsByEmployee',
                link: '/replacementsByEmployee',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'quartRequirements',
                link: '/quartRequirements',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'masterSchedules',
                link: '/masterSchedules',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'order',
                link: '/order',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'positions',
                link: '/positions',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'project',
                link: '/project',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            }
        ]
    },
    {
        key: 'timesheets',
        link: '/timesheets',
        iconName: 'clock',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'dashboard',
                link: '/dashboard',
                subCategoryId: null
            },
            {
                key: 'summary',
                link: '/summary',
                subCategoryId: null
            },
            {
                key: 'details',
                link: '/details',
                subCategoryId: null
            },
            {
                key: 'period',
                link: '/presence-employe/period',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'correction',
                link: '/presence-employe/corrections',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'batchEntry',
                link: '/presence-employe/batch-entry',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_BATCH_MODULE
            },
            {
                key: 'history',
                link: '/presence-employe/history',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_HISTORY
            }
        ]
    },
    {
        key: 'organisation',
        link: '/organisation',
        iconName: 'sitemap',
        hasSubCategories: false,
        subCategories: null,

        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'employees',
                link: '/employees',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'hierarchy',
                link: '/herarchy',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'analyze',
        link: '/analyze',
        iconName: 'chart-line',
        hasSubCategories: false,
        subCategories: null,

        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'publication',
                link: '/report-configuration',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'reports',
                link: '/reports',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'request',
        link: '/request',
        iconName: 'reply-all',
        hasSubCategories: false,
        subCategories: null,

        // roles: [
        //     ...Permissions.REQUEST_LIST_MODULE,
        //     ...Permissions.REQUEST_DECLARATION_MODULE,
        //     ...Permissions.OPERATION_ABSENCE_SIMPLIFIED
        // ],
        children: [
            {
                key: 'list',
                link: '/request-list',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'declaration',
                link: '/request-declaration',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'declaration',
                link: '/request-declaration',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'simplifiedAbscence',
                link: '/request-absence-simplified',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            }
        ]
    },
    {
        key: 'parameters',
        link: '/parameter',
        iconName: 'cog',
        hasSubCategories: false,
        subCategories: null,

        // roles: Permissions.PARAMETER_MODULE
        children: []
    }
];
