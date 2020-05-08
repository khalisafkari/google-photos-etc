export declare type _res = "hd1080" | "hd720" | "medium";
export interface gphotos {
    _id: string;
    _res: _res;
}
declare class GPhotos {
    get(uri: string): Promise<gphotos[]>;
}
declare const _default: GPhotos;
export default _default;
