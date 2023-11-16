import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/vehicles/custom_dialog.dart';
import 'package:nfc_manager/nfc_manager.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/screens/scan_nfc_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/vehicles/primary_icon_button.dart';

class VehiclesScreen extends StatefulWidget {
  const VehiclesScreen({super.key});

  @override
  State<VehiclesScreen> createState() => _VehiclesScreenState();
}

class _VehiclesScreenState extends State<VehiclesScreen> {
  int totalNumberOfVehicles = 3;

  void openScanNFCScreen(BuildContext context) {
    showModalBottomSheet(
      context: context,
      builder: (ctx) => const ScanNfcScreen(),
    );
  }

  void checkNfcAvailable(BuildContext context) async {
    bool isNfcAvailable = await NfcManager.instance.isAvailable();

    if (!isNfcAvailable) {
      // ignore: use_build_context_synchronously
      showDialog(
        context: context,
        builder: (ctx) => const CustomDialog(),
      );
    } else {
      // ignore: use_build_context_synchronously
      openScanNFCScreen(context);
    }
  }

  void searchVehicles() {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              "Total number of vehicles: $totalNumberOfVehicles",
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            Row(
              children: [
                PrimaryIconButton(
                  icon: Icons.add,
                  handlePress: () => checkNfcAvailable(context),
                ),
                PrimaryIconButton(
                  icon: Icons.search,
                  handlePress: () => searchVehicles(),
                )
              ],
            ),
          ],
        ),
      ),
      body: Container(),
    );
  }
}
