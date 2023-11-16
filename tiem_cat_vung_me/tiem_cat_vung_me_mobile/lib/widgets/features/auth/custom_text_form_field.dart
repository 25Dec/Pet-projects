import 'package:flutter/material.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';

class CustomTextFormField extends StatelessWidget {
  const CustomTextFormField({
    super.key,
    required this.controller,
    required this.label,
    required this.prefixIcon,
    this.isSecure = false,
    this.enableNumpad = false,
  });

  final TextEditingController controller;
  final String label;
  final IconData prefixIcon;
  final bool isSecure;
  final bool enableNumpad;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      controller: controller,
      obscureText: isSecure,
      cursorColor: AppColors.hintText,
      keyboardType: enableNumpad ? TextInputType.phone : TextInputType.text,
      decoration: InputDecoration(
        hintText: label,
        hintStyle: TextStyle(
          color: AppColors.hintText,
          fontSize: 14,
        ),
        focusedBorder: UnderlineInputBorder(
          borderSide: BorderSide(color: AppColors.hintText),
        ),
        prefixIcon: Icon(prefixIcon),
        enabledBorder: UnderlineInputBorder(
          borderSide: BorderSide(color: AppColors.lightGray),
        ),
      ),
      validator: isSecure
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
