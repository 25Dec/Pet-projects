import 'package:flutter/material.dart';
import 'package:tiem_cat_vung_me/services/models/product.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';

class SingleProduct extends StatelessWidget {
  const SingleProduct({super.key, required this.data});
  final Product data;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 50,
      height: 50,
      color: AppColors.secondary,
      child: Text(data.title),
    );
  }
}
