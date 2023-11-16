import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:tiem_cat_vung_me/routes/app_route_constants.dart';
import 'package:tiem_cat_vung_me/utils/colors.dart';

class CustomNotiIconButton extends StatefulWidget {
  const CustomNotiIconButton({
    super.key,
    required this.icon,
    required this.amount,
    required this.onPressed,
  });

  final IconData icon;
  final int amount;
  final void Function() onPressed;

  @override
  State<CustomNotiIconButton> createState() => _CustomNotiIconButtonState();
}

class _CustomNotiIconButtonState extends State<CustomNotiIconButton> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        IconButton(onPressed: widget.onPressed, icon: Icon(widget.icon)),
        Positioned(
          top: 5,
          right: 9,
          child: Container(
            padding: const EdgeInsets.all(2),
            decoration: BoxDecoration(
              color: AppColors.secondary,
              borderRadius: BorderRadius.circular(8),
            ),
            constraints: const BoxConstraints(
              minWidth: 14,
              minHeight: 14,
            ),
            child: Text(
              widget.amount <= 99 ? "${widget.amount}" : "99+",
              style: TextStyle(
                color: AppColors.white,
                fontSize: 9,
              ),
              textAlign: TextAlign.center,
            ),
          ),
        )
      ],
    );
  }
}
