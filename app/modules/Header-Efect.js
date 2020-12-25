export default function headerEfect (move, move2) {
    move.style.transform = `translateY(-${scrollY}px)`;
    move2.style.transform = `translateY(` + `${scrollY}` / 2 + `px)`;
}