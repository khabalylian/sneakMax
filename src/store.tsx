import { create } from 'zustand';
import { IGoods } from './Layout/Goods/Goods';

interface IGoodsState {
    countGoods: number;
    busketGoods: IGoods[];
    goods: IGoods[];
    filteredGoods: IGoods[];
}

interface IGoodsAction {
    updateCount: (count: IGoodsState['countGoods']) => void;
    updateBusketGoods: (goods: IGoodsState['busketGoods']) => void;
    updateFilteredGoods: (filteredGoods: IGoodsState['filteredGoods']) => void;
}

const GoodsState = create<IGoodsState & IGoodsAction>(set => ({
    goods: [
        {
            article: '2331Acvf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 11000,
                gender: 'male',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 40, count: 1 },
                    { size: 41, count: 2 },
                    { size: 42, count: 5},
                    { size: 43, count: 0 }
                ],
                count: 0
            }
        },
        {
            article: '231423f2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 16970,
                gender: 'female',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 39, count: 0 },
                    { size: 40, count: 2 },
                    { size: 41, count: 0 },
                    { size: 42, count: 1 },
                    { size: 43, count: 5 }
                ],
                count: 5
            }
        },
        {
            article: '232fdGcvf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 4533,
                gender: 'female',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 41, count: 0 },
                    { size: 42, count: 2 },
                    { size: 43, count: 0 }
                ],
                count: 4
            }
        },
        {
            article: '4123w2WWf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 5500,
                gender: 'male',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 35, count: 5 },
                    { size: 36, count: 0 },
                    { size: 37, count: 3 },
                    { size: 38, count: 0 },
                    { size: 39, count: 4 },
                    { size: 40, count: 2},
                    { size: 41, count: 0 },
                    { size: 42, count: 1 },
                    { size: 43, count: 0 }
                ],
                count: 2
            }
        },
        {
            article: '2511Ac54Gf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 2324,
                gender: 'female',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 35, count: 1 },
                    { size: 36, count: 3 },
                    { size: 37, count: 0 },
                    { size: 38, count: 2 },
                    { size: 39, count: 0 },
                ],
                count: 3
            }
        },
        {
            article: '7612433f2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 3700,
                gender: 'male',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 35, count: 0 },
                    { size: 36, count: 5 },
                    { size: 37, count: 0 },
                    { size: 38, count: 3 },
                    { size: 39, count: 0 },
                    { size: 40, count: 5 },
                    { size: 41, count: 2 },
                    { size: 42, count: 0 },
                    { size: 43, count: 0 }
                ],
                count: 4
            }
        },
        {
            article: '643asWWavf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 12600,
                gender: 'female',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 35, count: 1 },
                    { size: 36, count: 1 },
                    { size: 37, count: 2},
                ],
                count: 11
            }
        },
        {
            article: '63jkhHvf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 12400,
                gender: 'male',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 35, count: 0 },
                    { size: 36, count: 1 },
                    { size: 37, count: 2 },
                    { size: 38, count: 0 },
                    { size: 39, count: 4 },
                  
                ],
                count: 6
            }
        },
        {
            article: '1332vf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            data: {
                size: 41,
                price: 11000,
                gender: 'male',
                color: 'Різнокольоровий',
                contents: 'Шкіра, текстиль, резина',
                country: 'Вєтнам',
                description:
                    'Кроссовки Nike Blazer Mid "77 Vintage Suede с винтажной подошвой возрождают стиль баскетбольных моделей Nike прошлого, создавая впечатление, что они хранились в шкафу долгие годы.',
                inStockSize: [
                    { size: 36, count: 2 },
                    { size: 37, count: 0 },
                    { size: 38, count: 2 },
                    { size: 39, count: 0 },
                    { size: 40, count: 3 },
                    { size: 42, count: 0 },
                    { size: 43, count: 0 }
                ],
                count: 2
            }
        }
    ],
    filteredGoods: [],
    countGoods: 0,
    busketGoods: [],
    updateCount: countGoods => set(() => ({ countGoods: countGoods })),
    updateBusketGoods: busketGoods => set(() => ({ busketGoods: busketGoods })),
    updateFilteredGoods: filteredGoods =>
        set(() => ({ filteredGoods: filteredGoods }))
}));

export { GoodsState };
