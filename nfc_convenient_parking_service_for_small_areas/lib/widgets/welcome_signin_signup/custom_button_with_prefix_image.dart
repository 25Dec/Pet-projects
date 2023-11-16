import 'package:flutter/material.dart';

class CustomButtonWithPrefixImage extends StatelessWidget {
  const CustomButtonWithPrefixImage({
    super.key,
    required this.onPressed,
    required this.imageAsset,
  });

  final void Function() onPressed;
  final String imageAsset;

  @override
  Widget build(BuildContext context) {
    return IconButton(
      style: ElevatedButton.styleFrom(),
      onPressed: onPressed,
      icon: Image.asset(
        imageAsset,
        width: 20,
        height: 20,
      ),
    );
  }
}
