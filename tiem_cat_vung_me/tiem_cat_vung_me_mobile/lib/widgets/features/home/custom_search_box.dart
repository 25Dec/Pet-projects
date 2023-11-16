import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';

import 'package:tiem_cat_vung_me/utils/colors.dart';

class CustomSearchBox extends StatefulWidget {
  const CustomSearchBox({super.key, this.isHomePage = true});
  final bool isHomePage;

  @override
  State<CustomSearchBox> createState() => _CustomSearchBoxState();
}

class _CustomSearchBoxState extends State<CustomSearchBox> {
  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        context.push("/${AppRouteConstants.searchRouteName}");
      },
      child: Container(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
        decoration: BoxDecoration(
          color: AppColors.white,
          borderRadius: BorderRadius.circular(32),
        ),
        constraints: const BoxConstraints(
          minWidth: 230,
          minHeight: 50,
        ),
        child: Row(
          children: [
            Icon(Icons.search_outlined),
            SizedBox(
              width: 5,
            ),
            Text(
              "Bạn đang tìm gì thế?",
              style: TextStyle(color: AppColors.hintText),
            ),
          ],
        ),
      ),
    );
  }
}
