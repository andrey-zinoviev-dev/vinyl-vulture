export interface AlbumInterface {
    name: string,
    price: number,
    cover: string,
    published: Date,
    author: {
        name: string,
        cover: string,
        link: string,
    }
}