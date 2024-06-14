export type Session = {
    id: string;
    image: string;
    theme: string;
    title: string;
    description: string;
    nbParticipantsMax: number;
    duree: number;
    price: number;
    crenaux: {
        [key: string]: string;
    };
};