import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class CardsScreen extends StatefulWidget {
  const CardsScreen({super.key});

  @override
  State<CardsScreen> createState() => _CardsScreenState();
}

class _CardsScreenState extends State<CardsScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: AppColors.gray[100],
      ),
    );
  }
}
