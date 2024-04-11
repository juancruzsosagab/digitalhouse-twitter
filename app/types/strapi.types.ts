export type StrapyPaginationType = {
    "page": number,
    "pageSize": number,
    "pageCount": boolean,
    "total": boolean
}

export type StrapiResultType<T> = {
    "data": T[],
    "meta": {
        pagination: StrapyPaginationType
    }
}