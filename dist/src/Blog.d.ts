interface source {
    thumbnail: string;
    iframe_id: string;
    allow_resize: boolean;
    streams: Array<{
        play_url: string;
        format_id: number;
    }>;
}
interface list {
    id: string;
    source: source;
}
export declare const getBlogList: (url: string) => Promise<list[]>;
export declare const getSourceVideo: (url: string | any) => Promise<Promise<source> | undefined>;
export {};
