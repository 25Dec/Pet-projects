import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class CustomDialog extends StatefulWidget {
  const CustomDialog({super.key});

  @override
  State<CustomDialog> createState() => _CustomDialogState();
}

class _CustomDialogState extends State<CustomDialog> {
  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: Text(
        "Notification",
        style: TextStyle(
          color: AppColors.gray["Text"]!,
          fontWeight: FontWeight.bold,
        ),
      ),
      content: Text(
        "Please enable NFC feature to use related functions.",
        style: TextStyle(color: AppColors.gray["Text"]!),
      ),
      actions: [
        TextButton(
          style: TextButton.styleFrom(splashFactory: NoSplash.splashFactory),
          onPressed: () => Navigator.of(context).pop(),
          child: Text(
            "OK",
            style: TextStyle(
              color: AppColors.gray["Text"]!,
            ),
          ),
        )
      ],
      elevation: 0,
    );
  }
}
