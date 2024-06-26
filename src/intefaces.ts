export interface AlbumInterface {
    name: string,
    price: number,
    cover: string,
    published: Date,
    songs:         {
        name: string,
        length: string,
        link: string,
    }[

    ],
    author: {
        name: string,
        cover: string,
        link: string,
    }
}

export interface ArrivalsInterface {
    name: string,
    price: number,
    cover: string,
    published: Date,
    fire?: boolean,
    author: {
        name: string,
        cover: string,
        link: string,
    }
}