import 'package:camera/camera.dart';
import 'package:flutter_tflite/flutter_tflite.dart';
import 'package:get/get.dart';
import 'package:permission_handler/permission_handler.dart';

class ScanController extends GetxController {
  late CameraController controller;
  late List<CameraDescription> cameras;

  var isCameraInitialized = false.obs;
  var cameraCount = 0;
  var x, y, w, h = 0;
  var label = "";

  @override
  void onInit() {
    super.onInit();
    initCamera();
    initTFLite();
  }

  @override
  void dispose() {
    super.dispose();
    controller.dispose();
  }

  initCamera() async {
    if (await Permission.camera.request().isGranted) {
      cameras = await availableCameras();
      controller = CameraController(cameras[0], ResolutionPreset.high);
      await controller.initialize().then((value) {
        controller.startImageStream((image) {
          cameraCount++;
          if (cameraCount % 10 == 0) {
            cameraCount = 0;
            objectDetector(image);
          }
          update();
        });
      });
      isCameraInitialized(true);
      update();
    } else {}
  }

  initTFLite() async {
    await Tflite.loadModel(
      model: "assets/model/mobilenet_v1_1.0_224.tflite",
      labels: "assets/labels/mobilenet_v1_1.0_224.txt",
      isAsset: true,
      numThreads: 1,
      useGpuDelegate: false,
    );
  }

  objectDetector(CameraImage image) async {
    var detector = await Tflite.runModelOnFrame(
      bytesList: image.planes.map((e) => e.bytes).toList(),
      asynch: true,
      imageWidth: image.width,
      imageHeight: image.height,
      imageMean: 127.5,
      imageStd: 127.5,
      rotation: 90,
      threshold: 0.4,
    );

    if (detector != null) {
      if (detector.first['confidenceInClass'] * 100 > 45) {
        label = detector.first['label'].toString();
      }
      print(detector);
    }
  }
}
