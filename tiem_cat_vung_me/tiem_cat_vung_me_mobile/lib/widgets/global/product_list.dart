import 'package:flutter/material.dart';
import 'package:tiem_cat_vung_me/services/models/product.dart';
import 'package:tiem_cat_vung_me/widgets/global/single_product.dart';

class ProductList extends StatelessWidget {
  const ProductList({super.key, required this.items});

  final List<Product> items;

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      scrollDirection: Axis.horizontal,
      itemCount: items.length,
      itemBuilder: (context, index) {
        return SingleProduct(data: items[index]);
      },
    );
  }
}
