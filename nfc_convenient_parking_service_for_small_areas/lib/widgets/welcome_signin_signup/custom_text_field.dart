import 'package:flutter/material.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class CustomTextField extends StatefulWidget {
  const CustomTextField({
    super.key,
    required this.label,
    required this.textController,
    required this.prefixIcon,
    this.isSecure = false,
    this.enableNumpad = false,
  });

  final String label;
  final TextEditingController textController;
  final IconData prefixIcon;
  final bool isSecure;
  final bool enableNumpad;

  @override
  State<CustomTextField> createState() => _CustomTextFieldState();
}

class _CustomTextFieldState extends State<CustomTextField> {
  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: widget.textController,
      cursorColor: AppColors.gray["100"],
      obscureText: widget.isSecure,
      obscuringCharacter: "*",
      keyboardType: widget.enableNumpad ? TextInputType.phone : TextInputType.text,
      decoration: InputDecoration(
          hintText: widget.label,
          hintStyle: TextStyle(
            color: AppColors.white["Text"],
            fontSize: 14,
          ),
          prefixIcon: Icon(widget.prefixIcon),
          enabledBorder: UnderlineInputBorder(
            borderSide: BorderSide(color: AppColors.white["400"]!),
          )),
      validator: widget.isSecure
          ? (value) {
              if (value == null || value.trim().length < 6) {
                return 'Password must be at least 6 characters long.';
              }
              return null;
            }
          : (value) {},
    );
  }
}
