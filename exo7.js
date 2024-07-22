var _a;
// Définir les symptômes du COVID-19
var Symptom;
(function (Symptom) {
    Symptom["Fever"] = "Fever";
    Symptom["Cough"] = "Cough";
    Symptom["Fatigue"] = "Fatigue";
    Symptom["ShortnessOfBreath"] = "Shortness of Breath";
    Symptom["LossOfTasteOrSmell"] = "Loss of Taste or Smell";
    Symptom["SoreThroat"] = "Sore Throat";
    Symptom["Headache"] = "Headache";
})(Symptom || (Symptom = {}));
// Fonction pour évaluer les symptômes et déterminer si la personne est atteinte du COVID-19
function assessCovidRisk(answers) {
    // Définir les symptômes critiques du COVID-19
    var criticalSymptoms = [
        Symptom.Fever,
        Symptom.Cough,
        Symptom.ShortnessOfBreath,
        Symptom.LossOfTasteOrSmell
    ];
    // Vérifier si la personne présente des symptômes critiques
    return criticalSymptoms.some(function (symptom) { return answers[symptom]; });
}
// Exemple d'utilisation
var personAnswers = (_a = {},
    _a[Symptom.Fever] = true,
    _a[Symptom.Cough] = false,
    _a[Symptom.Fatigue] = true,
    _a[Symptom.ShortnessOfBreath] = false,
    _a[Symptom.LossOfTasteOrSmell] = false,
    _a[Symptom.SoreThroat] = false,
    _a[Symptom.Headache] = true,
    _a);
var hasCovid = assessCovidRisk(personAnswers);
console.log("La personne est-elle atteinte du COVID-19 ?", hasCovid ? "Oui" : "Non");
