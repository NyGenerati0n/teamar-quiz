# Teamar Testet Ny Generation
Det här projektet innehåller koden till teamårs-testet som bland annat används på montringar. Projektet innehåller 3 versioner av testet som ligger ute på [`/`](https://nygenerati0n.github.io/teamar-quiz/), [`/monter/`](https://nygenerati0n.github.io/teamar-quiz/monter) och [`/monter-oldtv/`](https://nygenerati0n.github.io/teamar-quiz/monter-oldtv). Sökvägarna lägg till efter projektets url: 

`https://nygenerati0n.github.io/teamar-quiz/`

Testet är publicerat med hjälp av github pages och så fort man laddar upp en ändring i branchen main så uppdateras hemsidan automatiskt. 


# Projektstruktur
De olika versionerna finns i samma map som sökvägen visar. Standard-versionen ligger i `root` ( `/` ) och alla andra versioner `bygger på den`, vilket innebär att de använder `css` och `bilder` från standard-versionen. Varje version innehåller även egen `css` som skriver över eller lägger till ny styling utöver basstylingen. 

Du kan skapa en ny version genom att skapa en ny mapp (namnet på mappen bestämer sökvägen i länken) och sedan kopiera och modifiera någon av index.html filerna. Sedan kan du lägga till egen css utefter strukturen i de andra versionernas mappar. 

När du `länkar css` behöver du länka till versionens css filer `efter` att du länkar till `root` filen. 

## Versionen Monter-oldtv
Denna version av testet är designat och anpassat utefter en tjock-tv. Färgerna kan behöva schysteras för olika tv-apparater och förändringarna är bara aktiva för medelstora skärmar (mellan 1440 och 600 i bredd).


# Grundläggande förändring (`Ändra färg`)
För att ändra färgerna på testet finns det två `variablar` i `main.css` (både i `/css/` mappen och i `/<version>/css/`) där du kan redigera hex-koderna för att få andra färger. 

- --primary-color: Färgen på texten och knapparna
- --background-color: Färgen på bakgrunden

Vill du göra andra färgförändringar, t.ex. för `specifika element`, behöver du lära dig grundläggande `css` och  `html`. 


# Utveckling och `git`
För att ladda ner/upp samt ändra koden på github brukar man använda programmet `git`. Om du inte vet hur det fungerar rekomenderar jag dig att lära dig grunderna för det underlättar mycket när man uppdaterar koden. Du kan också använda text-redigerare som `vscode` eller liknande för att underlätta när du kodar och `vscode` har ett inbyggt system för att hantera git kommandon. 

Här är en quickstart för att använda `git` i `vscode`: [vscode quickstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart)

Ett tips är att commita så mycket som möjligt, så fort du gjort en meningsfull ändring och skriv vad du ändrade i meddelandet. Det gör att du kan gå tillbaka om du förstör något och då kan också andra se alla ändringar som gjorts. 

Om du vill lära dig mer kan du också kolla på branches, som används om flera personer ska jobba på koden samtidigt: [vscode branches](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees)