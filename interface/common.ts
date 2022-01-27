export type JsonObject = { [key: string]: Json }
export type JsonTopStructure = Json[] | JsonObject
export interface JSONSerializer {
	toJSON: () => string
}
export type Json = string | number | boolean | null | Json[] | JsonObject | JSONSerializer
