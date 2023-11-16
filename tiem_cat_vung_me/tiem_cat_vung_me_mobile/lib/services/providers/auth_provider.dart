import 'package:flutter/material.dart';

class AuthProvider extends ChangeNotifier {
  bool isAuth = true;

  void updateAuth(bool isAuth) {
    this.isAuth = isAuth;
    notifyListeners();
  }
}
