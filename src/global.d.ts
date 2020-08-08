type RecursiveNonNullable<T> = {
    [K in keyof T]: RecursiveNonNullable<NonNullable<T[K]>>;
};

declare module '*.svg' {
    const content: any;
    export default content;
}
