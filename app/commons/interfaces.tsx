//型を定義する
export interface ITodoProps {
    completed: boolean;
    id: number;
    onClick: any;
    text: string
}

export interface ITodoListProps {
    todos?: Array<ITodoProps>;
    toggleTodo: any;
}

export interface ILinkProps {
    active: boolean;
    children: string;
    onClick: any;
    filter: string
}

export interface IPageLinkProps {
    active: boolean;
    page: number;
    onClick: any;
}

export interface IState {
    pages: number;
    jobInfo: any;
    todos: Array<any>;
    visibilityFilter: string;
}