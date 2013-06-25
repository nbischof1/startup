/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Strg+R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Strg+I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Strg+L)
 */


function isPrime(number) {
    if(number<2) return false;
    var max = Math.sqrt(number);
    for(j=2; j<=max; j++) {
        if(number%j == 0){
            return false;
        }
    }
    return true;
}

primes = new Array();
for(i=1; i<=100; i++) {
    if(isPrime(i)){
        primes.push(i);
    }
}
print('primes: ' + primes);

