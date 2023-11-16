import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';
import 'package:tiem_cat_vung_me/services/models/product.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';
import 'package:tiem_cat_vung_me/utils/images.dart';
import 'package:tiem_cat_vung_me/widgets/global/custom_app_bar.dart';
import 'package:tiem_cat_vung_me/widgets/global/product_list.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List<Product> data = [
    Product(
      id: "1",
      img: AppImages.productList[0],
      title: "1",
      price: 1,
      quantitySold: 0,
      description: "Nothing",
    ),
    Product(
      id: "2",
      img: AppImages.productList[1],
      title: "1",
      price: 1,
      quantitySold: 0,
      description: "Nothing",
    ),
    Product(
      id: "3",
      img: AppImages.productList[2],
      title: "1",
      price: 1,
      quantitySold: 0,
      description: "Nothing",
    ),
  ];

  void goToProductsPage(BuildContext context) {
    context.push("/${AppRouteConstants.productsRouteName}");
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: Image.asset(
                AppImages.banner1,
                height: 300,
              ),
            ),
            const SizedBox(),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  "Sản phẩm",
                  style: TextStyle(
                    color: AppColors.secondary,
                    fontWeight: FontWeight.bold,
                    fontSize: 25,
                  ),
                ),
                GestureDetector(
                  onTap: () => goToProductsPage(context),
                  child: Row(
                    children: [
                      Text(
                        "Xem thêm",
                        style: TextStyle(color: AppColors.primaryText),
                      ),
                      Icon(Icons.chevron_right, color: AppColors.primaryText)
                    ],
                  ),
                ),
              ],
            ),
            ProductList(
              items: data,
            )
          ],
        ),
      ),
    );
  }
}
