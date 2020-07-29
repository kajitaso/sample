export namespace TextConsts {

    export const ARTICLE_ABOUT = {
        title : "about",
        text: "このサイトはwebエンジニアのkajitasoのportfolioサイトです。gitHubも合わせてご覧ください。",
        bgColor: "#eeeeee",
        fadeIn: true
    }

    export const ARTICLE_PROFILE = {
        title : "profile",
        text: "プロフィール",
        bgColor: "#dddddd",
        fadeIn: true
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
            id:1, jobName: "既存アプリ更新に伴うのAPI更新", frontEnd: "なし", backEnd: "node.js(express)", period: 4,
            database: "なし", chatTool: "chatwork", taskTool: "backlog", editor: "visualstudiocode", os: "MacOS", sorce: "Gitlub",
            development: "OracleMobile",
            detail1: "他社協力会社が開発したインターフェースを自社向けにAPIで調節する",
            detail2: "クラウド上にAPIを展開し、レスポンス時間が一定基準を超えないように調整する",
            detail3: "テスター用の固定のレスポンスを作成し、テスト要件を満たすようにjson形式でパターン別に用意し、都度調整する",
            skill1: "Node.jsのフレームワークexpressのAPI的な利用に関して理解が深まった",
            skill2: "Promiseベースでの非同期通信についてのパフォーマンス向上技術が身についた",
            skill3: "macOsでの効率的な開発環境の構築"
        },
        {
            id:2, jobName: "会計サイトの新規構築", frontEnd: "React.js", backEnd: "PHP(Larabel)", period: 7,
            database: "PostgresSQL", chatTool: "microsoftTeam", taskTool: "Redmine", editor: "PHPstorm", os: "win10", sorce: "git,tortoiseGit",
            development: "virtualBox",
            detail1: "既存設計書に対する実装、不具合修正、またそれにともなう設計書の修正",
            detail2: "フロントエンド、バックエンドどちらも対応。フロントはReactでコンポーネント管理,SCSSによるスタイル管理、JQueryによるライブラリ管理",
            detail3: "バックエンドはLaavelを使用。エラー画面管理、uuidによる暗号化、pdfのライブラリ利用、RESTfullでのAPI実装",
            skill1: "フロントのフレームワーク、,Reactを基礎から身に付けた。Reduxは独自で触って学習した。",
            skill2: "laravelはRESTfullによる再利用可能なAPIの構築手法が身についた。DBへのアクセスはeroquent使用でセキュリティも考慮した。",
            skill3: "各種Linuxコマンドを身に付けた"
        },
        {
            id:3, jobName: "既存サイトのレスポンシブ対応", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP(Zend)", period: 7,
            database: "Oracle", chatTool: "未参加", taskTool: "backlog", editor: "visualstudiocode", os: "win8", sorce: "git ",
            development: "WinSCPで放り込む",
            detail1: "html/cssとJqueryを使って、既存サイトのレスポンシブ対応を行った。",
            detail2: "自身が作成した機能に対して、単体テスト結合テストテスト仕様書の作成と実行を行った。",
            detail3: "基本設計書（画面設計書、遷移図）と詳細設計書（フロー図）の作成をした",
            skill1: "テスト関係の資料を作成する時の留意点を習得した",
            skill2: "基本設計書、詳細設計書を作成するときの留意点を習得した",
            skill3: "XDで仕上がったデザインをcss利用で再現する技術"
        },
        {
            id:4, jobName: "印刷会社社内システム", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP(Laravel)", period: 12,
            database: "MySQL", chatTool: "chatwork", taskTool: "google", editor: "ecripse", os: "win10", sorce: "git",
            development: "なし",
            detail1: "Larabelによるシステム構築、機能追加とバグ修正",
            detail2: "プロパーのデザイナー様と調節してフロントのレイアウト修正",
            detail3: "顧客の追加の要件に対してシステムの機能要件を定義し設計書や実装に反映する",
            skill1: "Laravelによる権限管理機能、メール送信機能、テンプレートページ利用など",
            skill2: "LaravelによるMVCパターンの実装",
            skill3: "フレームワークを用いたDBの利用、Gitバージョン管理の利用"
        },
        {
            id:5, jobName: "外回りの営業支援ツール", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 11,
            database: "不明", chatTool: "なし", taskTool: "なし", editor: "visualstudiocode", os: "win10", sorce: "なし",
            development: "WinSCPで放り込む",
            detail1: "テストケースドキュメント作成、実行",
            detail2: "簡易なシステムの修正",
            detail3: "顧客のヘルプデスク対応",
            skill1: "基本的なプログラミング技術の習得",
            skill2: "システムのテストに関する知見",
            skill3: "顧客との折衝"
        },
        {
            id:6, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        },
        {
            id:7, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        },
        {
            id:8, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        },
        {
            id:9, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        },
        {
            id:10, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        },
        {
            id:11, jobName: "ダミーデータ案件", frontEnd: "html/css, javascript, bootstrap, JQuery", backEnd: "PHP", period: 0,
            database: "不ダミーデータ案件明", chatTool: "ダミーデータ案件", taskTool: "ダミーデータ案件", editor: "ダミーデータ案件", os: "win10", sorce: "なし",
            development: "ダミーデータ案件",
            detail1: "概要1",
            detail2: "概要2",
            detail3: "概要3",
            skill1: "",
            skill2: "",
            skill3: ""
        }

    ]
}