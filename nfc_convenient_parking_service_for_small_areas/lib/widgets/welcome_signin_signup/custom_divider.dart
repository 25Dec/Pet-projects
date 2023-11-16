import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class CustomDivider extends StatelessWidget {
  const CustomDivider({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const Expanded(child: Divider()),
        Text(
          " OR ",
          style: TextStyle(
            color: AppColors.gray["Text"],
          ),
        ),
        const Expanded(child: Divider()),
      ],
    );
  }
}
