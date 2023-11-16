import 'package:flutter/material.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/screens/account_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/screens/cards_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/screens/membership_reward_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/screens/vehicles_screen.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';

class BottomNavBar extends StatefulWidget {
  const BottomNavBar({super.key});

  @override
  State<BottomNavBar> createState() => _BottomNavBarState();
}

class _BottomNavBarState extends State<BottomNavBar> {
  int currentScreenIndex = 0;
  List<Widget> screens = [
    const VehiclesScreen(),
    const CardsScreen(),
    const MembershipRewardScreen(),
    const AccountScreen(),
  ];

  void changePageIdx(int idx) {
    setState(() {
      currentScreenIndex = idx;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[currentScreenIndex],
      bottomNavigationBar: NavigationBar(
        height: 65,
        backgroundColor: AppColors.white["100"],
        elevation: 0.0,
        selectedIndex: currentScreenIndex,
        labelBehavior: NavigationDestinationLabelBehavior.onlyShowSelected,
        onDestinationSelected: (idx) => changePageIdx(idx),
        indicatorColor: AppColors.green["100"],
        destinations: [
          NavigationDestination(
            icon: const Icon(Icons.directions_bike),
            selectedIcon: Icon(
              Icons.directions_bike,
              color: AppColors.green["Text"],
            ),
            label: "Vehicles",
          ),
          NavigationDestination(
            icon: const Icon(Icons.credit_card),
            selectedIcon: Icon(
              Icons.credit_card,
              color: AppColors.green["Text"],
            ),
            label: "Cards",
          ),
          NavigationDestination(
            icon: const Icon(Icons.card_membership),
            selectedIcon: Icon(
              Icons.card_membership,
              color: AppColors.green["Text"],
            ),
            label: "Membership",
          ),
          NavigationDestination(
            icon: const Icon(Icons.person_outline),
            selectedIcon: Icon(
              Icons.person,
              color: AppColors.green["Text"],
            ),
            label: "Account",
          ),
        ],
      ),
    );
  }
}
