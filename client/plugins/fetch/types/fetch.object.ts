export default interface IFetchObject {
    key: string;
    method: "post" | "get" | "file" | "put" | "delete";
    url: string;
    params: [];
}
