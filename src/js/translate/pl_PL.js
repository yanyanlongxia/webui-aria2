if (typeof translations == "undefined") {
  translations = {};
}

translations.pl_PL = {
  // header
  Search: "Szukaj",
  // Nav menu
  Add: "Dodaj",
  "By URIs": "Przez URL",
  "By Torrents": "Przez Torrenty",
  "By Metalinks": "Przez Metalinki",
  Manage: "Zarządzaj",
  "Pause All": "Zatrzymaj wszystkie",
  "Resume Paused": "Wznów zatrzymane",
  "Purge Completed": "Czyść zakończone",
  Settings: "Ustawienia",
  "Connection Settings": "Ustawienia połączenia",
  "Global Settings": "Ustawienia globalne",
  "Server info": "Informacje o serwerze",
  "About and contribute": "O projekcie",
  "Toggle navigation": "Przełącz nawigację",
  // body
  // nav side bar
  Miscellaneous: "Różne",
  "Global Statistics": "Statystyki globalne",
  About: "O",
  Displaying: "Wyświetlanie",
  of: "z",
  downloads: "pobranych plików",
  Language: "Język",
  // download filters
  "Download Filters": "Filtry ściągania",
  Running: "Uruchomione",
  Active: "Aktywne",
  Waiting: "Oczekujące",
  Complete: "Zakończone",
  Error: "Błąd",
  Paused: "Zatrzymane",
  Removed: "Usunięte",
  "Hide linked meta-data": "Ukryj zalinkowane meta-dane",
  Toggle: "Przełącz",
  "Reset filters": "Reset filtrów",
  // starred properties
  "Quick Access Settings": "Ustawienia szybkiego dostępu",
  "Save settings": "Zapisz ustawienia",
  "Currently no download in line to display, use the":
    "Obecnie nie można wyświetlić żadnych pobieranych plików. Użyj przycisku",
  "download button to start downloading files!": "aby rozpocząć ściąganie plików!",
  Peers: "Peerów",
  "More Info": "Więcej info",
  Remove: "Usuń",
  "# of": "# z",
  Length: "Długość",
  // modals
  "Add Downloads By URIs": "Dodaj pobieranie przez URI",
  "- You can add multiple downloads (files) at the same time by putting URIs for each file on a separate line.":
    "- Możesz dodać wiele pobrań (plików) w tym samym czasie przez wprowadzenie URI dla każdego w oddzielnej linii.",
  "- You can also add multiple URIs (mirrors) for the *same* file. To do this, separate the URIs by a space.":
    "- Możesz także dodać wiele URI (luster) dla tego *samego* pliku. Zrób to, poprzez oddzielenie URI od siebie spacją.",
  "- A URI can be HTTP(S)/FTP/BitTorrent-Magnet.": "- URI może być HTTP(S)/FTP/BitTorrent-Magnet.",
  "Download settings": "Ustawienia pobierania",
  "Advanced settings": "Zaawansowane ustawienia",
  Cancel: "Anuluj",
  Start: "Rozpocznij",
  Choose: "Wybierz",
  "Quick Access (shown on the main page)": "Szybki dostęp (pokazywane na głównej stronie)",
  // add torrent modal
  "Add Downloads By Torrents": "Dodaj pobierania przez Torrenty",
  "- Select the torrent from the local filesystem to start the download.":
    "- Wybierz torrent z lokalnego systemu plików, aby rozpocząć pobieranie.",
  "- You can select multiple torrents to start multiple downloads.":
    "- Możesz wybrać wiele torrentów do rozpoczęcia wiele pobrań.",
  "- To add a BitTorrent-Magnet URL, use the Add By URI option and add it there.":
    "- Aby dodać BitTorrent-URL Magnetyczny, użyj opcji dodawania przez URI i dodaj to tutaj.",
  "Select Torrents": "Wybierz Torrenty",
  "Select a Torrent": "Wybierz Torrent",
  // add metalink modal
  "Add Downloads By Metalinks": "Dodaj pobierania przez Metalinki",
  "Select Metalinks": "Wybierz Metalinki",
  "- Select the Metalink from the local filesystem to start the download.":
    "- Wybierz Metalinki z lokalnego systemu plików, aby rozpocząć pobieranie.",
  "- You can select multiple Metalinks to start multiple downloads.":
    "- Możesz wybrać wiele Metalinków, aby rozpocząć wiele pobrań.",
  "Select a Metalink": "Wybierz Metalink",
  // select file modal
  "Choose files to start download for": "Wybierz pliki, aby rozpocząć pobieranie dla",
  "Select to download": "Wybierz do pobierania",
  // settings modal
  "Aria2 RPC host and port": "Aria2 RPC host i port",
  "Enter the host": "Wprowadź host",
  "Enter the IP or DNS name of the server on which the RPC for Aria2 is running (default: localhost)":
    "Wprowadź IP lub nazwę DNS serwera, na którym jest uruchomiona Aria2 z RPC (domyślnie: localhost)",
  "Enter the port": "Wprowadź port",
  "Enter the port of the server on which the RPC for Aria2 is running (default: 6800)":
    "Wprowadź port serwera, na którym Aria2 z RPC jest uruchomiona (domyślnie 6800)",
  "Enter the RPC path": "Wprowadź ścieżkę RPC",
  "Enter the path for the Aria2 RPC endpoint (default: /jsonrpc)":
    "Wprowadź ścieżkę dla punktu końcowego Aria2 RPC (domyślnie: /jsonrpc)",
  "SSL/TLS encryption": "szyfrowanie SSL/TLS",
  "Enable SSL/TLS encryption": "Włącz szyfrowanie SSL/TLS",
  "Enter the secret token (optional)": "Wprowadź sekretny token (opcja dodatkowa)",
  "Enter the Aria2 RPC secret token (leave empty if authentication is not enabled)":
    "Wprowadź sekretny token Aria2 RPC (pozostaw puste, jeżeli uwierzytelnienie nie jest włączone)",
  "Enter the username (optional)": "Wprowadź nazwę użytkownika (opcja dodatkowa)",
  "Enter the Aria2 RPC username (empty if authentication not enabled)":
    "Wprowadź nazwę użytkownika Aria2 RPC (pozostaw puste, jeżeli uwierzytelnienie nie jest włączone)",
  "Enter the password (optional)": "Wprowadź hasło (opcja dodatkowa)",
  "Enter the Aria2 RPC password (empty if authentication not enabled)":
    "Wprowadź hasło Aria2 RPC (pozostaw puste, jeżeli uwierzytelnienie nie jest włączone)",
  "Enter base URL (optional)": "Wprowadź podstawowy URL (opcja dodatkowa)",
  "Direct Download": "Bezpośrednie pobieranie",
  "If supplied, links will be created to enable direct download from the Aria2 server.":
    "Jeżeli zaznaczone, linki mogą być utworzone do włączenia bezpośredniego pobierania z serwera Aria2",
  "(Requires appropriate webserver to be configured.)":
    "(Wymaga właściwej konfiguracji serwera WWW)",
  "Save Connection configuration": "Zapisz konfigurację połączenia",
  Filter: "Filtr",
  // server info modal
  "Aria2 server info": "Info o serwerze Aria2",
  "Aria2 Version": "Wersja Aria2",
  "Features Enabled": "Włączone funkcje",
  // about modal
  "To download the latest version of the project, add issues or to contribute back, head on to":
    "Aby ściągnąć najnowszą wersję projektu, dodać zgłodzenia lub wspomagać projekt, udaj się do",
  "Or you can open the latest version in the browser through":
    "Lub otwórz najnowszą wersję przez przeglądarkę",
  Close: "Zamknij",
  // lables
  "Download status": "Status pobierania",
  "Download Speed": "Szybkość pobierania",
  "Upload Speed": "Szybkość wysyłania",
  "Estimated time": "Pozostały czas",
  "Download Size": "Rozmiar pobierania",
  Downloaded: "Pobrane",
  Progress: "Postęp",
  "Download Path": "Ścieżka pobierania",
  Uploaded: "Załadowany",
  "Download GID": "GID pobierania",
  "Number of Pieces": "Liczba kawałków",
  "Piece Length": "Rozmiar kawałka",
  "Shutdown Server": "Wyłącz serwer",
  "The last connection attempt was unsuccessful. Trying another configuration":
    "Ostatnia próba połączenia nie powiodła się. Spróbuj innej konfiguracji",
  "Oh Snap!": "O kurczę!",
  "Could not connect to the aria2 RPC server. Will retry in 10 secs. You might want to check the connection settings by going to Settings > Connection Settings":
    "Nie można połączyć się z serwerem aria2 przez RPC. Kolejna próba za 10 sekund. Być może potrzebujesz sprawdzić ustawienie połączenia poprzez Ustawienia > Ustawienia połączenia",
  "Successfully connected to Aria2 through its remote RPC …":
    "Pomyślnie połączono się z Aria2 przez RPC ...",
  "Successfully connected to Aria2 through remote RPC, however the connection is still insecure. For complete security try adding an authorization secret token while starting Aria2 (through the flag --rpc-secret)":
    "Pomyślnie połączono się z Aria2 przez RPC, jednakże połączenie nie jest bezpieczne. Aby zabezpieczyć dodaj sekretny token autoryzacji podczas startu Aria2 (przez użycie flagi --rpc-secret)",
  "Trying to connect to aria2 using the new connection configuration":
    "Próba połączenia się z Aria2 poprzez użycie nowej konfiguracji połączenia"
};
