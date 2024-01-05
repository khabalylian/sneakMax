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
            size: 41,
            price: 11342,
            gender: 'male'
        },
        {
            article: '231423f2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 42,
            price: 123,
            gender: 'female'
        },
        {
            article: '232fdGcvf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 37,
            price: 564,
            gender: 'male'
        },
        {
            article: '4123w2WWf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 40,
            price: 11000,
            gender: 'male'
        },
        {
            article: '2511Ac54Gf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 40,
            price: 11000,
            gender: 'female'
        },
        {
            article: '7612433f2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 41,
            price: 11000,
            gender: 'male'
        },
        {
            article: '643asWWavf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 40,
            price: 11000,
            gender: 'male'
        },
        {
            article: '63jkhHvf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 39,
            price: 11000,
            gender: 'male'
        },
        {
            article: '1332vf2',
            image: 'src/Layout/Goods/img/footwear.jpg',
            title: 'Кроссовки Nike Air Force 1 "07 QS"',
            size: 39,
            price: 11000,
            gender: 'female'
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
