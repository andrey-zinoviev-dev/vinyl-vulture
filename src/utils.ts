import { AlbumInterface, ArrivalsInterface } from "./intefaces";
// import SleepToken from "./assets/Sleeptoken.png";
// import BadOmens from "./assets/Badomens.png";
import Metal from "./assets/masterofreality.jpg";
import Indie from "./assets/Unpeeled.jpg";
import Rap from "./assets/2281b612721133.5626c3e5bc694.png";
import ShoeGaze from "./assets/c82dfe541389f8f05554a444091b34be.500x500x1.jpg";
import Soundtrack from "./assets/81gC318-4KL._UF894,1000_QL80_.jpg";

export const arrivals:ArrivalsInterface[] = [
    {
        name: "This Place Will Become Your Tomb",
        price: 4950,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
        published: new Date(),
        fire: true,
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Death of Piece of Mind",
        price: 7490,
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/BadOmens_TDOPOM.jpg/274px-BadOmens_TDOPOM.jpg',
        published: new Date(),
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Speak",
        price: 5390,
        cover: "https://cdns-images.dzcdn.net/images/cover/9f513245cb6d0260f003d68590f60147/500x500.jpg",
        published: new Date(),
        fire: true,
        author: {
            name: "Sasha Sova",
            cover: "https://cdns-images.dzcdn.net/images/artist/1c332a53c7a3a40eabb927447b2f2076/264x264.jpg",
            link: "https://vk.com/sashasovavocal",
        }
    },
    {
        name: "Lionheart",
        price: 7950,
        cover: "data:image/jpeg;base64,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",
        published: new Date(),
        author: {
            name: "Vestron Vulutre",
            cover: "https://d1x26sjkwh9vok.cloudfront.net/uploads/cover/20200620/3fa75e13-8b4f-4a0e-bd36-1904957f636a.jpg",
            link: "https://vestronvulture.bandcamp.com/",
        }
    },    {
        name: "This Place Will Become Your Tomb",
        price: 4950,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
        published: new Date(),
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Death of Piece of Mind",
        price: 7490,
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/BadOmens_TDOPOM.jpg/274px-BadOmens_TDOPOM.jpg',
        published: new Date(),
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Speak",
        price: 5390,
        cover: "https://cdns-images.dzcdn.net/images/cover/9f513245cb6d0260f003d68590f60147/500x500.jpg",
        published: new Date(),
        author: {
            name: "Sasha Sova",
            cover: "https://cdns-images.dzcdn.net/images/artist/1c332a53c7a3a40eabb927447b2f2076/264x264.jpg",
            link: "https://vk.com/sashasovavocal",
        }
    },
    {
        name: "Lionheart",
        price: 7950,
        cover: "data:image/jpeg;base64,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",
        published: new Date(),
        author: {
            name: "Vestron Vulutre",
            cover: "https://d1x26sjkwh9vok.cloudfront.net/uploads/cover/20200620/3fa75e13-8b4f-4a0e-bd36-1904957f636a.jpg",
            link: "https://vestronvulture.bandcamp.com/",
        }
    },    {
        name: "This Place Will Become Your Tomb",
        price: 4950,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
        published: new Date(),
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Death of Piece of Mind",
        price: 7490,
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/BadOmens_TDOPOM.jpg/274px-BadOmens_TDOPOM.jpg',
        published: new Date(),
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Speak",
        price: 5390,
        cover: "https://cdns-images.dzcdn.net/images/cover/9f513245cb6d0260f003d68590f60147/500x500.jpg",
        published: new Date(),
        author: {
            name: "Sasha Sova",
            cover: "https://cdns-images.dzcdn.net/images/artist/1c332a53c7a3a40eabb927447b2f2076/264x264.jpg",
            link: "https://vk.com/sashasovavocal",
        }
    },
    {
        name: "Lionheart",
        price: 7950,
        cover: "data:image/jpeg;base64,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",
        published: new Date(),
        author: {
            name: "Vestron Vulutre",
            cover: "https://d1x26sjkwh9vok.cloudfront.net/uploads/cover/20200620/3fa75e13-8b4f-4a0e-bd36-1904957f636a.jpg",
            link: "https://vestronvulture.bandcamp.com/",
        }
    }
];

export const popularAlbums:AlbumInterface[] = [
    {
        name: "This Place Will Become Your Tomb",
        price: 4950,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
        published: new Date(),
        songs: [
            {
                name: "Atlantic",
                length: "4:53",
                link: "",
            },
            {
                name: "Hypnosis",
                length: "5:36",
                link: "",
            },
            {
                name: "Mine",
                length: "4:57",
                link: "",
            },
            {
                name: "Like That",
                length: "3:35",
                link: "",
            },
            {
                name: "The Love You Want",
                length: "4:24",
                link: "",
            }, 
            {
                name: "Fall For Me",
                length: "2:27",
                link: "",
            }, 
            {
                name: "Alkaline",
                length: "3:35",
                link: "",
            },
            {
                name: "Distraction",
                length: "4:23",
                link: "",
            },
            {
                name: "Descending",
                length: "4:39",
                link: "",
            },
            {
                name: "Telomeres",
                length: "5:08",
                link: "",
            },
            {
                name: "High Water",
                length: "5:14",
                link: "",
            },
            {
                name: "Missing Limbs",
                length: "3:21",
                link: "",
            }
        ],
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Death of Piece of Mind",
        price: 7490,
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/BadOmens_TDOPOM.jpg/274px-BadOmens_TDOPOM.jpg',
        published: new Date(),
        songs: [
            {
                name: "CONCRETE JUNGLE",
                length: "3:40",
                link: "",
            },
            {
                name: "NOWHERE TO GO",
                length: "4:07",
                link: "",
            },
            {
                name: "TAKE ME FIRST",
                length: "3:20",
                link: "",
            },
            {
                name: "THE DEATH OF PEACE OF MIND",
                length: "4:01",
                link: "",
            },
            {
                name: "What It Cost",
                length: "1:44",
                link: "",
            },
            {
                name: "Like a Villain",
                length: "3:31",
                link: "",
            },
            {
                name: "bad Decisions",
                length: "4:21",
                link: "",
            },
            {
                name: "Just Pretend",
                length: "3:25",
                link: "",
            },
            {
                name: "The Grey",
                length: "4:06",
                link: "",
            },
            {
                name: "Who are you?",
                length: "3:37",
                link: ""
            },
            {
                name: "Somebody else.",
                length: "3:57",
                link: "",
            },
            {
                name: "IDWT$",
                length: "3:23",
                link: "",
            },
            {
                name: "What do you want from me",
                length: "2:56",
                link: "",
            },
            {
                name: "ARTIFICIAL SUICIDE",
                length: "3:15",
                link: "",
            },
            {
                name: "Miracle",
                length: "3:45",
                link: "",
            }
        ],
        author: {
            name: "Bad Omens",
            cover: "https://yt3.googleusercontent.com/AOFXCzBgLh5A6xmgFFmDpSAqDrBw_0gyYh32RRc0Z9_y04YzDNWwcwIcPMTcIJEqFZIUC_rc=s900-c-k-c0x00ffffff-no-rj",
            link: "https://badomensofficial.com/"
        }
    },
    {
        name: "Speak",
        price: 5390,
        cover: "https://cdns-images.dzcdn.net/images/cover/9f513245cb6d0260f003d68590f60147/500x500.jpg",
        published: new Date(),
        songs: [
            {
                name: "Speak",
                length: "03:49",
                link: ""
            }
        ],
        author: {
            name: "Sasha Sova",
            cover: "https://cdns-images.dzcdn.net/images/artist/1c332a53c7a3a40eabb927447b2f2076/264x264.jpg",
            link: "https://vk.com/sashasovavocal",
        }
    },
    {
        name: "Lionheart",
        price: 7950,
        cover: "data:image/jpeg;base64,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",
        published: new Date(),
        songs: [
            {
                name: "90's Jennifer Love Hewitt",
                length: "02:53",
                link: "",
            },
            {
                name: "Motion Sickness",
                length: "03:13",
                link: "",
            },
            {
                name: "Automatic Standard",
                length: "03:21",
                link: "",
            },
            {
                name: "Hair On Fire",
                length: "02:52",
                link: "",
            },
            {
                name: "Animosity '93",
                length: "02:52",
                link: "",
            },
            {
                name: "Wristcutter",
                length: "02:44",
                link: "",
            },
            {
                name: "Marianna",
                length: "02:30",
                link: "",
            },
            {
                name: "'Should Have",
                length: "02:59",
                link: "",
            },
            {
                name: "Black Mass",
                length: "03:26",
                link: "",
            },
            {
                name: "21:8",
                length: "02:44",
                link: ""
            },
            {
                name: "Sadistic Glee",
                length: "02:44",
                link: "",
            },
            {
                name: "Judas Effect",
                length: "03:12",
                link: "",
            },
            {
                name: "Sing The Sorrow",
                length: "04:08",
                link: "",
            },
            {
                name: "Parasocial",
                length: "02:52",
                link: "",
            }
        ],
        author: {
            name: "Vestron Vulutre",
            cover: "https://d1x26sjkwh9vok.cloudfront.net/uploads/cover/20200620/3fa75e13-8b4f-4a0e-bd36-1904957f636a.jpg",
            link: "https://vestronvulture.bandcamp.com/",
        }
    }
    ,
    {
        name: "This Place Will Become Your Tomb",
        price: 4950,
        cover: 'https://upload.wikimedia.org/wikipedia/en/9/9f/SleepTokenTPWBYT.jpg',
        published: new Date(),
        songs: [
            {
                name: "Atlantic",
                length: "4:53",
                link: "",
            },
            {
                name: "Hypnosis",
                length: "5:36",
                link: "",
            },
            {
                name: "Mine",
                length: "4:57",
                link: "",
            },
            {
                name: "Like That",
                length: "3:35",
                link: "",
            },
            {
                name: "The Love You Want",
                length: "4:24",
                link: "",
            }, 
            {
                name: "Fall For Me",
                length: "2:27",
                link: "",
            }, 
            {
                name: "Alkaline",
                length: "3:35",
                link: "",
            },
            {
                name: "Distraction",
                length: "4:23",
                link: "",
            },
            {
                name: "Descending",
                length: "4:39",
                link: "",
            },
            {
                name: "Telomeres",
                length: "5:08",
                link: "",
            },
            {
                name: "High Water",
                length: "5:14",
                link: "",
            },
            {
                name: "Missing Limbs",
                length: "3:21",
                link: "",
            }
        ],
        author: {
            name: "Sleep Token",
            cover: "https://i.scdn.co/image/ab6761610000e5ebdbc568c9d871256b9a3e34a1",
            link: "https://www.sleep-token.com/",
        }
    },
    {
        name: "Death of Piece of Mind",
        price: 7490,
        cover: 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/BadOmens_TDOPOM.jpg/274px-BadOmens_TDOPOM.jpg',
        published: new Date(),
        songs: [
            {
                name: "CONCRETE JUNGLE",
                length: "3:40",
                link: "",
            },
            {
                name: "NOWHERE TO GO",
                length: "4:07",
                link: "",
            },
            {
                name: "TAKE ME FIRST",
                length: "3:20",
                link: "",
            },
            {
                name: "THE DEATH OF PEACE OF MIND",
                length: "4:01",
                link: "",
            },
            {
                name: "What It Cost",
                length: "1:44",
                link: "",
            },
            {
                name: "Like a Villain",
                length: "3:31",
                link: "",
            },
            {
                name: "bad Decisions",
                length: "4:21",
                link: "",
            },
            {
                name: "Just Pretend",
                length: "3:25",
                link: "",
            },
            {
                name: "The Grey",
                length: "4:06",
                link: "",
            },
            {
                name: "Who are you?",
                length: "3:37",
                link: ""
            },
            {
                name: "Somebody else.",
                length: "3:57",
                link: "",
            },
            {
                name: "IDWT$",
                length: "3:23",
                link: "",
            },
            {
                name: "What do you want from me",
                length: "2:56",
                link: "",
            },
            {
                name: "ARTIFICIAL SUICIDE",
                length: "3:15",
                link: "",
            },
            {
                name: "Miracle",
                length: "3:45",
                link: "",
            }
        ],
        author: {
            name: "Bad Omens",
            cover: "https://yt3.googleusercontent.com/AOFXCzBgLh5A6xmgFFmDpSAqDrBw_0gyYh32RRc0Z9_y04YzDNWwcwIcPMTcIJEqFZIUC_rc=s900-c-k-c0x00ffffff-no-rj",
            link: "https://badomensofficial.com/"
        }
    },
    {
        name: "Speak",
        price: 5390,
        cover: "https://cdns-images.dzcdn.net/images/cover/9f513245cb6d0260f003d68590f60147/500x500.jpg",
        published: new Date(),
        songs: [
            {
                name: "Speak",
                length: "03:49",
                link: ""
            }
        ],
        author: {
            name: "Sasha Sova",
            cover: "https://cdns-images.dzcdn.net/images/artist/1c332a53c7a3a40eabb927447b2f2076/264x264.jpg",
            link: "https://vk.com/sashasovavocal",
        }
    },
    {
        name: "Lionheart",
        price: 7950,
        cover: "data:image/jpeg;base64,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",
        published: new Date(),
        songs: [
            {
                name: "90's Jennifer Love Hewitt",
                length: "02:53",
                link: "",
            },
            {
                name: "Motion Sickness",
                length: "03:13",
                link: "",
            },
            {
                name: "Automatic Standard",
                length: "03:21",
                link: "",
            },
            {
                name: "Hair On Fire",
                length: "02:52",
                link: "",
            },
            {
                name: "Animosity '93",
                length: "02:52",
                link: "",
            },
            {
                name: "Wristcutter",
                length: "02:44",
                link: "",
            },
            {
                name: "Marianna",
                length: "02:30",
                link: "",
            },
            {
                name: "'Should Have",
                length: "02:59",
                link: "",
            },
            {
                name: "Black Mass",
                length: "03:26",
                link: "",
            },
            {
                name: "21:8",
                length: "02:44",
                link: ""
            },
            {
                name: "Sadistic Glee",
                length: "02:44",
                link: "",
            },
            {
                name: "Judas Effect",
                length: "03:12",
                link: "",
            },
            {
                name: "Sing The Sorrow",
                length: "04:08",
                link: "",
            },
            {
                name: "Parasocial",
                length: "02:52",
                link: "",
            }
        ],
        author: {
            name: "Vestron Vulutre",
            cover: "https://d1x26sjkwh9vok.cloudfront.net/uploads/cover/20200620/3fa75e13-8b4f-4a0e-bd36-1904957f636a.jpg",
            link: "https://vestronvulture.bandcamp.com/",
        }
    }
]

export const genres = [
    {
        name: "Metal",
        cover: Metal,
    },
    {
        name: "Rap",
        cover: Rap,
    },
    {
        name: "Indie",
        cover: Indie,
    },
    {
        name: "ShoeGaze",
        cover: ShoeGaze,
    },
    {
        name: "Soundtrack",
        cover: Soundtrack,
    },


]

