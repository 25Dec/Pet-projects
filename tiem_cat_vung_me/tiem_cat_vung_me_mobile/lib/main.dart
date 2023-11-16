import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:provider/provider.dart';

import 'package:tiem_cat_vung_me/routes/app_route_config.dart';
import 'package:tiem_cat_vung_me/services/providers/auth_provider.dart';
import 'package:tiem_cat_vung_me/services/settings/firebase_options.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';
import 'package:tiem_cat_vung_me/utils/theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);

  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarColor: AppColors.primary,
      statusBarBrightness: Brightness.dark,
      statusBarIconBrightness: Brightness.dark,
    ),
  );

  runApp(
    MultiProvider(
      providers: [ChangeNotifierProvider(create: (context) => AuthProvider())],
      child: const MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    bool isAuth = Provider.of<AuthProvider>(context).isAuth;

    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      theme: AppTheme.theme,
      routeInformationParser: AppRouteConfig.returnRouter(isAuth).routeInformationParser,
      routeInformationProvider: AppRouteConfig.returnRouter(isAuth).routeInformationProvider,
      routerDelegate: AppRouteConfig.returnRouter(isAuth).routerDelegate,
    );
  }
}
