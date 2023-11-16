import 'package:cloud_firestore/cloud_firestore.dart';

class User {
  User({
    required this.uid,
    required this.username,
    required this.password,
    required this.phoneNumber,
  });

  final String uid;
  final String username;
  final String password;
  final String phoneNumber;

  Map<String, dynamic> toJson() => {
        "uid": uid,
        "username": username,
        "password": password,
        "phonenumber": phoneNumber
      };

  // static User snapshotToUserModel(DocumentSnapshot snapshot) {}
}
