declare module 'lodash' {
    interface LoDashStatic {
        chunkBy<T>(array: T[], predicate: (element: T) => boolean): T[][];
    }
}
export {};
