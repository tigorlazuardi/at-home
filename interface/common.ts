export type JsonObject = { [key: string]: Json }
export type JsonTopStructure = Json[] | JsonObject
export type Json = string | number | boolean | null | Json[] | JsonObject
