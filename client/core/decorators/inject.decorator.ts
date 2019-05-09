import { container, containerGetter } from "~/services/container";
import "reflect-metadata";
/**
 * @param key the name of the property,
 * If the interface is IMyService the key must be myService or _myService
 */
const keyToId = (key: string) => {
    if (!key) {
        throw new Error("A key is necessary to load this interface");
    }

    const prefix = "I" + key[0].toUpperCase();
    return prefix + key.slice(1).replace("_", "");
};

/**
 * Decorator to inject dependencies in components or classes
 * @param id optional id, could be auto generated with prop name
 */
export function Inject(id?: string | symbol) {
    return (target: any, key: string) => {
        const generatedId = id || keyToId(key);

        const getter = () => {
            return container ? containerGetter(generatedId) : {};
        };

        // const getter = containerGetter(generatedId);

        Reflect.deleteProperty[key];
        Reflect.defineProperty(target, key, {
            value: getter
        });
    };
}
/**
 * Creates an identifier meanwhile we cannot create with interfaces
 * @param target the class to generate the name
 */
export function injectId(target: any): string {
    // debugger;
    return keyToId(target.name);
}

/**
 * Add the context to all the components
 * This is a temporal plugin meanwhile nuxt updates to next version
 */
export function AsyncData() {
    return (target: any) => {
        const old = target.prototype.asyncData;
        target.prototype.asyncData = (context: any) => {
            return old({ ...context, self: target.prototype });
        };
    };
}

/**
 * Decorator to inject dependencies for testing purposes
 * @param target: the component
 * @param key: the injected class
 * @param mock: the object mock
 * @example
 * mockInject(wrapper.vm, 'citiesService', {
 *   remove: x => x + 100000
 * })
 */
export function mockInject(target: any, key: any, mock: any) {
    const getter = () => {
        return mock;
    };

    Reflect.deleteProperty[key];
    Reflect.defineProperty(target, key, {
        get: getter,
        set: x => x
    });
}
