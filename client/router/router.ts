// router.js
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const other = [
    {
        path: "/home",
        title: "主页",
        name: "home",
        icon: "ios-home"
    },
    {
        path: "/403",
        title: "错误403",
        name: "error-403",
        icon: "alert-circled"
    },
    {
        path: "/404",
        title: "错误404",
        name: "error-404",
        icon: "alert-circled"
    },
    {
        path: "/500",
        title: "错误500",
        name: "error-500",
        icon: "alert-circled"
    }
];

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const member = [
    {
        path: "/form",
        icon: "android-checkbox",
        name: "form",
        title: "表单编辑",
        children: [
            {
                path: "/form/work-flow",
                title: "工作流",
                name: "form-work-flow",
                icon: "arrow-swap"
            },
            {
                path: "/form/article-publish",
                title: "发布文章",
                name: "form-article-publish",
                icon: "ios-home"
            }
        ]
    },
    {
        path: "/tables",
        icon: "ios-grid-view",
        title: "表格",
        name: "tables",
        children: [
            {
                path: "/tables/dragable-table",
                title: "可拖拽排序",
                icon: "arrow-move",
                name: "tables-dragable-table"
            },
            {
                path: "/tables/editable-table",
                title: "可编辑表格",
                icon: "edit",
                name: "tables-editable-table"
            }
        ]
    },
    {
        path: "/error-page",
        icon: "android-sad",
        title: "错误页面",
        name: "errorpage",
        children: [
            {
                path: "/error-page/403",
                title: "403错误",
                name: "error-page-403",
                icon: "close-circled"
            },
            {
                path: "/error-page/404",
                title: "404错误",
                name: "error-page-404",
                icon: "alert-circled"
            },
            {
                path: "/error-page/500",
                title: "500错误",
                name: "error-page-500",
                icon: "settings"
            }
        ]
    }
];

export const order = [
    {
        path: "/order",
        icon: "android-checkbox",
        name: "form",
        title: "表单编辑",
        children: [
            {
                path: "/order",
                icon: "android-checkbox",
                name: "form",
                title: "表单编辑"
            }
        ]
    }
];

export const dashboard = [
    {
        icon: "android-checkbox",
        name: "master",
        title: "系统用戶",
        children: [
            {
                path: "/master/",
                icon: "android-checkbox",
                name: "master-index",
                title: "管理员管理"
            },
            {
                path: "/master/role/",
                icon: "android-checkbox",
                name: "master-role",
                title: "角色管理"
            },
            {
                path: "/master/log/",
                icon: "android-checkbox",
                name: "master-log",
                title: "管理日志"
            }
        ]
    },
    {
        icon: "android-checkbox",
        name: "website",
        title: "站点管理",
        children: [
            {
                path: "/website/",
                icon: "android-checkbox",
                name: "website-index",
                title: "站点管理"
            }
        ]
    }
];
