export namespace TextConsts {

    export const ARTICLE_ABOUT = {
        title : "about",
        text: "このサイトはwebエンジニアのkajitasoのportfolioサイトです。gitHubも合わせてご覧ください。",
        bgColor: "#eeeeee"
    }

    export const ARTICLE_PROFILE = {
        title : "profile",
        text: "プロフィール",
        bgColor: "#dddddd"
    }

    export const ARTICLE_FRONTEND = {
        title : "frontend skill",
        text: "フロントエンドの経験",
        bgColor: "#eeeeee",
        chartData: [
            { rank: 'bootstrap', value: 80 },
            { rank: 'JQuery', value: 80 },
            { rank: 'React.js', value: 60 },
            { rank: 'Vue.js', value: 20 },
            { rank: 'Typescript', value: 20 },
        ]
    }

    export const ARTICLE_BACKEND = {
        title : "backend skill",
        text: "バックエンドの経験",
        bgColor: "#dddddd",
        chartData: [
            { rank: 'Larabel(PHP)', value: 80 },
            { rank: 'express(Node.js)', value: 40 },
            { rank: 'Java', value: 20 },
            { rank: 'Zend(PHP)', value: 40 }
        ]
    }

    export const ARTICLE_OTHER = {
        title : "other skill",
        text: "その他の経験",
        bgColor: "#eeeeee",
        chartData: [
            { rank: 'Redmine', value: 40 },
            { rank: 'backlog', value: 60 },
            { rank: 'chatwork', value: 60 },
            { rank: 'MacOs', value: 60 },
            { rank: 'Windows10', value: 80 },
            { rank: 'git', value: 80 },
            { rank: 'virtualBox', value: 60 },
            { rank: 'Oracle', value: 20 },
            { rank: 'MySQL', value: 60 },
            { rank: 'PostgreSQL', value: 40 },
            { rank: 'VSCode', value: 60 },
            { rank: 'phpstorm', value: 40 },
        ]
    }

    export const FOOTER_TEXT = {
        text: "Copyright kajitaso All Rights Reserved"
    }

    export const PROFILE_DATA = [
        {
            id:1, header: "年齢" , data: "30代"
        },
        {
            id:2, header: "居住地" , data: "東京都"
        },
        {
            id:3, header: "性別" , data: "男"
        },
        {
            id:4, header: "得意分野" , data: "フロントエンド、バックエンド"
        },
        {
            id:5, header: "メールアドレス" , data: "zankuzanku@icloud.com"
        }
    ]
}