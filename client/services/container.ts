import { Container } from "inversify";

export let container: Container;

export function containerSetter(_container: Container) {
    container = _container;
}
