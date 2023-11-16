import 'package:flutter/material.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';

class AppTheme {
  static ThemeData theme = ThemeData(
    useMaterial3: true,
    appBarTheme: AppBarTheme(
      backgroundColor: AppColors.primary,
    ),
    scaffoldBackgroundColor: AppColors.primary,
    textButtonTheme: TextButtonThemeData(
      style: ButtonStyle(
        splashFactory: NoSplash.splashFactory,
        overlayColor: MaterialStateProperty.all(Colors.transparent),
        padding: MaterialStateProperty.all<EdgeInsets>(
          const EdgeInsets.fromLTRB(4, 0, 8, 0),
        ),
      ),
    ),
  );
}
