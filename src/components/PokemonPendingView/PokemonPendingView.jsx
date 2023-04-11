import { ImSpinner9 } from "react-icons/im";

export default function PokemonPendingView () {

    return (
        <div role="alert">
            <div>
            <ImSpinner9 size="32" className="icon-spin" />
            Loading....
            </div>
        </div>
    )
};
