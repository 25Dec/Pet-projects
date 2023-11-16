// ignore_for_file: use_build_context_synchronously

import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';
import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';
import 'package:tiem_cat_vung_me/services/functions/auth_methods.dart';

import 'package:tiem_cat_vung_me/services/providers/auth_provider.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';
import 'package:tiem_cat_vung_me/widgets/features/auth/custom_elevated_button.dart';
import 'package:tiem_cat_vung_me/widgets/features/auth/custom_text_form_field.dart';

class AuthPage extends StatefulWidget {
  const AuthPage({super.key});

  @override
  State<AuthPage> createState() => _AuthPageState();
}

class _AuthPageState extends State<AuthPage> {
  TextEditingController phoneNumbController = TextEditingController();
  TextEditingController passwordController = TextEditingController();
  bool isSignIn = true;
  bool isLoading = false;

  void signUp(BuildContext context) async {
    setState(() {
      isLoading = true;
    });

    String res = await AuthMethods.signUp(phoneNumber: phoneNumbController.text);
    if (res == "success") {
      print(res);
    } else {}

    setState(() {
      isLoading = false;
    });
  }

  void signIn(BuildContext context) {
    // Provider.of<AuthProvider>(context, listen: false).updateAuth(true);
    // context.go("/");
  }

  @override
  void dispose() {
    super.dispose();
    phoneNumbController.dispose();
    passwordController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(isSignIn ? "Đăng nhập" : "Đăng ký"),
        centerTitle: true,
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(32, 0, 32, 8),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Form(
                child: Column(
                  children: [
                    CustomTextFormField(
                      controller: phoneNumbController,
                      label: "Số điện thoại",
                      prefixIcon: Icons.phone_outlined,
                      enableNumpad: true,
                    ),
                    if (isSignIn)
                      const SizedBox(
                        height: 8,
                      ),
                    if (isSignIn)
                      CustomTextFormField(
                        controller: passwordController,
                        label: "Mật khẩu",
                        prefixIcon: Icons.lock_outline,
                        isSecure: true,
                      ),
                    const SizedBox(
                      height: 8,
                    ),
                    CustomElevatedButton(
                      label: isSignIn ? "Đăng nhập" : "Tiếp theo",
                      onPressed: isSignIn ? () => signIn(context) : () => signUp(context),
                    ),
                  ],
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Text(isSignIn ? "Bạn chưa có tài khoản?" : "Bạn đã có tài khoản?"),
                  SizedBox(
                    height: 30,
                    child: TextButton(
                      onPressed: () => setState(() {
                        isSignIn = !isSignIn;
                      }),
                      child: Text(
                        isSignIn ? "Đăng ký" : "Đăng nhập",
                        style: TextStyle(
                          color: AppColors.secondary,
                        ),
                      ),
                    ),
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
