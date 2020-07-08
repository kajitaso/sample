export namespace TextConsts {

    export const ARTICLE_ABOUT = {
        title : "about",
        text: "このサイトはwebエンジニアのkajitasoのportfolioサイトです。gitHubも合わせてご覧ください。",
        bgColor: "#eeeeee",
        fadeIn: false
    }

    export const ARTICLE_PROFILE = {
        title : "profile",
        text: "プロフィール",
        bgColor: "#dddddd",
        fadeIn: false
    }

    export const ARTICLE_SKILL = [
        {
            title : "frontend skill",
            text: "フロントエンドはbootstrap,Jqueryを使った初歩的な画面作成から始めた。次はJavascriptのフレームワークを習得していきたいと考えている。フロントエンドはJavascriptの1択なので一つのフレームワークの知識が他でも活きて習得効率が良いためだ。またDOMのレンダリングがフロントに分担される点も見逃せない。PCのスペックが年々高くなっていくにつれて、web制作のあり方も変化していくべきだしその変化に適応したいと考えている。",
            bgColor: "#eeeeee",
            fadeIn: true,
            chartData: [
                { rank: 'bootstrap', value: 80 },
                { rank: 'JQuery', value: 80 },
                { rank: 'React.js', value: 60 },
                { rank: 'Vue.js', value: 20 },
                { rank: 'Typescript', value: 20 },
            ]
        },
        {
            title : "backend skill",
            text: "バックエンドはPHPから始めた。ベタ書からキャリアを開始したがフレームワークの案件に参画したとき、その便利さに感動した。別の案件でも使えるテンプレートな書き方に加えて、セキュリティ面の機能も簡単に実装できる。人員が流動的であるエンジニア業界はフレームワークを使用すべきであると考えた。PHP、Laravelと経験してNode.jsのexpressを学習した。PHPは将来性に不安があるため、フロントのフレームワークの経験を高めたのちは、GoやPythonの経験を摘みたいと考えている。",
            bgColor: "#dddddd",
            fadeIn: true,
            chartData: [
                { rank: 'Larabel(PHP)', value: 80 },
                { rank: 'express(Node.js)', value: 40 },
                { rank: 'Java', value: 20 },
                { rank: 'Zend(PHP)', value: 40 }
            ]
        },
        {
            title : "other skill",
            text: "OSはMacのほうが扱いやすいと考えている。 Git関係の知識はターミナルで使用することを好む、しかし差分等の閲覧はGUIを使用する。データベースはMySQL,PostgreSQLの経験が多め。",
            bgColor: "#eeeeee",
            fadeIn: true,
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
    ]
    export const QUESTION_ARRAY = [
        {
            id:1, text: "得意な工程を教えてください。" , answer: "基本設計から実装までの工程が得意です。一番好きなのは実装です。"
        },
        {
            id:2, text: "実装の時に心掛けていることはありますか。" , answer: "速さと正確さどちらも欲しいところですが、実装をする際はかならず速さを重視しています。速さは意識しないといつまでも向上しないと考えているためです。まず、要件通り動作するものを作り、その後に変数や関数整理・修正をして可読性を向上させます。"
        },
        {
            id:3, text: "速く作業するために気をつけていることはありますか" , answer: "基本的なことですが、マルチデスクトップを使用してターミナルなどをすぐに操作できる同じ場所に置いておく、などです。生活習慣では、仕事がある日限定ですが朝は7時に起床して夜は11時に就寝します。お風呂は寝る二時間前に入り入浴後はスマホの画面を見ないようにしています、食事は寝る三時間前に済ませます。朝食はコーヒーとパン1つ、昼食は血糖値が上がらないようにサラダなどにしています。夕食は制限はないです。飲み物は朝のコーヒー以外は水を飲んでいます。"
        },
        {
            id:4, text: "基本設計をする上で心掛けていることはありますか" , answer: "基本設計はあとから変更があるという前提で作成します。実装時にわかりきった質問や迷いがないように、決まっていない点はその旨を明記し、決まっている点は可能なかぎりはっきり書きます。クライアントがだれであっても理解できるように、わかりやすい単語を使用し勝手な造語を使用しないようにします。"
        },
        {
            id:5, text: "テストケースを作成する上で心掛けていることはありますか。" , answer: "項目順に実施したときに、データの設定が最も少なくなる順番に記入して早く終わるように作成します。また、主語や前提条件に関しては統一し、どうしても混同するときは明記するようにします。"
        },
    ]

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

    export const JOB_INFO = [
        {
            id:1, jobName: "既存アプリ更新に伴うのAPI更新", frontEnd: "なし", backEnd: "node.js(express)", period: "4ヶ月",
            database: "なし", chatTool: "chatwork", taskTool: "backlog", editor: "visualstudiocode", os: "MacOS", sorce: "Gitlub",
            development: "OracleMobile",
            overView: "概要1"
        },
        {
            id:2, jobName: "会計サイトの新規構築", frontEnd: "React.js", backEnd: "PHP(Larabel)", period: "7ヶ月",
            database: "PostgresSQL", chatTool: "microsoftTeam", taskTool: "Redmine", editor: "PHPstorm", os: "win10", sorce: "git,tortoiseGit",
            development: "virtualBox",
            overView: "概要2"
        },
        {
            id:3, jobName: "既存サイトのレスポンシブ対応", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP(Zend)", period: "7ヶ月",
            database: "Oracle", chatTool: "未参加", taskTool: "backlog", editor: "visualstudiocode", os: "win8", sorce: "git ",
            development: "WinSCPで放り込む",
            overView: "概要3"
        },
        {
            id:4, jobName: "印刷会社社内システム", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP(Laravel)", period: "12ヶ月",
            database: "MySQL", chatTool: "chatwork", taskTool: "google", editor: "ecripse", os: "win10", sorce: "git",
            development: "なし",
            overView: "概要4"
        },
        {
            id:5, jobName: "外回りの営業支援ツール", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不明", chatTool: "なし", taskTool: "なし", editor: "visualstudiocode", os: "win10", sorce: "なし",
            development: "WinSCPで放り込む",
            overView: "概要5"
        },
        {
            id:6, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:7, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:8, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:9, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:10, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:11, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:12, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:13, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        },
        {
            id:14, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: "11ヶ月",
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            overView: "ダミーデータ案件概要5"
        }

    ]
}