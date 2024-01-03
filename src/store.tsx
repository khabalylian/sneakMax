import { create } from 'zustand';
import { IGoods } from './Layout/Goods/Goods';

interface IGoodsState {
    countGoods: number;
    goods: IGoods[];
}

interface IGoodsAction {
    updateCount: (count: IGoodsState['countGoods']) => void;
    updateGoods: (goods: IGoodsState['goods']) => void;
}

const GoodsState = create<IGoodsState & IGoodsAction>(set => ({
    countGoods: 0,
    goods: [],
    updateCount: countGoods => set(() => ({ countGoods: countGoods })),
    updateGoods: goods => set(() => ({ goods: goods }))
}));

export { GoodsState };
