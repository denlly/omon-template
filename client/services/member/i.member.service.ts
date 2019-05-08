import { Person } from "~/types";

export interface IMemberService {
    get(): Promise<Person[]>;
}
