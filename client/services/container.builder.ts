import "reflect-metadata";
import { Container } from "inversify";
import { injectId } from "~/core/decorators";
import { Store, Config } from "~/store";
import * as s from "~/services";

export function containerBuilder(store: any): Container {
    const container = new Container();

    // Bind Store
    container.bind<Config>("IConfig").toDynamicValue(() => store.state.config);

    // Bind Services
    container
        .bind<s.IMemberService>(injectId(s.MemberService))
        .to(s.MemberService)
        .inSingletonScope();
    return container;
}
