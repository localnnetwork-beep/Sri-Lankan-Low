# SRI LANKA LAW – Android APK Build Project

මෙය දැනට ඇති Sinhala-first Sri Lanka Law app prototype එක Android WebView app එකක් ලෙස package කරන project එකයි.

## මේ project එකේ දැනට තිබෙන්නේ
- Android app wrapper එක
- Sinhala-first UI සහ නීති කාණ්ඩ 24
- නීති කාණ්ඩ සෙවුම
- නිල නීති මූලාශ්‍ර වෙත links
- GitHub Actions හරහා APK build workflow එක

## වැදගත් සීමාව
මෙය තවම සම්පූර්ණ නීති දත්ත ගබඩාවක් නොවේ. AI Legal Assistant එක දැනට demo/placeholder එකක් පමණයි. සියලු පනත්, වගන්ති, සංශෝධන, බලාත්මක දින සහ නඩු තීන්දු නිල මූලාශ්‍රවලින් තහවුරු කර ඇතුළත් කළ යුතුයි. මෙය නීතිඥ උපදෙස් වෙනුවට භාවිත නොකරන්න.

## Computer එකෙන් APK එක හදාගන්න පහසුම ක්‍රමය (GitHub Actions)

1. ZIP file එක computer එකට download කර extract කරන්න.
2. GitHub account එකකට sign in වෙන්න.
3. `New repository` තෝරලා `sri-lanka-law-app` වගේ නමක් දෙන්න.
4. Repository එක තුළ `Add file` → `Upload files` තෝරන්න.
5. Extract කළ folder එක ඇතුළේ තියෙන සියලුම files/folders ( `.github` ඇතුළුව) upload කරන්න. ZIP file එකම upload කරන්න එපා.
6. `Commit changes` කරන්න.
7. Repository එකේ `Actions` tab එකට යන්න.
8. `Build Sri Lanka Law APK` workflow එක තෝරලා `Run workflow` ඔබන්න.
9. Build එක සාර්ථක වූ පසු run එකේ පහළ `Artifacts` යටතේ `Sri-Lanka-Law-APK` download කරන්න.
10. ZIP artifact එක extract කර `app-debug.apk` file එක Android phone එකට යවන්න.
11. Phone එකෙන් APK එක open කර install කරන්න. Android එක අහන විට browser/file manager සඳහා “Install unknown apps” අවසරය දෙන්න.

## Android Studio භාවිතයෙන් build කිරීම
1. Android Studio install කරගන්න.
2. `Open` තෝරා මෙම project folder එක open කරන්න.
3. Android SDK Platform 35 සහ Java 17 install කරගන්න.
4. Gradle sync අවසන් වූ පසු `Build` → `Build Bundle(s) / APK(s)` → `Build APK(s)` තෝරන්න.
5. APK එක `app/build/outputs/apk/debug/` තුළ ලැබේ.

## Play Store ගැන
මෙහි workflow එකෙන් ලැබෙන්නේ පරීක්ෂණයට install කළ හැකි debug APK එකකි. Google Play Store සඳහා release-signed Android App Bundle (AAB), privacy policy, store listing, සහ සම්පූර්ණ app/data review අවශ්‍ය වේ. Signing key එක කිසිවිටෙක GitHub repository එකට upload කරන්න එපා.

## ආරක්ෂාව
මෙම project එකේ API key හෝ password කිසිවක් ඇතුළත් කර නැත. පසුව AI backend එකක් සම්බන්ධ කළහොත් API key එක app code එකට නොදමා server එකේ ආරක්ෂිතව තබන්න.
