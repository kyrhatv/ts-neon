import { NavOption } from '../utils/RootStructInterface';

export const RootStruct: NavOption[] = [
    {
        key: 'features.planning.title',
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
                key: 'features.planning.dashboard',
                link: '/dashboard',
                subCategoryId: 'schedules'
                // roles: Permissions.DAYTODAY_DASHBOARD_MODULE
            },
            {
                key: 'features.planning.schedules',
                link: '/schedules',
                subCategoryId: 'schedules'
                //roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'features.planning.lines',
                link: '/lines',
                subCategoryId: 'schedules'
                //roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'features.planning.replacements',
                link: '/replacements',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'features.planning.replacementsByEmployee',
                link: '/replacementsByEmployee',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'features.planning.quartRequirements',
                link: '/quartRequirements',
                subCategoryId: 'schedules'
                //                roles: Permissions.DAYTODAY_SCHEDULER_MODULE
            },
            {
                key: 'features.planning.masterSchedules',
                link: '/masterSchedules',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'features.planning.order',
                link: '/order',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'features.planning.positions',
                link: '/positions',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            },
            {
                key: 'features.planning.project',
                link: '/project',
                subCategoryId: 'scheduleProccess'
                // roles: Permissions.ORDER_MODULE
            }
        ]
    },
    {
        key: 'features.timesheets.title',
        link: '/timesheets',
        iconName: 'clock',
        hasSubCategories: false,
        subCategories: null,
        children: [
            {
                key: 'features.timesheets.dashboard',
                link: '/dashboard',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.summary',
                link: '/summary',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.details',
                link: '/details',
                subCategoryId: null
            },
            {
                key: 'features.timesheets.period',
                link: '/presence-employe/period',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'features.timesheets.correction',
                link: '/presence-employe/corrections',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_MODULE
            },
            {
                key: 'features.timesheets.batchEntry',
                link: '/presence-employe/batch-entry',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_BATCH_MODULE
            },
            {
                key: 'features.timesheets.history',
                link: '/presence-employe/history',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_PRESENCE_HISTORY
            }
        ]
    },
    {
        key: 'features.organisation.title',
        link: '/organisation',
        iconName: 'sitemap',
        hasSubCategories: false,
        subCategories: null,

        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'features.organisation.employees',
                link: '/employees',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'features.organisation.hierarchy',
                link: '/herarchy',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'features.analyze.title',
        link: '/analyze',
        iconName: 'chart-line',
        hasSubCategories: false,
        subCategories: null,

        // roles: [...Permissions.EMPLOYEE_MODULE, ...Permissions.HIERARCHY_MODULE],
        children: [
            {
                key: 'features.analyze.publication',
                link: '/report-configuration',
                subCategoryId: null

                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'features.analyze.reports',
                link: '/reports',
                subCategoryId: null
            }
        ]
    },
    {
        key: 'features.request.title',
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
                key: 'features.request.list',
                link: '/request-list',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'features.request.declaration',
                link: '/request-declaration',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'features.request.declaration',
                link: '/request-declaration',
                subCategoryId: null
                // roles: Permissions.EMPLOYEE_MODULE
            },
            {
                key: 'features.request.simplifiedAbscence',
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
