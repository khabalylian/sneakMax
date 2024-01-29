import { create } from 'zustand';
import { IGoods } from './Layout/Goods/Goods';
import {
    collection,
    getCountFromServer,
    getDocs,
    limit,
    query
} from 'firebase/firestore';
import { db } from './firebase/firebase.config';

interface IGoodsState {
    countLimit: number;
    countGoods: number;
    busketGoods: IGoods[];
    goods: IGoods[];
    filteredGoods: IGoods[];
}

interface IGoodsAction {
    getGoods: (limit: IGoodsState['countLimit']) => Promise<void>;
    updateBusketGoods: (goods: IGoodsState['busketGoods']) => void;
    updateFilteredGoods: (filteredGoods: IGoodsState['filteredGoods']) => void;
    updateCount: () => void;
}

const GoodsState = create<IGoodsState & IGoodsAction>(set => ({
    goods: [],
    filteredGoods: [],
    countGoods: 0,
    countLimit: 9,
    busketGoods: [],
    getGoods: async countLimit => {
        const goodsData: IGoods[] = [];
        const goodsRef = collection(db, 'Product');
        const q = query(goodsRef, limit(countLimit));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            goodsData.push(doc.data() as IGoods);
        });
        set({
            goods: goodsData,
            filteredGoods: goodsData,
            countLimit: countLimit
        });
    },
    updateCount: async () => {
        const goodsRef = collection(db, 'Product');
        const snapshot = (await getCountFromServer(goodsRef)).data().count;
        set({
            countGoods: snapshot
        });
    },
    updateBusketGoods: busketGoods => set(() => ({ busketGoods: busketGoods })),
    updateFilteredGoods: filteredGoods =>
        set(() => ({ filteredGoods: filteredGoods }))
}));

export { GoodsState };
