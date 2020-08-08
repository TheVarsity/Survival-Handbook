type RecursiveNonNullable<T> = {
    [K in keyof T]: RecursiveNonNullable<NonNullable<T[K]>>
}
