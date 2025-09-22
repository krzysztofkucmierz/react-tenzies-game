import { JSX } from "react";

export type Die = {
    value: number;
    isHeld: boolean;
    id: string;
}

type DieProps = {
    value: number;
    isHeld: boolean;
    hold: () => void;
}

export default function Die({value, isHeld, hold}:DieProps): JSX.Element {
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            style={styles}
            onClick={hold}
            aria-pressed={isHeld}
            aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
        >{value}</button>
    )
}