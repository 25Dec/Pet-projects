import 'package:flutter/material.dart';

import 'package:nfc_convenient_parking_service_for_small_areas/utils/app_colors.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/others/bottom_nav_bar.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/welcome_signin_signup/custom_button_with_prefix_image.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/welcome_signin_signup/custom_divider.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/welcome_signin_signup/custom_text_field.dart';
import 'package:nfc_convenient_parking_service_for_small_areas/widgets/welcome_signin_signup/custom_button.dart';

class AuthScreen extends StatefulWidget {
  const AuthScreen({super.key});

  @override
  State<AuthScreen> createState() => _AuthScreenState();
}

class _AuthScreenState extends State<AuthScreen> {
  bool isSignIn = true;
  String imgUrl = "assets/images/welcome.gif";
  TextEditingController phoneNumbController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  void toggleSignIn() {
    setState(() => isSignIn = !isSignIn);
    if (isSignIn) {
      setState(() {
        imgUrl = "assets/images/welcome.gif";
      });
    } else {
      setState(() {
        imgUrl = "assets/images/sign_up.png";
      });
    }
  }

  void submit() async {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (ctx) => const BottomNavBar(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    double screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
      body: SafeArea(
        child: Container(
          height: screenHeight,
          padding: const EdgeInsets.fromLTRB(32, 0, 32, 0),
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Image.asset(
                  imgUrl,
                  width: 290,
                ),
                Text(
                  "NFC Convenient Parking Service For Small Areas",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: AppColors.gray["Text"]!,
                    fontWeight: FontWeight.bold,
                    fontSize: 26,
                  ),
                ),
                const SizedBox(
                  height: 24,
                ),
                Form(
                  child: Column(
                    children: [
                      CustomTextField(
                        label: "Phone number",
                        textController: phoneNumbController,
                        prefixIcon: Icons.phone_outlined,
                        enableNumpad: true,
                      ),
                      const SizedBox(
                        height: 8,
                      ),
                      if (isSignIn)
                        CustomTextField(
                          label: "Password",
                          textController: passwordController,
                          prefixIcon: Icons.lock_outline,
                          isSecure: true,
                        ),
                    ],
                  ),
                ),
                const SizedBox(
                  height: 8,
                ),
                CustomButton(
                  text: isSignIn ? "Sign In" : "Sign Up",
                  backgroundColor: AppColors.green["200"]!,
                  textColor: AppColors.green["Text"]!,
                  onPressed: submit,
                ),
                const SizedBox(
                  height: 16,
                ),
                const CustomDivider(),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    CustomButtonWithPrefixImage(
                      onPressed: () {},
                      imageAsset: "assets/images/facebook.png",
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    CustomButtonWithPrefixImage(
                      onPressed: () {},
                      imageAsset: "assets/images/google.png",
                    ),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      isSignIn ? "Don't have an account?" : "Already have an account?",
                    ),
                    TextButton(
                      style: ButtonStyle(
                        splashFactory: NoSplash.splashFactory,
                        overlayColor: MaterialStateProperty.all(Colors.transparent),
                      ),
                      onPressed: toggleSignIn,
                      child: Text(
                        isSignIn ? "Sign Up" : "Sign In",
                        style: TextStyle(color: AppColors.green["200"]),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
