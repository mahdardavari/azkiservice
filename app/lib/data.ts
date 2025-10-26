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
        description: 'Early morning hike through a misty ridge surrounded by pine trees.',
        tags: ['mist', 'ridge', 'forest'],
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '2',
        title: 'Golden Valley',
        description: 'A golden sunset paints the valley in warm hues of orange and pink.',
        tags: ['valley', 'sunset', 'golden'],
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '3',
        title: 'Alpine Lake',
        description: 'Clear alpine lake surrounded by majestic mountains and pine forest.',
        tags: ['lake', 'alpine', 'mountain'],
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '4',
        title: 'Snowy Trail',
        description: 'Footsteps in the snow along a quiet winter hiking trail.',
        tags: ['snow', 'trail', 'winter'],
        src: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '5',
        title: 'Rocky Peak',
        description: 'Reaching the summit with a breathtaking 360° mountain view.',
        tags: ['summit', 'mountain', 'rocky'],
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '6',
        title: 'Forest Path',
        description: 'A calm green hiking path cutting through dense forest.',
        tags: ['forest', 'trail', 'green'],
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '7',
        title: 'Crystal Stream',
        description: 'A crystal clear stream flows through mossy rocks in the woods.',
        tags: ['stream', 'forest', 'water'],
        src: 'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '8',
        title: 'Camping Under Stars',
        description: 'A tent illuminated under a starry night sky in the wilderness.',
        tags: ['camping', 'stars', 'night'],
        src: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '9',
        title: 'Desert Hike',
        description: 'Exploring the sandy trails and unique rock formations of the desert.',
        tags: ['desert', 'sand', 'trail'],
        src: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '10',
        title: 'Autumn Woods',
        description: 'Vibrant fall colors make the forest come alive in shades of orange.',
        tags: ['autumn', 'forest', 'leaves'],
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop&sat=50',
    },
    {
        id: '11',
        title: 'Waterfall Trail',
        description: 'Hiking path leading to a hidden waterfall deep in the forest.',
        tags: ['waterfall', 'trail', 'nature'],
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop&sat=40',
    },
    {
        id: '12',
        title: 'Foggy Morning',
        description: 'Soft fog covers the hills during an early morning hike.',
        tags: ['fog', 'hills', 'morning'],
        src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&q=80&auto=format&fit=crop&blur=2',
    },
    {
        id: '13',
        title: 'Cliff Edge',
        description: 'Standing at the edge of the cliff, gazing at endless horizons.',
        tags: ['cliff', 'mountain', 'view'],
        src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1600&q=80&auto=format&fit=crop',
    },
    {
        id: '14',
        title: 'Wildflowers Field',
        description: 'A trail surrounded by colorful wildflowers in full bloom.',
        tags: ['flowers', 'trail', 'spring'],
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80&auto=format&fit=crop&sat=30',
    },
    {
        id: '15',
        title: 'Mountain Reflection',
        description: 'Calm lake perfectly mirroring the surrounding snowy peaks.',
        tags: ['reflection', 'lake', 'mountain'],
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop&exp=0.8',
    },
];