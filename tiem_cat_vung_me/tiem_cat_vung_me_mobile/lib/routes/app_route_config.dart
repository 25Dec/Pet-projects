import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';
import 'package:tiem_cat_vung_me/auth/auth_page.dart';
import 'package:tiem_cat_vung_me/pages/others/settings_page.dart';
import 'package:tiem_cat_vung_me/pages/others/user_profile_page.dart';
import 'package:tiem_cat_vung_me/pages/tabs/custom_bottom_navigation_bar.dart';
import 'package:tiem_cat_vung_me/pages/others/cart_page.dart';
import 'package:tiem_cat_vung_me/pages/others/chat_page.dart';
import 'package:tiem_cat_vung_me/pages/others/checkout_page.dart';
import 'package:tiem_cat_vung_me/pages/others/error_page.dart';
import 'package:tiem_cat_vung_me/pages/others/favorites_page.dart';
import 'package:tiem_cat_vung_me/pages/others/home_page.dart';
import 'package:tiem_cat_vung_me/pages/others/product_detail_page.dart';
import 'package:tiem_cat_vung_me/pages/others/products_page.dart';
import 'package:tiem_cat_vung_me/pages/others/search_page.dart';

class AppRouteConfig {
  static GoRouter returnRouter(bool isAuth) {
    GoRouter router = GoRouter(
      routes: [
        GoRoute(
          name: AppRouteConstants.customBottomNavigationBarRouteName,
          path: "/",
          pageBuilder: (context, state) {
            return const MaterialPage(child: CustomBottomNavigationBar());
          },
        ),
        GoRoute(
          name: AppRouteConstants.authRouteName,
          path: "/auth",
          pageBuilder: (context, state) {
            return const MaterialPage(child: AuthPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.homeRouteName,
          path: "/home",
          pageBuilder: (context, state) {
            return const MaterialPage(child: HomePage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.cartRouteName,
          path: "/cart",
          pageBuilder: (context, state) {
            return const MaterialPage(child: CartPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.chatRouteName,
          path: "/chat",
          pageBuilder: (context, state) {
            return const MaterialPage(child: ChatPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.checkoutRouteName,
          path: "/checkout",
          pageBuilder: (context, state) {
            return const MaterialPage(child: CheckoutPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.favoritesRouteName,
          path: "/favorites",
          pageBuilder: (context, state) {
            return const MaterialPage(child: FavoritesPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.productsRouteName,
          path: "/products",
          pageBuilder: (context, state) {
            return const MaterialPage(child: ProductsPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.productDetailRouteName,
          path: "/product_detail",
          pageBuilder: (context, state) {
            return const MaterialPage(child: ProductDetailPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.searchRouteName,
          path: "/search",
          pageBuilder: (context, state) {
            return const MaterialPage(child: SearchPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.settingsRouteName,
          path: "/settings",
          pageBuilder: (context, state) {
            return const MaterialPage(child: SettingsPage());
          },
        ),
        GoRoute(
          name: AppRouteConstants.userProfileRouteName,
          path: "/user_profile",
          pageBuilder: (context, state) {
            return const MaterialPage(child: UserProfilePage());
          },
        ),
      ],
      errorBuilder: (context, state) => const ErrorPage(),
      redirect: (context, state) {
        if (!isAuth) {
          return "/${AppRouteConstants.authRouteName}";
        } else {
          return null;
        }
      },
    );
    return router;
  }
}
