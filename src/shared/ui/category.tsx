// react-router
import { useNavigate } from 'react-router';

interface CategoryProps {
    title: string;
}

export default function Category({ title }: CategoryProps) {
    const router = useNavigate();

    return (
        <div
            className="flex flex-col gap-2 items-center justify-center bg-gray-secondary p-[9px] rounded-[20px]"
            onClick={() => router(`/category/${title.toLowerCase()}`)}>
            <div className="h-40 w-40 bg-gray-primary rounded-[11px]">
                {/* image */}
            </div>
            <h2 className="text-xl font-bold text-text-secondary">{title}</h2>
        </div>
    );
}
