# Teamar Test Ny Generation
Det här projektet innehåller koden till teamårs-testet som bland annat används på montringar. 

## Utveckling
När du utvecklar testet så gör det på branchen `dev` och testa testat lokalt i live-preview i vs code. 

## Branchen `static-tv-specific`
Den här branch innehåller kod som är ändrad för att testet ska se bra ut på en tjock-tv och kan användas när man vill visa testet på en tjock-tv i montern. 

Den versionen av koden måste laddas ned och köras lokalt. Du startar en server med kommandot `python3 -m http.server 3030` och kan sedan gå in på länken `localhost:3030`. 

## Utveckling och `git`
För att ladda upp koden till github brukar man använda programmet `git`. Om du inte vet hur det fungerar rekomenderar jag dig att lära dig grunderna för det underlättar mycket när man uppdaterar koden. Du kan också använda text-redigerare som `vscode` eller liknande för att underlätta när du kodar och `vscode` har ett inbyggt system för att hantera git kommandon. 

Här är en quickstart för att använda `git` i `vscode`: [vscode quickstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart)

Ett tips är att commita så mycket som möjligt, så fort du gjort en meningsfull ändring och skriv vad du ändrade i meddelandet. 

Det är också bra om du lär dig grunderna om branches för att kunna hantera koden på ett bra sätt: [vscode branches](https://code.visualstudio.com/docs/sourcecontrol/branches-worktrees)

***`OBS!`*** branches är nödvändigt att lära sig om flera personer ska jobba på koden samtidigt, även om man jobbar på olika verktyg (det vill säga när man jobbar på samma repo).