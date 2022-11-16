export default function HeroTraits({ trait, value}) {
    return (
        <div className="flex items-center ml-4 mt-3">
            <div className="w-[100px]">
                {trait}
            </div>
            <div className="ml-6">
                {value}
            </div>
        </div>
    );
}