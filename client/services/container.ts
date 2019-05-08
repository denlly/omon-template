import { Container } from "inversify";

export let container: Container;

export function containerSetter(_container: Container) {
    container = _container;
}
export function containerGetter(id: string): {} {
    let servicemodule = container.get(id);
    debugger;
    return servicemodule;
}
