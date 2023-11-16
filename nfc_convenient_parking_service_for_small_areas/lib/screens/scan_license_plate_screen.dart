import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/services/controller/scan_controller.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class ScanLicensePlateScreen extends StatefulWidget {
  const ScanLicensePlateScreen({super.key});

  @override
  State<ScanLicensePlateScreen> createState() => _ScanLicensePlateScreenState();
}

class _ScanLicensePlateScreenState extends State<ScanLicensePlateScreen> {
  late CameraController cameraController;

  @override
  void initState() {
    super.initState();
    // cameraController = CameraController(cameras[0], ResolutionPreset.high);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GetBuilder<ScanController>(
        init: ScanController(),
        builder: (controller) {
          return controller.isCameraInitialized.value
              ? Stack(children: [
                  CameraPreview(controller.controller),
                  Container(
                    width: 200,
                    height: 100,
                    decoration: BoxDecoration(
                      border: Border.all(color: AppColors.green["100"]!, width: 4.0),
                    ),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          color: AppColors.white["100"],
                          child: Text("Label"),
                        )
                      ],
                    ),
                  )
                ])
              : const Center(
                  child: Text("Loading camera"),
                );
        },
      ),
    );
  }
}
