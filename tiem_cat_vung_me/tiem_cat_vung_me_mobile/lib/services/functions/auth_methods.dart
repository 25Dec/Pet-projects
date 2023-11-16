import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class AuthMethods {
  static FirebaseAuth _auth = FirebaseAuth.instance;
  static FirebaseFirestore _firestore = FirebaseFirestore.instance;

  static Future<String> signUp({required String phoneNumber}) async {
    String res = "Some error occured";

    try {
      if (phoneNumber.isNotEmpty) {
        await _auth.verifyPhoneNumber(
          phoneNumber: phoneNumber,
          verificationCompleted: (phoneAuthCredential) async {
            await _auth.signInWithCredential(phoneAuthCredential);
          },
          verificationFailed: (error) async {},
          codeSent: (verificationId, forceResendingToken) async {},
          codeAutoRetrievalTimeout: (verificationId) async {},
        );

        res = "success";
      } else {
        res = "Please enter your phonenumber";
      }
    } catch (err) {
      res = err.toString();
    }

    return res;
  }

  static Future<String> signIn({required String phoneNumber}) async {
    String res = "Some error occured";

    try {
      if (phoneNumber.isNotEmpty) {
        await _auth.verifyPhoneNumber(
          phoneNumber: phoneNumber,
          verificationCompleted: (phoneAuthCredential) async {
            await _auth.signInWithCredential(phoneAuthCredential);
          },
          verificationFailed: (error) async {},
          codeSent: (verificationId, forceResendingToken) async {},
          codeAutoRetrievalTimeout: (verificationId) async {},
        );

        res = "success";
      } else {
        res = "Please enter your phonenumber";
      }
    } catch (err) {
      res = err.toString();
    }

    return res;
  }
}
