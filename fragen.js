const questions_data = [
    {
        category: "Toleranzen",
        title: "Nennmaß",
        text: "Was versteht man unter dem Nennmaß?",
        solution: "<b>Das in der Zeichnung angegebene Grundmaß.</b><br><br>" +
            "<i>Erklärung:</i> Das Nennmaß ist das Ausgangsmaß, auf das sich alle Toleranzen und Abmaße beziehen.",
        solutionImage: "Media/nennmaß.png"
    },
    {
        category: "Toleranzen",
        title: "Toleranz",
        text: "Was gibt die Toleranz an?",
        solution: "<b>Toleranzen beschreiben die maximal zulässigen Abweichungen vom Idealmaß oder der Idealform.</b><br><br>" +
            "<i>Erklärung:</i><br><br>" +
            "Formel:<br> Toleranz = Höchstmaß − Mindestmaß.<br>Sie gibt den zulässigen Toleranzbereich eines Maßes an.<br><br>" +
            "Bsp.: 20 ± 0,1 → Toleranz = 0,2 mm (von 20,1 mm bis 19,9 mm)."
    },
    {
        category: "Toleranzen",
        title: "Warum Toleranzen",
        text: "Warum werden Toleranzen benötigt?",
        solution: "<b>Kein Fertigungsverfahren trifft ein Maß exakt.<br>" +
            "Deshalb müssen Toleranzen definiert werden, um die zulässigen Abweichungen festzulegen.</b><br><br>" +
            "<i>Erklärung:</i> Werkzeugverschleiß, Temperatur, Spannkräfte und Messunsicherheit sorgen dafür, dass jedes Werkstück ein klein wenig anders ausfällt.<br><br>" +
            "Eine Toleranz legt fest, wie groß diese Abweichung sein darf, ohne dass das Teil seine Funktion verliert."
    },
    {
        category: "Toleranzen",
        title: "Größe der Toleranz",
        text: "Wie groß sollte die Toleranz gewählt werden?",
        solution: "<b>So grob wie möglich, so fein wie nötig.</b><br><br>" +
            "<i>Erklärung:</i> Funktionstechnisch wichtige Maße benötigen meist engere Toleranzen. Je enger die Toleranz, desto höher können Fertigungs- und Prüfaufwand sein. Nicht besonders wichtige Maße können über die Allgemeintoleranz toleriert werden."
    },
    {
        category: "Toleranzen",
        title: "Geltung Allgemeintoleranzen",
        text: "Für welche Maße gelten Allgemeintoleranzen?",
        solution: "<b>Für alle Maße auf der Zeichnung ohne eigene Toleranzangabe.</b><br><br>" +
            "<i>Erklärung:</i> Sie gelten also für alle Maße, die nicht explizit mit einer anderen Toleranz versehen sind."
    },
    {
        category: "Toleranzen",
        title: "Genauigkeitsklassen",
        text: "In welche 4 Genauigkeitsklassen sind Allgemeintoleranzen unterteilt?",
        solution: "<b>f (fein)<br>" +
            "m (mittel)<br>" +
            "c (grob)<br>" +
            "v (sehr grob)</b><br><br>" +
            "<i>Erklärung:</i><br>" +
            "f = für präzise Teile z. B. Werkzeugbau, Vorrichtungsbau,<br>" +
            "m = für mittlere Genauigkeit, z. B. allgemeiner Maschinenbau,<br>" +
            "c = für grobe Toleranzen, z. B. Stahl- & Lüftungsbau,<br>" +
            "v = für sehr grobe Toleranzen, z. B. Sandguss- und Schweißteile, Schweißkonstruktionen."
    },
    {
        category: "Toleranzen",
        title: "Gruppen Maß-Toleranzen",
        text: "In welche Gruppen werden Maß-Toleranzen unterteilt?",
        solution: "<b>* Allgemein-Toleranzen,<br>" +
            "* Zahlen-Toleranzen,<br>" +
            "* ISO-Toleranzen.</b>"
    },

    {
        category: "Toleranzen",
        title: "Rechtwinkeligkeit",
        text: "Welches Symbol einer Form- oder Lagetoleranz ist hier dargestellt?",
        image: "Media/rechtwinkeligkeit.png",
        solution: "<b>Die Rechtwinkeligkeitstoleranz.<br>" +
            "Sie legt fest, wie stark ein Element von der exakt rechtwinkligen Ausrichtung zu einem Bezug abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Die Toleranz legt fest, wie stark eine Fläche oder Linie vom exakt rechten Winkel abweichen darf.<br><br>" +
            "<b>Beispiel:</b><br> Die rechte senkrechte Fläche muss innerhalb einer Toleranzzone von 0,1 mm rechtwinklig zur unteren waagrechten Fläche liegen.",
        solutionImage: "Media/rechtwinkeligkeit_bsp.png"
    },

    {
        category: "Toleranzen",
        title: "Parallelität",
        text: "Welches Symbol einer Form- oder Lagetoleranz ist hier dargestellt?",
        image: "Media/parallelität.png",
        solution: "<b>Parallelität.</b><br>" +
            "Sie beschreibt die Abweichung einer Linie oder Fläche von einer exakt parallelen Ausrichtung zu einer Bezugsfläche oder Bezugslinie.</b><br><br>" +
            "<i>Erklärung:</i> Die Parallelitätstoleranz legt fest, innerhalb welcher Toleranzzone die Linie oder Fläche liegen muss.",
        solutionImages: [
            "Media/parallelität_bsp.png",
            "Media/parallelität_bsp3.png"
        ]
    },

    {
        category: "Passungen",
        title: "Toleranzen vs. Passungen",
        text: "Was ist der Unterschied zwischen Toleranzen und Passungen?",
        solution: "<b>Toleranzen legen die zulässige Abweichung eines Maßes fest. Eine Passung beschreibt das Zusammenwirken von Bohrung und Welle.</b><br><br>" +
            "<i>Erklärung:</i> Bei einer Passung bestimmen die Toleranzen von Bohrung und Welle, ob Spiel, Übergang oder Übermaß entsteht."
    },
    {
        category: "Passungen",
        title: "Hauptarten von Passungen",
        text: "Welche 3 Hauptarten von Passungen gibt es?",
        solution: "<b>Spielpassung, Übergangspassung, Übermaßpassung.</b><br><br>" +
            "<i>Erklärung:</i> Spiel = leicht beweglich; Übermaß = feste Verbindung; Übergang = Spiel und feste Verbindung möglich."
    },
    {
        category: "Passungen",
        title: "Spielpassung",
        text: "Was kennzeichnet eine Spielpassung?",
        solution: "<b>Mindestmaß der Bohrung ist größer als das Höchstmaß der Welle.</b><br><br>" +
            "<i>Erklärung:</i> Teile haben immer Spiel und lassen sich ohne Kraftaufwand ineinander bewegen."
    },
    {
        category: "Passungen",
        title: "Übermaßpassung",
        text: "Was kennzeichnet eine Übermaßpassung (Presspassung)?",
        solution: "<b>Höchstmaß der Bohrung ist kleiner als das Mindestmaß der Welle.</b><br><br>" +
            "<i>Erklärung:</i> Die Welle ist immer größer als die Bohrung. Fügen erfordert Kraft oder Wärme."
    },
    {
        category: "Passungen",
        title: "Übergangspassung",
        text: "Wann liegt eine Übergangspassung vor?",
        solution: "<b>Wenn je nach Ist-Maß Spiel oder Übermaß entsteht.</b><br><br>" +
            "<i>Erklärung:</i> Die Toleranzfelder von Bohrung und Welle überschneiden sich. Es kann ein Spiel oder Übermaß (Pressung) auftreten."
    },
    {
        category: "Passungen",
        title: "Großbuchstabe ISO-Toleranz",
        text: "Was bedeutet ein Großbuchstabe (z.B. H) bei ISO-Toleranzen?",
        solution: "<b>Toleranzfeld einer Bohrung (Innenmaß).</b><br><br>" +
            "<i>Erklärung:</i> Großbuchstaben stehen für Innenmaße (Bohrungen), Kleinbuchstaben für Außenmaße (Wellen)."
    },
    {
        category: "Passungen",
        title: "Kleinbuchstabe Toleranz",
        text: "Was bedeutet ein Kleinbuchstabe (z.B. f) bei Toleranzen?",
        solution: "<b>Toleranzfeld einer Welle (Außenmaß).</b><br><br>" +
            "<i>Erklärung:</i> Kleinbuchstaben beschreiben Wellen- und Außenmaße im ISO-System."
    },
    {
        category: "Passungen",
        title: "Toleranzfeldbuchstabe H",
        text: "Welches Abmaß hat der Toleranzfeldbuchstabe 'H'?",
        solution: "<b>Das untere Abmaß ist exakt 0.</b><br><br>" +
            "<i>Erklärung:</i> Bohrung 'H' hat als Mindestmaß genau das Nennmaß. Z. B. 20H7 hat als Mindestmaß 20,000 - das Höchstmaß ist über 20,000 (System Einheitsbohrung)."
    },
    {
        category: "Passungen",
        title: "Toleranzfeldbuchstabe h",
        text: "Welches Abmaß hat der Toleranzfeldbuchstabe 'h'?",
        solution: "<b>Das obere Abmaß ist exakt 0.</b><br><br>" +
            "<i>Erklärung:</i> Welle 'h' hat als Höchstmaß genau das Nennmaß. Z. B. 13h9 hat als Höchstmaß 13,000 (System Einheitswelle)."
    },
    {
        category: "Passungen",
        title: "System Einheitsbohrung",
        text: "Was beschreibt das System 'Einheitsbohrung'?",
        solution: "<b>Bohrung hat Toleranz H, Passung wird über die Welle gewählt.</b><br><br>" +
            "<i>Erklärung:</i> Spart Werkzeugkosten, da weniger Bohrer- und Reibahlengrößen benötigt werden."
    },
    {
        category: "Passungen",
        title: "System Einheitswelle",
        text: "Was beschreibt das System 'Einheitswelle'?",
        solution: "<b>Welle hat Toleranz h, Passung wird über Bohrung gewählt.</b><br><br>" +
            "<i>Erklärung:</i> Ideal bei Verwendung von Rundstählen ohne Nachbearbeitung. Rundstähle können z. B. in der Genauigkeitsklasse h6 gekauft werden."
    },
    {
        category: "Toleranzen",
        title: "Zahl in Toleranzangabe",
        text: "Was stellt die Zahl in einer Toleranzangabe dar (z.B. 7 in H7)?",
        solution: "<b>Den Toleranzgrad / Grundtoleranz (IT-Grad).</b><br><br>" +
            "<i>Erklärung:</i> Je kleiner die Zahl, desto enger das Toleranzfeld (IT6 ist genauer als IT11).<br><br>" +
            "<b>Beispiel:</b><br>20H7 → Nennmaß 20 mm, Toleranzfeld H, Toleranzgrad 7.<br><br>" +
            "Die zahl 7 sagt uns, wie groß die Toleranz ist z. B. +21µm",
    },
    {
        category: "Toleranzen",
        title: "Ist-Maß",
        text: "Was ist das Ist-Maß?",
        solution: "<b>Das am fertigen Werkstück gemessene Maß.</b><br><br>" +
            "<i>Erklärung:</i> Das Ist-Maß muss innerhalb der Toleranzgrenzen liegen."
    },
    {
        category: "Toleranzen",
        title: "Allgemeintoleranz in der Zeichnung",
        text: "Wo befindet sich die Angabe zur Allgemeintoleranz in einer Zeichnung?",
        solution: "<b>Im Schriftkopf der Zeichnung (z. B. 'm').</b><br><br>" +
            "<i>Erklärung:</i> Gilt für alle Maße ohne separat angegebene Einzeltoleranz."
    },
    {
        category: "Toleranzen",
        title: "Höchstmaß (Go)",
        text: "Was versteht man unter dem Höchstmaß (Go)?",
        solution: "<b>Das durch die Toleranz festgelegte Größtmaß.</b><br><br>" +
            "<i>Erklärung:</i> z. B. 20±0,4 - Höchstmaß = 20,4."
    },
    {
        category: "Toleranzen",
        title: "Zahlen-Toleranz Abmaßposition",
        text: "Steht bei einer Zahlen-Toleranz das obere Abmaß oben oder unten?",
        solution: "<b>Das obere (größere) Abmaß steht immer oben.</b><br><br>" +
            "<i>Erklärung:</i> Beispiel: Bei 32 (+0,5 / -0,2) steht +0,5 oben.",
        solutionImage: "Media/zahlentoleranz1.png"
    },
    {
        category: "Toleranzen",
        title: "Toleranzklassen H, K, L",
        text: "Wofür stehen die Toleranzklassen H, K, L bei Allgemeintoleranzen?",
        solution: "<b>Für die Toleranzklassen von Form- und Lagetoleranzen.</b><br><br>" +
            "<i>Erklärung:</i> Bei ISO 2768 stehen H, K und L für unterschiedliche Genauigkeitsklassen.<br>" +
            "H = fein,<br>" +
            "K = mittel, <br>" +
            "L = grob."
    },
    {
        category: "Toleranzen",
        title: "Formtoleranzen",
        text: "Was ermitteln Formtoleranzen?",
        solution: "<b>Die maximale Abweichung von der idealen Geometrieform.</b><br><br>" +
            "<i>Erklärung:</i> Zu den Formtoleranzen gehören:<br>" +
            "* Geradheit,<br>" +
            "* Ebenheit,<br>" +
            "* Rundheit,<br>" +
            "* Zylinderform.<br><br>" +
            "Formtoleranzen benötigen KEINEN Bezug."
    },
    {
        category: "Toleranzen",
        title: "Lagetoleranz vs. Formtoleranz",
        text: "Was unterscheidet eine Lagetoleranz von einer Formtoleranz?",
        solution: "<b>Formtoleranzen begrenzen die Abweichung der Form. Lagetoleranzen begrenzen die Lage oder Ausrichtung eines Elements.</b><br><br>" +
            "<i>Erklärung:</i> Eine Formtoleranz beschreibt, wie stark eine Form von der idealen Form abweichen darf.<br>" +
            "Eine Lagetoleranz beschreibt, wo ein Element liegen oder wie es ausgerichtet sein muss.<br><br>" +
            "<b>Beispiel:</b> Parallelität legt fest, wie parallel eine Fläche oder Linie zu einem Bezug sein muss."
    },
    {
        category: "Toleranzen",
        title: "Härteangaben tolerieren",
        text: "Wie müssen Härteangaben auf technischen Zeichnungen toleriert werden?",
        solution: "<b>Nach der jeweiligen technischen Vorgabe bzw. Norm.</b><br><br>" +
            "<i>Erklärung:</i> Härteangaben werden mit einer festgelegten zulässigen Abweichung angegeben. Eine allgemeine Regel, dass immer eine möglichst große Plus-Toleranz verwendet wird, gibt es nicht."
    },
    {
        category: "Toleranzen",
        title: "Form-/Lagetoleranzen zusätzlich",
        text: "Warum werden Form- und Lagetoleranzen zusätzlich zu Maßtoleranzen eingesetzt?",
        solution: "<b>Weil Maßtoleranzen Abweichungen der Form/Lage nicht begrenzen.</b><br><br>" +
            "<i>Erklärung:</i> Ein Bauteil kann im Maß liegen, aber dennoch kegelig oder verzogen sein."
    },
    {
        category: "Passungen",
        title: "Passungsempfehlungen Wälzlager",
        text: "Woher stammen Passungsempfehlungen für Wälzlager meistens?",
        solution: "<b>Aus Herstellerkatalogen und technischen Tabellenwerken.</b><br><br>" +
            "<i>Erklärung:</i> Die passende Toleranzkombination hängt unter anderem von Belastung, Drehzahl und Betriebsbedingungen ab."
    },
    {
        category: "Passungen",
        title: "Passungssystem im Maschinenbau",
        text: "Welches Passungssystem ist im allgemeinen Maschinenbau am häufigsten in Verwendung?",
        solution: "<b>Das System der Einheitsbohrung.</b><br><br>" +
            "<i>Erklärung:</i> Es wird bevorzugt, da man weniger verschiedene Reibahlen benötigt. Wellen-Durchmesser lassen sich leichter anpassen als Bohrungsdurchmesser."
    },














    {
        category: "Toleranzen",
        title: "Mindestmaß",
        text: "Was versteht man unter dem Mindestmaß?",
        solution: "<b>Das kleinste zulässige Maß eines Werkstücks oder einer Bohrung.</b><br><br>" +
            "<i>Erklärung:</i> Das tatsächliche Maß darf das Mindestmaß nicht unterschreiten.<br><br>" +
            "<b>Beispiel:</b> Nennmaß 20 mm ± 0,1 mm → Mindestmaß = 19,9 mm"
    },

    {
        category: "Toleranzen",
        title: "Abmaß",
        text: "Was versteht man unter einem Abmaß?",
        solution: "<b>Die Abweichung eines Grenzmaßes vom Nennmaß.</b><br><br>" +
            "<i>Erklärung:</i> Es gibt ein oberes und ein unteres Abmaß.<br>" +
            "Das obere Abmaß gehört zum Höchstmaß, das untere Abmaß zum Mindestmaß.<br><br>" +
            "<b>Beispiel:</b> Nennmaß 20 mm ± 0,1 mm → oberes Abmaß = +0,1 mm, unteres Abmaß = −0,1 mm"
    },

    {
        category: "Toleranzen",
        title: "Oberes Abmaß",
        text: "Was ist das obere Abmaß?",
        solution: "<b>Die Differenz zwischen Höchstmaß und Nennmaß.</b><br><br>" +
            "<i>Erklärung:</i> Formel: Oberes Abmaß = Höchstmaß − Nennmaß."
    },

    {
        category: "Toleranzen",
        title: "Unteres Abmaß",
        text: "Was ist das untere Abmaß?",
        solution: "<b>Die Differenz zwischen Mindestmaß und Nennmaß.</b><br><br>" +
            "<i>Erklärung:</i> Formel: Unteres Abmaß = Mindestmaß − Nennmaß."
    },

    {
        category: "Toleranzen",
        title: "Toleranzzone",
        text: "Was versteht man unter einer Toleranzzone?",
        solution: "<b>Den Bereich zwischen Mindestmaß und Höchstmaß.</b><br><br>" +
            "<i>Erklärung:</i> Innerhalb dieser Zone darf das Ist-Maß liegen, damit das Werkstück maßlich zulässig ist."
    },

    {
        category: "Toleranzen",
        title: "Toleranz berechnen",
        text: "Wie berechnet man die Toleranz?",
        solution: "<b>Toleranz = Höchstmaß − Mindestmaß.</b><br><br>" +
            "<i>Erklärung:</i> Beispiel: 20,10 mm − 19,90 mm = 0,20 mm Toleranz."
    },

    {
        category: "Toleranzen",
        title: "Beidseitige Toleranz",
        text: "Was bedeutet eine Angabe wie 20 ± 0,1?",
        solution: "<b>Das Maß darf um 0,1 mm nach oben und nach unten abweichen.</b><br><br>" +
            "<i>Erklärung:</i> Mindestmaß = 19,9 mm, Höchstmaß = 20,1 mm."
    },

    {
        category: "Toleranzen",
        title: "Einseitige Toleranz",
        text: "Was bedeutet eine Maßangabe mit nur einem positiven oder negativen Abmaß?",
        solution: "<b>Die zulässige Abweichung liegt nur auf einer Seite des Nennmaßes.</b><br><br>" +
            "<i>Erklärung:</i> Beispiel: 20 +0,2 / 0 bedeutet: Das Maß darf zwischen 20,0 mm und 20,2 mm liegen."
    },

    {
        category: "Toleranzen",
        title: "IT-Toleranzgrad",
        text: "Was sagt der IT-Toleranzgrad aus?",
        solution: "<b>Er bestimmt die Größe bzw. Breite des Toleranzfeldes.</b><br><br>" +
            "<i>Erklärung:</i> Je kleiner die IT-Zahl, desto kleiner ist das Toleranzfeld. Die Zahl allein bestimmt jedoch nicht die Lage des Toleranzfeldes."
    },

    {
        category: "Toleranzen",
        title: "Lage des Toleranzfeldes",
        text: "Was bestimmt der Buchstabe bei einer ISO-Toleranz?",
        solution: "<b>Die Lage des Toleranzfeldes zum Nennmaß.</b><br><br>" +
            "<i>Erklärung:</i> Der Buchstabe gibt die Grundabweichung bzw. die Lage des Toleranzfeldes an. Bei Bohrungen werden Großbuchstaben, bei Wellen Kleinbuchstaben verwendet."
    },

    {
        category: "Passungen",
        title: "Passungsspiel",
        text: "Was versteht man unter Spiel bei einer Passung?",
        solution: "<b>Der Unterschied zwischen dem Maß der Bohrung und dem Maß der Welle, wenn die Bohrung größer ist.</b><br><br>" +
            "<i>Erklärung:</i> Spiel ermöglicht eine Bewegung zwischen Bohrung und Welle."
    },

    {
        category: "Passungen",
        title: "Mindestspiel",
        text: "Wie berechnet man das Mindestspiel?",
        solution: "<b>Mindestspiel = Mindestmaß der Bohrung − Höchstmaß der Welle.</b><br><br>" +
            "<i>Erklärung:</i> Ist das Ergebnis positiv, ist auch im ungünstigsten Fall noch Spiel vorhanden."
    },

    {
        category: "Passungen",
        title: "Höchstspiel",
        text: "Wie berechnet man das Höchstspiel?",
        solution: "<b>Höchstspiel = Höchstmaß der Bohrung − Mindestmaß der Welle.</b><br><br>" +
            "<i>Erklärung:</i> Das Höchstspiel ist das größtmögliche Spiel innerhalb der zulässigen Maße."
    },

    {
        category: "Passungen",
        title: "Übermaß",
        text: "Was versteht man unter Übermaß bei einer Passung?",
        solution: "<b>Die Welle ist größer als die Bohrung.</b><br><br>" +
            "<i>Erklärung:</i> Dadurch entsteht eine Pressung. Zum Fügen ist Kraft oder je nach Anwendung eine Temperaturdifferenz erforderlich."
    },

    {
        category: "Passungen",
        title: "Passungsbeispiel",
        text: "Was bedeutet die Passungsangabe 20 H7/g6?",
        solution: "<b>Eine Bohrung mit Toleranz H7 und eine Welle mit Toleranz g6, beide mit Nennmaß 20 mm.</b><br><br>" +
            "<i>Erklärung:</i> H bezeichnet das Toleranzfeld der Bohrung, g das Toleranzfeld der Welle. Die Zahlen 7 und 6 geben die jeweiligen IT-Toleranzgrade an."
    },

    {
        category: "Passungen",
        title: "Warum H bei Bohrungen?",
        text: "Warum wird im System Einheitsbohrung häufig die Bohrung H verwendet?",
        solution: "<b>Weil dadurch die Bohrung auf ein festgelegtes Toleranzfeld festgelegt wird und die gewünschte Passung über die Welle gewählt werden kann.</b><br><br>" +
            "<i>Erklärung:</i> Dadurch kann die Anzahl unterschiedlicher Werkzeuge und Fertigungsbedingungen reduziert werden."
    },

    {
        category: "Passungen",
        title: "Bohrung und Welle",
        text: "Warum werden Bohrungen mit Großbuchstaben und Wellen mit Kleinbuchstaben bezeichnet?",
        solution: "<b>Zur eindeutigen Unterscheidung zwischen Innenmaß und Außenmaß im ISO-Passungssystem.</b><br><br>" +
            "<i>Erklärung:</i> Großbuchstaben stehen für Bohrungen, Kleinbuchstaben für Wellen."
    },

    {
        category: "Passungen",
        title: "Rechenaufgabe Spielpassung",
        text: "Eine Bohrung hat ein Mindestmaß von 20,00 mm und eine Welle ein Höchstmaß von 19,98 mm. Wie groß ist das Mindestspiel?",
        solution: "<b>0,02 mm</b><br><br>" +
            "<i>Erklärung:</i> Mindestspiel = 20,00 mm − 19,98 mm = 0,02 mm."
    },

    {
        category: "Passungen",
        title: "Rechenaufgabe Toleranz",
        text: "Eine Bohrung hat ein Mindestmaß von 30,00 mm und ein Höchstmaß von 30,03 mm. Wie groß ist die Toleranz?",
        solution: "<b>0,03 mm</b><br><br>" +
            "<i>Erklärung:</i> Toleranz = 30,03 mm − 30,00 mm = 0,03 mm."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Bezugselement",
        text: "Was ist ein Bezugselement bei Form- und Lagetoleranzen?",
        solution: "<b>Ein festgelegtes Element eines Werkstücks, auf das sich eine geometrische Toleranz bezieht.</b><br><br>" +
            "<i>Erklärung:</i> Ein Bezug kann beispielsweise eine Fläche, eine Achse oder eine Mittelebene sein."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Geradheit",
        text: "Was beschreibt die Geradheitstoleranz?",
        solution: "<b>Wie stark eine Linie oder Achse von einer ideal geraden Linie abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Die Geradheit begrenzt die Formabweichung von einer geraden Geometrie."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Ebenheit",
        text: "Was beschreibt die Ebenheitstoleranz?",
        solution: "<b>Wie stark eine Fläche von einer ideal ebenen Fläche abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Die gesamte Fläche muss innerhalb der festgelegten Toleranzzone liegen."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Rundheit",
        text: "Was beschreibt die Rundheitstoleranz?",
        solution: "<b>Wie stark ein kreisförmiger Querschnitt von einer idealen Kreisform abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Die Rundheit ist eine Formtoleranz."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Zylinderform",
        text: "Was beschreibt die Zylinderformtoleranz?",
        solution: "<b>Wie stark die Mantelfläche eines Zylinders von einer idealen Zylinderform abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Die Zylinderform berücksichtigt die gesamte zylindrische Oberfläche."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Positionstoleranz",
        text: "Was beschreibt eine Positionstoleranz?",
        solution: "<b>Sie legt fest, wie weit die tatsächliche Position eines Elements von seiner idealen Position abweichen darf.</b><br><br>" +
            "<i>Erklärung:</i> Sie wird beispielsweise zur genauen Festlegung der Lage von Bohrungen verwendet."
    },

    {
        category: "Form- und Lagetoleranzen",
        title: "Warum Formtoleranzen?",
        text: "Warum reicht eine Maßtoleranz bei einer Welle manchmal nicht aus?",
        solution: "<b>Weil ein Maß innerhalb der Toleranz liegen kann, obwohl die tatsächliche Form trotzdem unzulässig ist.</b><br><br>" +
            "<i>Erklärung:</i> Eine Welle kann beispielsweise im Durchmessermaß liegen, aber trotzdem unrund oder gekrümmt sein."
    }




];

window.questionsData = questions_data;
