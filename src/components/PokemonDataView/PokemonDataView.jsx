
export default function PokemonDataView({ pokemon: { name, sprites, stats }}) {
    return (
        <div>
            <img 
                src={sprites.other['official-artwork'].front_default} 
                alt={name} 
                width="300px" />
            <h1>{name}</h1>
            <ul>
                {stats.map(entry => (
                    <li key={entry.stat.name}>
                        {entry.stat.name}: {entry.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
};