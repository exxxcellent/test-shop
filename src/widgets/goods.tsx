// store
import { useGoodStore } from '../store/useGoodStore';
// ui
import Good from '../shared/ui/good';

export default function Goods() {
    const goods = useGoodStore((state) => state.goods);

    return (
        <section
            id="goods"
            className="px-5">
            <h1 className="text-2xl font-bold text-text-secondary mb-2">
                Выберите товар
            </h1>
            <div className="grid grid-cols-2 gap-2">
                {goods.map((good) => (
                    <Good
                        key={good.title}
                        good={good}
                    />
                ))}
            </div>
        </section>
    );
}
