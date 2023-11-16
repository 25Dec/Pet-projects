import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';
import 'package:tiem_cat_vung_me/widgets/features/home/custom_search_box.dart';
import 'package:tiem_cat_vung_me/widgets/global/custom_noti_icon_button.dart';

class CustomAppBar extends StatefulWidget implements PreferredSizeWidget {
  const CustomAppBar({super.key, required this.typeOfPage});

  final String typeOfPage;

  @override
  Size get preferredSize => const Size(double.maxFinite, 65);

  @override
  State<CustomAppBar> createState() => _CustomAppBarState();
}

class _CustomAppBarState extends State<CustomAppBar> {
  void goToCartPage(BuildContext context) {
    context.push("/${AppRouteConstants.cartRouteName}");
  }

  void goToChatPage(BuildContext context) {
    context.push("/${AppRouteConstants.chatRouteName}");
  }

  void goToSettingsPage(BuildContext context) {
    context.push("/${AppRouteConstants.settingsRouteName}");
  }

  @override
  Widget build(BuildContext context) {
    late MainAxisAlignment mainAxis;
    if (widget.typeOfPage == AppRouteConstants.homeRouteName) {
      mainAxis = MainAxisAlignment.spaceBetween;
    } else {
      mainAxis = MainAxisAlignment.end;
    }

    return Container(
      margin: const EdgeInsets.fromLTRB(16, 16, 16, 0),
      child: SafeArea(
        child: Row(
          mainAxisAlignment: mainAxis,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            if (widget.typeOfPage == AppRouteConstants.homeRouteName)
              const CustomSearchBox(),
            if (widget.typeOfPage == AppRouteConstants.favoritesRouteName)
              IconButton(onPressed: () {}, icon: const Icon(Icons.search_outlined)),
            if (widget.typeOfPage == AppRouteConstants.userProfileRouteName)
              IconButton(
                  onPressed: () => goToSettingsPage(context),
                  icon: const Icon(Icons.settings_outlined)),
            CustomNotiIconButton(
              icon: Icons.shopping_cart_outlined,
              amount: 0,
              onPressed: () => goToCartPage(context),
            ),
            CustomNotiIconButton(
              icon: Icons.chat_outlined,
              amount: 100,
              onPressed: () => goToChatPage(context),
            ),
          ],
        ),
      ),
    );
  }
}
