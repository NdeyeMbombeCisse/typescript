// En créant des interfaces et des types génériques, écrire un programme permettant
// de faire la simulation de test covid-19 en se basant sur une série de questionnaires,
// lié à quelques symptômes du covid-19 que vous définissez.
// Le programme doit au finale, dire si la personne a atteint la covid-19 ou non.

// Définir les symptômes du COVID-19   
enum Symptome {
    Fièvre = "Fièvre",
    Toux = "Toux",
    Fatigue = "Fatigue",
    Essoufflement = "Essoufflement",
    PerteDeGoûtOuOdorat = "Perte de Goût ou Odorat",
    MalDeGorge = "Mal de Gorge",
    MalDeTête = "Mal de Tête"
}

// Définir l'interface pour les réponses au questionnaire
interface Questionnaire {
    [Symptome.Fièvre]: boolean;
    [Symptome.Toux]: boolean;
    [Symptome.Fatigue]: boolean;
    [Symptome.Essoufflement]: boolean;
    [Symptome.PerteDeGoûtOuOdorat]: boolean;
    [Symptome.MalDeGorge]: boolean;
    [Symptome.MalDeTête]: boolean; 
}

// Fonction pour évaluer les symptômes et déterminer si la personne est atteinte du COVID-19
function evaluerRisqueCovid(reponses: Questionnaire): boolean {
    // Définir les symptômes critiques du COVID-19
    const symptomesCritiques: Symptome[] = [
        Symptome.Fièvre,
        Symptome.Toux,
        Symptome.Essoufflement,
        Symptome.PerteDeGoûtOuOdorat
    ];

    // Vérifier si la personne présente des symptômes critiques
    return symptomesCritiques.some(symptome => reponses[symptome]);
}

// Exemple d'utilisation
const reponsesPersonne: Questionnaire = {
    [Symptome.Fièvre]: true,
    [Symptome.Toux]: false,
    [Symptome.Fatigue]: true,
    [Symptome.Essoufflement]: false,
    [Symptome.PerteDeGoûtOuOdorat]: false,
    [Symptome.MalDeGorge]: false,
    [Symptome.MalDeTête]: true
};

const aCovid = evaluerRisqueCovid(reponsesPersonne);

console.log("La personne est-elle atteinte du COVID-19 ?", aCovid ? "Oui" : "Non");
