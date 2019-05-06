import { IMemberService } from "./i.member.service";
import { Inject } from "~/core";
import { Config } from "~/store";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { TYPES } from "../types";
import localRandomData from "~/static/random-data.json";
import { Person } from "~/types";
@injectable()
export class MemberService implements IMemberService {
    // @Inject() config: Config;

    public async get(): Promise<Person[]> {
        // //[TODO: 用户调用后端]
        // debugger;
        // const results = await fetch("/api/members");
        // if (!results.ok) {
        //     throw new Error();
        // }
        // return await results.json();
        return Promise.resolve(localRandomData.slice(0, 100));
    }
}
