import 'package:flutter/material.dart';
import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';

import 'package:tiem_cat_vung_me/widgets/global/custom_app_bar.dart';
import 'package:tiem_cat_vung_me/pages/others/favorites_page.dart';
import 'package:tiem_cat_vung_me/pages/others/home_page.dart';
import 'package:tiem_cat_vung_me/pages/others/user_profile_page.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';

class CustomBottomNavigationBar extends StatefulWidget {
  const CustomBottomNavigationBar({super.key});

  @override
  State<CustomBottomNavigationBar> createState() => _CustomBottomNavigationBarState();
}

class _CustomBottomNavigationBarState extends State<CustomBottomNavigationBar> {
  int _currPageIdx = 0;

  final List<Map<String, dynamic>> _pages = [
    {"name": AppRouteConstants.homeRouteName, "widget": const HomePage()},
    {"name": AppRouteConstants.favoritesRouteName, "widget": const FavoritesPage()},
    {"name": AppRouteConstants.userProfileRouteName, "widget": const UserProfilePage()},
  ];

  void changePageIdx(int idx) {
    setState(() => _currPageIdx = idx);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(typeOfPage: _pages[_currPageIdx]["name"]),
      body: _pages[_currPageIdx]["widget"],
      bottomNavigationBar: NavigationBar(
        height: 65,
        backgroundColor: AppColors.white,
        elevation: 0.0,
        selectedIndex: _currPageIdx,
        labelBehavior: NavigationDestinationLabelBehavior.onlyShowSelected,
        onDestinationSelected: (idx) => changePageIdx(idx),
        indicatorColor: AppColors.secondary,
        destinations: [
          NavigationDestination(
            icon: const Icon(Icons.home_outlined),
            selectedIcon: Icon(
              Icons.home,
              color: AppColors.white,
            ),
            label: "Trang chủ",
          ),
          NavigationDestination(
            icon: const Icon(Icons.favorite_outline_rounded),
            selectedIcon: Icon(
              Icons.favorite_rounded,
              color: AppColors.white,
            ),
            label: "Yêu thích",
          ),
          NavigationDestination(
            icon: const Icon(Icons.person_outline),
            selectedIcon: Icon(
              Icons.person,
              color: AppColors.white,
            ),
            label: "Tài khoản",
          ),
        ],
      ),
    );
  }
}
