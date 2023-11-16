import 'dart:io';
import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:nfc_manager/nfc_manager.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/screens/scan_license_plate_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/welcome_signin_signup/custom_button.dart';

class ScanNfcScreen extends StatefulWidget {
  const ScanNfcScreen({super.key});

  @override
  State<ScanNfcScreen> createState() => _ScanNfcScreenState();
}

class _ScanNfcScreenState extends State<ScanNfcScreen> {
  @override
  void initState() {
    super.initState();
    readNfc();
  }

  void readNfc() async {
    await NfcManager.instance.startSession(
      onDiscovered: (tag) async {
        Ndef? ndef = Ndef.from(tag);
        Navigator.of(context).pop();

        await availableCameras().then(
          (value) => Navigator.of(context).push(
            MaterialPageRoute(
              builder: (ctx) => const ScanLicensePlateScreen(),
            ),
          ),
        );

        if (Platform.isIOS) {
          await NfcManager.instance.stopSession();
        }
      },
    );
  }

  void closeScanNfcScreen(BuildContext context) {
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.fromLTRB(32, 32, 32, 16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Text(
            "Ready to Scan",
            style: TextStyle(
              color: AppColors.gray["Text"]!,
              fontSize: 26,
            ),
          ),
          Icon(
            Icons.nfc,
            size: 80,
            color: AppColors.green["200"],
          ),
          Text(
            "Hold your device near the NFC tag.",
            style: TextStyle(
              color: AppColors.gray["Text"]!,
              fontSize: 16,
            ),
          ),
          CustomButton(
            text: "Cancel",
            backgroundColor: AppColors.white["400"]!,
            textColor: AppColors.gray["Text"]!,
            onPressed: () => closeScanNfcScreen(context),
          )
        ],
      ),
    );
  }
}
