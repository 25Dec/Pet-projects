import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class PrimaryIconButton extends StatelessWidget {
  const PrimaryIconButton({super.key, required this.icon, required this.handlePress});

  final IconData icon;

  final void Function() handlePress;

  @override
  Widget build(BuildContext context) {
    return IconButton(
      onPressed: handlePress,
      icon: Icon(icon),
      style: IconButton.styleFrom(backgroundColor: AppColors.white["400"]),
    );
  }
}
