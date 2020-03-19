export interface ActionInterface {
    type:string,
    payload:any
}

export interface UserContextInterface {
    username:string,
    firstName:string,
    lastName:string,
}

export interface ToastPropsInterface {
        title: string,
        description: string,
        type: string
}