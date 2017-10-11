---
version: v1.7.9
permalink: /docs/api/locales/
category: API
redirect_from:
  - /docs/v0.37.8/api/locales/
  - /docs/v0.37.7/api/locales/
  - /docs/v0.37.6/api/locales/
  - /docs/v0.37.5/api/locales/
  - /docs/v0.37.4/api/locales/
  - /docs/v0.37.3/api/locales/
  - /docs/v0.37.1/api/locales/
  - /docs/v0.37.0/api/locales/
  - /docs/v0.36.12/api/locales/
  - /docs/v0.36.11/api/locales/
  - /docs/v0.36.10/api/locales/
  - /docs/v0.36.9/api/locales/
  - /docs/v0.36.8/api/locales/
  - /docs/v0.36.7/api/locales/
  - /docs/v0.36.6/api/locales/
  - /docs/v0.36.5/api/locales/
  - /docs/v0.36.4/api/locales/
  - /docs/v0.36.3/api/locales/
  - /docs/v0.36.2/api/locales/
  - /docs/v0.36.0/api/locales/
  - /docs/v0.35.5/api/locales/
  - /docs/v0.35.4/api/locales/
  - /docs/v0.35.3/api/locales/
  - /docs/v0.35.2/api/locales/
  - /docs/v0.35.1/api/locales/
  - /docs/v0.34.4/api/locales/
  - /docs/v0.34.3/api/locales/
  - /docs/v0.34.2/api/locales/
  - /docs/v0.34.1/api/locales/
  - /docs/v0.34.0/api/locales/
  - /docs/v0.33.9/api/locales/
  - /docs/v0.33.8/api/locales/
  - /docs/v0.33.7/api/locales/
  - /docs/v0.33.6/api/locales/
  - /docs/v0.33.4/api/locales/
  - /docs/v0.33.3/api/locales/
  - /docs/v0.33.2/api/locales/
  - /docs/v0.33.1/api/locales/
  - /docs/v0.33.0/api/locales/
  - /docs/v0.32.3/api/locales/
  - /docs/v0.32.2/api/locales/
  - /docs/v0.31.2/api/locales/
  - /docs/v0.31.0/api/locales/
  - /docs/v0.30.4/api/locales/
  - /docs/v0.29.2/api/locales/
  - /docs/v0.29.1/api/locales/
  - /docs/v0.28.3/api/locales/
  - /docs/v0.28.2/api/locales/
  - /docs/v0.28.1/api/locales/
  - /docs/v0.28.0/api/locales/
  - /docs/v0.27.3/api/locales/
  - /docs/v0.27.2/api/locales/
  - /docs/v0.27.1/api/locales/
  - /docs/v0.27.0/api/locales/
  - /docs/v0.26.1/api/locales/
  - /docs/v0.26.0/api/locales/
  - /docs/v0.25.3/api/locales/
  - /docs/v0.25.2/api/locales/
  - /docs/v0.25.1/api/locales/
  - /docs/v0.25.0/api/locales/
  - /docs/v0.24.0/api/locales/
  - /docs/v0.23.0/api/locales/
  - /docs/v0.22.3/api/locales/
  - /docs/v0.22.2/api/locales/
  - /docs/v0.22.1/api/locales/
  - /docs/v0.21.3/api/locales/
  - /docs/v0.21.2/api/locales/
  - /docs/v0.21.1/api/locales/
  - /docs/v0.21.0/api/locales/
  - /docs/v0.20.8/api/locales/
  - /docs/v0.20.7/api/locales/
  - /docs/v0.20.6/api/locales/
  - /docs/v0.20.5/api/locales/
  - /docs/v0.20.4/api/locales/
  - /docs/v0.20.3/api/locales/
  - /docs/v0.20.2/api/locales/
  - /docs/v0.20.1/api/locales/
  - /docs/v0.20.0/api/locales/
  - /docs/latest/api/locales/
source_url: 'https://github.com/electron/electron/blob/master/docs/api/locales.md'
title: Locales
excerpt: Locale values returned by <code>app.getLocale()</code>.
sort_title: locales
---



<!--


                                      ::::
                                    :o+//+o:
                                    +o    oo-
                                    :o+//oo/+o/
                                      -::-   -oo:
                                               /s/
                      -::::::::-                :s/  :::--
                  :+oo+////////+:        -:/+oo/ :s:-///++oo+:
                /o+:                -/+oo+/:-     +o-      -:+o:
               /s:              -:+o+/:           -o+         :s/
              -s/            -/oo/:                /s-         +s-
              -s/         -/oo/-                   -s/         /s-
               oo       :+o/-                       oo         oo
               -s/    :oo/                          /s-       /s-
                :s/ :oo:              -::-          /s-      /s:
                  -+o/               /ssss/         :s:    -+o-
                 :o+--               /ssss/         :s:   :o+-
                :s/  +o:              -::-          /s-   --
               -s/    :+o/-                         /s-
               oo       -+o+-                       oo
              -s/         -/oo/-                   -s/
             -+soo+:         -/oo/:                /s-      /oooo+-
             o+   :s:           -:+o+/:-          -o+      /s:  -oo
             oo:--/s:       ::      -:+oo+/:-     -/-      /s/--:o+
              :+++/-        :s:          -:/+ooo++//////++oo//+o+:
                             /s:                --::::::--
                              /s/              /s-
                               :oo:          :oo:
                                 /oo/-    -/oo/
                                   -/+oooo+/-





                   _______  _______  _______  _______  __
                  |       ||       ||       ||       ||  |
                  |  _____||_     _||   _   ||    _  ||  |
                  | |_____   |   |  |  | |  ||   |_| ||  |
                  |_____  |  |   |  |  |_|  ||    ___||__|
                   _____| |  |   |  |       ||   |     __
                  |_______|  |___|  |_______||___|    |__|


    This file is generated automatically, so it should not be edited.

    To make changes, head over to the electron/electron repository:

    https://github.com/electron/electron/blob/master/docs/api/locales.md

    Thanks!

-->
# Locales

> Locale values returned by `app.getLocale()`.

Electron uses Chromium's `l10n_util` library to fetch the locale. Possible values are listed below:

| Language Code | Language Name |
| --- | --- |
| af | Afrikaans |
| am | Amharic |
| ar | Arabic |
| az | Azerbaijani |
| be | Belarusian |
| bg | Bulgarian |
| bh | Bihari |
| bn | Bengali |
| br | Breton |
| bs | Bosnian |
| ca | Catalan |
| co | Corsican |
| cs | Czech |
| cy | Welsh |
| da | Danish |
| de | German |
| de-AT | German (Austria) |
| de-CH | German (Switzerland) |
| de-DE | German (Germany) |
| el | Greek |
| en | English |
| en-AU | English (Australia) |
| en-CA | English (Canada) |
| en-GB | English (UK) |
| en-NZ | English (New Zealand) |
| en-US | English (US) |
| en-ZA | English (South Africa) |
| eo | Esperanto |
| es | Spanish |
| es-419 | Spanish (Latin America) |
| et | Estonian |
| eu | Basque |
| fa | Persian |
| fi | Finnish |
| fil | Filipino |
| fo | Faroese |
| fr | French |
| fr-CA | French (Canada) |
| fr-CH | French (Switzerland) |
| fr-FR | French (France) |
| fy | Frisian |
| ga | Irish |
| gd | Scots Gaelic |
| gl | Galician |
| gn | Guarani |
| gu | Gujarati |
| ha | Hausa |
| haw | Hawaiian |
| he | Hebrew |
| hi | Hindi |
| hr | Croatian |
| hu | Hungarian |
| hy | Armenian |
| ia | Interlingua |
| id | Indonesian |
| is | Icelandic |
| it | Italian |
| it-CH | Italian (Switzerland) |
| it-IT | Italian (Italy) |
| ja | Japanese |
| jw | Javanese |
| ka | Georgian |
| kk | Kazakh |
| km | Cambodian |
| kn | Kannada |
| ko | Korean |
| ku | Kurdish |
| ky | Kyrgyz |
| la | Latin |
| ln | Lingala |
| lo | Laothian |
| lt | Lithuanian |
| lv | Latvian |
| mk | Macedonian |
| ml | Malayalam |
| mn | Mongolian |
| mo | Moldavian |
| mr | Marathi |
| ms | Malay |
| mt | Maltese |
| nb | Norwegian (Bokmal) |
| ne | Nepali |
| nl | Dutch |
| nn | Norwegian (Nynorsk) |
| no | Norwegian |
| oc | Occitan |
| om | Oromo |
| or | Oriya |
| pa | Punjabi |
| pl | Polish |
| ps | Pashto |
| pt | Portuguese |
| pt-BR | Portuguese (Brazil) |
| pt-PT | Portuguese (Portugal) |
| qu | Quechua |
| rm | Romansh |
| ro | Romanian |
| ru | Russian |
| sd | Sindhi |
| sh | Serbo-Croatian |
| si | Sinhalese |
| sk | Slovak |
| sl | Slovenian |
| sn | Shona |
| so | Somali |
| sq | Albanian |
| sr | Serbian |
| st | Sesotho |
| su | Sundanese |
| sv | Swedish |
| sw | Swahili |
| ta | Tamil |
| te | Telugu |
| tg | Tajik |
| th | Thai |
| ti | Tigrinya |
| tk | Turkmen |
| to | Tonga |
| tr | Turkish |
| tt | Tatar |
| tw | Twi |
| ug | Uighur |
| uk | Ukrainian |
| ur | Urdu |
| uz | Uzbek |
| vi | Vietnamese |
| xh | Xhosa |
| yi | Yiddish |
| yo | Yoruba |
| zh | Chinese |
| zh-CN | Chinese (Simplified) |
| zh-TW | Chinese (Traditional) |
| zu | Zulu |
