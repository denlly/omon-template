export function deepClone(source: any): any {
    try {
        if (!source) {
            return source;
        }
        let value;
        let dest: any = Array.isArray(source) ? [] : {};
        Object.keys(source).forEach(key => {
            value = source[key];
            dest[key] = typeof value === "object" ? deepClone(value) : value;
        });
        return dest;
    } catch (e) {
        if (e) throw new Error(e);
    }
}
