interface video {
    thumbnail?: string | undefined;
    iframe_id?: string | undefined;
    allow_resize?: boolean | null;
    streams: Array<any> | null;
}
export interface WithBlogger {
    id: string | undefined;
    video?: video;
}
declare class Blogger {
    WithBlogger(uri: string): Promise<WithBlogger[]>;
    WithVideoToken(uri: string): Promise<video>;
    private get;
}
declare const _default: Blogger;
export default _default;
