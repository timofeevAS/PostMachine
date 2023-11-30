/* Command V */
export const V = (tape, cursor, setTape) => {
    const newTape = tape.map((cell, i) => (i === cursor ? 1 : cell));
    setTape(newTape);
}

/* Command X */
export const X = (tape, cursor, setTape) => {
    const newTape = tape.map((cell, i) => (i === cursor ? 0 : cell));
    setTape(newTape);
}


/* Command > */
export const R = (setCursor) => {
    setCursor(prevCursor=>prevCursor+1)
}


/* Command < */
export const L = (setCursor) => {
    setCursor(prevCursor=>prevCursor - 1)
}

/* Command ? j1; j2 */
export const ITE = (tape, cursor, setCursor, trueCond, falseCond) => {
    setCursor(tape[cursor] ? trueCond : falseCond);
}

/* Command S */
export const S = (setCursor) => {
    setCursor(-1);
}
