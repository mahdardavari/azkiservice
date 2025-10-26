export type Photo = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    src: string;
    width?: number;
    height?: number;
};


export const photos: Photo[] = [
    {
        id: '1',
        title: 'Misty Ridge',
        description: 'Early morning on the ridge with low clouds and pine scent.',
        tags: ['ridge', 'morning', 'mist'],
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Golden Valley',
        description: 'Sunset paints the valley gold.',
        tags: ['valley', 'sunset'],
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop&sat=10',
    },
    {
        id: '3',
        title: 'Alpine Lake',
        description: 'Clear alpine lake surrounded by mountains.',
        tags: ['lake', 'alpine'],
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop',
    }
];