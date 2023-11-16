import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/services/settings/firebase_options.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/screens/auth_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarColor: AppColors.white["300"],
      statusBarBrightness: Brightness.dark,
      statusBarIconBrightness: Brightness.dark,
    ),
  );
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: const AuthScreen(),
      theme: ThemeData(
        useMaterial3: true,
        scaffoldBackgroundColor: AppColors.white["300"],
        appBarTheme: AppBarTheme(
          centerTitle: true,
          backgroundColor: AppColors.white["300"],
        ),
      ),
    );
  }
}
